"use client";
import React from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-background overflow-hidden transition-colors duration-500 pt-20">
      
      {/* 3D Purple Glowing Background Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandPurple/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-brandBlue/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            {/* Small Badge */}
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brandPurple/10 border border-brandPurple/20 text-brandPurple text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mx-auto lg:mx-0">
              I am a Full Stack Developer
            </div>

            {/* Headings */}
            <h1 className="text-[32px] sm:text-[48px] md:text-[54px] lg:text-[64px] font-black text-foreground leading-tight tracking-tight">
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">Zafar</span>
            </h1>
            <h2 className="text-[20px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-extrabold text-foreground/90 leading-tight">
              I build things for the web.
            </h2>
            
            <p className="text-foreground/60 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              I am a passionate web developer specializing in building exceptional digital experiences with modern technologies (React, Next.js, WordPress, and Custom Software).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Magnetic>
              <a href="/our-work" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brandPurple to-brandBlue hover:from-brandPurple/90 hover:to-brandBlue/90 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brandPurple/20 transition-all duration-300">
                View My Work <ArrowRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:zafarsolutions.pk@gmail.com" className="inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 hover:border-foreground/40 text-foreground font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300">
                Contact Me <Download size={16} />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-full aspect-square max-w-[270px] sm:max-w-[320px] md:max-w-[420px] flex items-center justify-center">
            
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-[80%] aspect-square bg-gradient-to-br from-brandPurple to-brandBlue rounded-full opacity-60 blur-md z-0" />
            
            {/* Developer Avatar Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-[6px] border-foreground/10 dark:border-white/10 shadow-2xl z-10 bg-foreground/5 dark:bg-[#0d0a21]">
              <Image 
                src="/mypic.png" 
                alt="Zafar Muhammad" 
                fill
                priority
                className="object-cover object-top brightness-95"
              />
            </div>

            {/* Floating Terminal Code Card */}
            <div className="hidden sm:absolute bottom-[-2%] right-[-4%] sm:right-[-10%] md:right-[-15%] bg-[#080616]/90 border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl z-20 backdrop-blur-md max-w-[180px] xs:max-w-[220px] md:max-w-[260px] font-mono text-[9px] xs:text-[10px] md:text-xs text-white/80 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[8px] xs:text-[9px] text-white/30 ml-2">zafar.json</span>
              </div>
              <div>
                <span className="text-brandPurple">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-brandBlue">"Zafar"</span>,
              </div>
              <div className="pl-4">
                skills: [
                <div className="pl-4 text-brandGreen">"React", "Next.js",</div>
                <div className="pl-4 text-brandGreen">"WordPress", "Figma"</div>
                <div className="pl-4">],</div>
              </div>
              <div className="pl-4">
                passion: <span className="text-brandOrange">"Web Apps"</span>
              </div>
              <div>&#125;;</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}