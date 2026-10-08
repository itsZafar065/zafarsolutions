"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, Layers } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function AboutHero() {
  return (
    <section className="relative min-h-[75vh] w-full flex items-center bg-background overflow-hidden pt-32 pb-20 transition-colors duration-500">
      
      {/* Premium Purple and Blue Glowing Background Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-brandPurple/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-brandBlue/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Small Badge */}
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-brandPurple uppercase border border-brandPurple/20 bg-brandPurple/5 rounded-full">
              / Zafar Muhammad Portfolio
            </span>

            {/* Main Playfair Display Heading */}
            <h1 className="text-[28px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-black text-foreground leading-[1.15] tracking-tight">
              Creating clean code &amp; <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple via-brandBlue to-brandGreen">
                premium digital experiences.
              </span>
            </h1>

            {/* Concise Bio */}
            <p className="text-foreground/75 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              I am a passionate Full Stack Developer with over 5 years of active professional delivery. I build complete frontend interfaces in React/Next.js, structure robust custom backend systems in Laravel &amp; Node.js, and deploy custom content systems in WordPress.
            </p>

            {/* Skill focus list */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-foreground/50 text-xs md:text-sm font-semibold tracking-wider uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brandPurple" /> Next.js Development
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brandBlue" /> WordPress E-Commerce
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brandGreen" /> Figma UI/UX Design
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Magnetic>
                <a href="/contact" className="premium-button">
                  <span className="premium-button-content">
                    Start a Project <ArrowRight size={16} />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/our-work" className="premium-button premium-button-secondary">
                  <span className="premium-button-content">
                    View Our Work
                  </span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
