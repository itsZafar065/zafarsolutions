"use client";
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Javascript", icon: "javascript/javascript-original" },
  { name: "Typescript", icon: "typescript/typescript-original" },
  { name: "React", icon: "react/react-original" },
  { name: "NextJS", icon: "nextjs/nextjs-original" },
  { name: "TailwindCSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "Figma", icon: "figma/figma-original" },
  { name: "PHP", icon: "php/php-original" },
  { name: "Laravel", icon: "laravel/laravel-original" },
  { name: "NodeJS", icon: "nodejs/nodejs-original" },
  { name: "Express", icon: "express/express-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-original" },
  { name: "Firebase", icon: "firebase/firebase-original" },
  { name: "Git", icon: "git/git-original" }
];

export default function TechMarquee() {
  // Duplicate list to prevent empty spaces during infinite scroll
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-12 bg-background/50 relative overflow-hidden transition-colors duration-300">
      
      {/* Centralized Title */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-brandPurple font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
          / Stack &amp; Skills
        </p>
        <h3 className="text-lg md:text-xl font-bold text-foreground/50 mt-1">
          Technologies I work with
        </h3>
      </div>

      {/* Marquee Wrapper with soft edge fading */}
      <div className="relative w-full flex overflow-x-hidden">
        
        {/* Left Glow overlay */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Glow overlay */}
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Body */}
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-8 md:gap-12 shrink-0 items-center justify-around"
        >
          {marqueeItems.map((tech, index) => {
            const isExpress = tech.name === "Express";
            const isNext = tech.name === "NextJS";
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/5 hover:border-foreground/10 transition-all duration-300 group shrink-0"
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} 
                    alt={tech.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    className={`w-6 h-6 object-contain group-hover:scale-110 transition-transform ${
                      isExpress || isNext ? "dark:invert" : ""
                    }`}
                    onError={(e) => {
                      // Fallback for icons that might have minor path issues
                      const target = e.target as HTMLImageElement;
                      if (tech.name === "Express") {
                        target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg";
                      }
                      if (tech.name === "NextJS") {
                        target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg";
                      }
                    }}
                  />
                </div>
                <span className="text-foreground/70 font-semibold text-sm tracking-tight group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
