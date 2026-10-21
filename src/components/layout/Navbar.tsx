"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";

interface NavLinkProps {
  href?: string;
  name: string;
  isButton?: boolean;
}

const NavLink = memo(({ href, name, isButton = false }: NavLinkProps) => {
  if (isButton) {
    return (
      <button className="flex items-center gap-1 text-foreground/70 hover:text-foreground text-sm font-medium transition-colors py-2 px-1 relative group">
        {name} 
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
    );
  }
  return (
    <Link href={href || "#"} className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors py-2 px-1 relative group">
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandBlue transition-all group-hover:w-full" />
    </Link>
  );
});

NavLink.displayName = "NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/our-work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-background/85 dark:bg-[#030014]/90 backdrop-blur-xl border-foreground/10 py-3.5 shadow-xl dark:shadow-brandBlue/5" 
          : "bg-transparent border-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="relative z-[10001] shrink-0">
            <Logo href="/" size="md" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
              >
                <NavLink href={link.href} name={link.name} />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 relative z-[10001] shrink-0">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Link 
                href="/contact" 
                className="premium-button"
              >
                <span className="premium-button-content">
                  Get in Touch <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            
            {/* Mobile Hamburger Toggle Button */}
            <button 
              type="button"
              onClick={() => setIsOpen((prev) => !prev)} 
              className="lg:hidden relative z-[10001] w-10 h-10 flex items-center justify-center text-foreground bg-foreground/5 hover:bg-foreground/10 active:scale-95 border border-foreground/10 rounded-xl transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={20} className="text-brandPurple" />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Outside nav so it attaches directly to viewport) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-nav-overlay"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.22, ease: "easeOut" }}
            data-lenis-prevent="true"
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-[9990] lg:hidden overflow-y-auto flex flex-col justify-between p-6 sm:p-8 pt-24 pb-8 min-h-screen"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-2xl font-bold font-sans text-foreground hover:text-brandBlue transition-all flex items-center justify-between group py-2.5 border-b border-foreground/5"
                  >
                    {link.name}
                    <ArrowRight size={18} className="text-foreground/30 group-hover:text-brandBlue group-hover:translate-x-1.5 transition-all" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2">
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-brandPurple to-brandBlue text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandPurple/20"
                >
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-foreground/10 space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">Say Hello</p>
                <a href="mailto:zafarsolutions.pk@gmail.com" className="text-sm sm:text-base font-semibold text-foreground hover:text-brandBlue transition-colors block">
                  zafarsolutions.pk@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/itsZafar065" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brandBlue hover:text-white hover:border-brandBlue transition-all"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/zafarmuhammadd/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brandBlue hover:text-white hover:border-brandBlue transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
