"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Full Stack Engineering", href: "/services" },
    { name: "WordPress Development", href: "/services" },
    { name: "UI/UX Design (Figma)", href: "/services" },
    { name: "Project Management", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 relative overflow-hidden border-t border-foreground/5 transition-colors duration-300">
      {/* Background 3D Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* SECTION 1: Brand & About */}
          <div className="space-y-6">
            <Logo href="/" size="md" />
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Building high-performance Next.js, React, and WordPress solutions with premium UI/UX designs.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.linkedin.com/in/zafarmuhammadd/" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#38bdf8" }}
                className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/40 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* SECTION 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-[#38bdf8] text-sm transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#38bdf8] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: Expertise */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-[#4ade80] text-sm transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#4ade80] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: Contact info */}
          <div className="space-y-6">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-foreground/60">
                <MapPin size={18} className="text-[#38bdf8] shrink-0" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
              <a href="mailto:zafarsolutions.pk@gmail.com" className="flex items-center gap-3 text-foreground/60 hover:text-[#38bdf8] transition-colors">
                <Mail size={18} className="text-[#38bdf8] shrink-0" />
                <span className="text-sm">zafarsolutions.pk@gmail.com</span>
              </a>
            </div>
            {/* 3D Call to Action Card in Footer */}
            <div className="mt-8 p-4 bg-gradient-to-br from-foreground/5 to-transparent border border-foreground/10 rounded-2xl group hover:border-[#38bdf8]/30 transition-all">
               <p className="text-[10px] text-[#38bdf8] font-bold uppercase mb-2">Hire Me</p>
               <Link href="/contact" className="text-foreground font-bold text-sm flex items-center justify-between group-hover:text-[#38bdf8]">
                 Get in Touch <ArrowUpRight size={16} />
               </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} Zafar Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-foreground/40 text-xs font-medium">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}