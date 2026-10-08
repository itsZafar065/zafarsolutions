"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
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
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b ${
      scrolled 
        ? "bg-white/80 dark:bg-[#030014]/85 backdrop-blur-xl border-black/[0.06] dark:border-white/[0.08] py-3.5 shadow-xl dark:shadow-brandBlue/5" 
        : "bg-transparent border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        
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
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-[10001] w-10 h-10 sm:w-11 sm:h-11 flex flex-col items-center justify-center gap-1.5 text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-xl transition-all duration-300 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] rounded-full transition-all duration-300 transform origin-center ${
              isOpen ? "rotate-45 translate-y-[8px] bg-brandPurple" : "bg-current group-hover:bg-brandBlue"
            }`} />
            <span className={`w-5 h-[2px] rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : "bg-current group-hover:bg-brandBlue"
            }`} />
            <span className={`w-5 h-[2px] rounded-full transition-all duration-300 transform origin-center ${
              isOpen ? "-rotate-45 -translate-y-[8px] bg-brandPurple" : "bg-current group-hover:bg-brandBlue"
            }`} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            data-lenis-prevent
            className="fixed inset-0 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-2xl z-[10000] lg:hidden overflow-y-auto"
          >
             <div className="min-h-screen flex flex-col justify-between p-8 pt-32">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-2xl font-semibold font-sans text-foreground hover:text-brandBlue transition-all flex items-center justify-between group py-2 border-b border-foreground/5"
                      >
                        {link.name}
                        <ArrowRight size={20} className="text-foreground/20 group-hover:text-brandBlue group-hover:translate-x-2 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 space-y-6 pb-10">
                   <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/40">Say Hello</p>
                      <Link href="mailto:zafarsolutions.pk@gmail.com" className="text-xl font-bold text-foreground hover:text-brandBlue transition-colors">
                        zafarsolutions.pk@gmail.com
                      </Link>
                   </div>
                   
                   <div className="flex gap-6">
                      <Link href="https://www.linkedin.com/in/zafarmuhammadd/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brandBlue hover:text-white hover:border-brandBlue transition-all">
                         <Linkedin size={18} />
                      </Link>
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}