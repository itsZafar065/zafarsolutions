"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Layout, Award, Coffee, Clock } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Ambient background lights */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-brandPurple/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-brandBlue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Premium Visual Representation */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 w-full">
            <div className="relative w-full max-w-[440px] mx-auto min-h-[380px] sm:min-h-[440px] lg:aspect-square flex items-center justify-center">
              
              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-foreground/10 dark:border-white/10 rounded-[48px] rotate-3 scale-95 pointer-events-none" />
              <div className="absolute inset-0 border border-brandPurple/30 rounded-[48px] -rotate-3 scale-95 pointer-events-none" />

              {/* Main Content Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-full bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/10 dark:border-white/10 rounded-[48px] p-6 sm:p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-brandPurple/30 transition-all duration-500"
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-brandPurple/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Stats Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-brandPurple/10 text-brandPurple rounded-2xl">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Freelance Experience</h4>
                      <p className="text-foreground/50 text-xs font-light">Direct client delivery & contracts</p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-foreground/10" />

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-foreground">10+</p>
                      <p className="text-foreground/50 text-[11px] font-bold uppercase tracking-wider">Completed Projects</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-brandGreen">99%</p>
                      <p className="text-foreground/50 text-[11px] font-bold uppercase tracking-wider">Client Satisfaction</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-brandBlue">24/7</p>
                      <p className="text-foreground/50 text-[11px] font-bold uppercase tracking-wider">Agile Support</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-foreground">5+ Years</p>
                      <p className="text-foreground/50 text-[11px] font-bold uppercase tracking-wider">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Micro Details */}
                <div className="mt-8 pt-6 border-t border-foreground/10 flex items-center justify-between text-foreground/40 text-xs font-mono">
                  <span>// Portfolio Stats</span>
                  <span>status: Active</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: About Me Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs block">
                / About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                Who is Zafar Muhammad?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brandPurple to-brandBlue rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-light">
                I am a dedicated <strong>Full Stack Developer</strong> with a proven track record of converting abstract layouts into fully scalable and interactive web applications. 
              </p>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed border-l-2 border-brandPurple/30 pl-6 font-light italic">
                With <strong>5+ years of solid full-stack development experience</strong>, I understand project life cycles end-to-end. My background includes architecting complex enterprise systems, scalable web applications, alongside specialized Laravel, Next.js, and WordPress solutions delivering high-performance platforms.
              </p>
            </div>

            {/* Core Capabilities Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 rounded-2xl">
                <Code2 className="text-brandPurple shrink-0" size={20} />
                <span className="text-foreground/80 text-sm font-semibold">Next.js & Custom Softwares</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 rounded-2xl">
                <Smartphone className="text-brandBlue shrink-0" size={20} />
                <span className="text-foreground/80 text-sm font-semibold">WordPress & E-Commerce</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 rounded-2xl">
                <Layout className="text-brandGreen shrink-0" size={20} />
                <span className="text-foreground/80 text-sm font-semibold">Figma UI/UX Prototyping</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 rounded-2xl">
                <Clock className="text-brandOrange shrink-0" size={20} />
                <span className="text-foreground/80 text-sm font-semibold">Project Management Scopes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Magnetic>
                <Link href="/about" className="premium-button">
                  <span className="premium-button-content">
                    More About Me
                  </span>
                </Link>
              </Magnetic>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}