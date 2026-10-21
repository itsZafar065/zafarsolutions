"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Radio,
  CloudLightning,
  FileCode,
  Eye,
  ArrowRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { dropzaDetails } from "@/data/projects";
import DropzaGalleryModal from "./DropzaGalleryModal";

interface DropzaShowcaseProps {
  isStandalone?: boolean;
}

export default function DropzaShowcase({ isStandalone = false }: DropzaShowcaseProps) {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGalleryAt = (index: number) => {
    setSelectedScreenshotIndex(index);
    setIsGalleryOpen(true);
  };

  const currentPreview = dropzaDetails.screenshots[selectedScreenshotIndex];

  return (
    <section 
      id="dropza-showcase" 
      className={`relative w-full overflow-hidden transition-colors duration-500 ${
        isStandalone ? "py-8 sm:py-12" : "py-16 sm:py-24"
      }`}
    >
      {/* Subtle Background Glows matching portfolio theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brandPurple/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brandBlue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {!isStandalone && (
          <div className="text-center mb-10 sm:mb-14 space-y-3">
            <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              / Featured Product
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">SaaS Product</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brandPurple to-brandBlue mx-auto rounded-full" />
          </div>
        )}

        {/* CLEAN MINIMALIST SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/10 dark:border-white/10 p-5 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brandBlue/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Clean Content & Key Features */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Product
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-foreground/5 dark:bg-white/5 text-foreground/70 dark:text-white/70 border border-foreground/10 dark:border-white/10">
                  Full-Stack SaaS
                </span>
                <span className="text-[11px] text-foreground/40 dark:text-white/40 hidden sm:inline">
                  Lead Engineer
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                  {dropzaDetails.name}
                </h3>
                <p className="text-sm sm:text-base text-brandBlue font-medium italic">
                  &ldquo;{dropzaDetails.tagline}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-white/70 leading-relaxed font-light pt-1">
                  A high-performance file sharing platform pairing zero-cloud WebRTC direct peer-to-peer streaming with encrypted, short-lived S3 cloud storage.
                </p>
              </div>

              {/* Clean Feature Highlights List (Breathable & Minimalist) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Radio size={16} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-foreground">Zero-Cloud WebRTC P2P</span>
                    <p className="text-[11px] sm:text-xs text-foreground/60 dark:text-white/60 leading-relaxed">
                      Files transfer directly device-to-device in 64KB encrypted binary chunks with instant mobile QR pairing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                    <CloudLightning size={16} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-foreground">Encrypted S3 Cloud Storage</span>
                    <p className="text-[11px] sm:text-xs text-foreground/60 dark:text-white/60 leading-relaxed">
                      Direct presigned S3 uploads with self-destruct timers (1h, 24h, 7d), download limits, and bcrypt security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                    <FileCode size={16} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-foreground">Burn-After-Reading Secrets</span>
                    <p className="text-[11px] sm:text-xs text-foreground/60 dark:text-white/60 leading-relaxed">
                      Confidential credential and clipboard sharing with view limits and zero server persistence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Tech Stack Pills (Single line wrap, no giant cards) */}
              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 dark:text-white/40 mb-2">
                  Built With
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 14", "TypeScript", "WebSockets", "WebRTC", "PostgreSQL", "Prisma", "AWS S3", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-foreground/[0.04] dark:bg-white/[0.04] text-foreground/75 dark:text-white/75 border border-foreground/10 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  href={dropzaDetails.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brandPurple to-brandBlue hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandPurple/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Launch Live SaaS</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => openGalleryAt(0)}
                  className="px-6 py-3 rounded-xl bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 text-foreground dark:text-white font-bold text-xs uppercase tracking-wider border border-foreground/10 dark:border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye size={14} className="text-brandBlue" />
                  <span>View Screenshots (8)</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Sleek Single Visual & Quick Selector */}
            <div className="lg:col-span-6 w-full">
              <div className="relative group">
                
                {/* Main Visual Frame */}
                <div 
                  onClick={() => openGalleryAt(selectedScreenshotIndex)}
                  className="relative rounded-2xl overflow-hidden border border-foreground/10 dark:border-white/10 bg-black/40 shadow-2xl aspect-[16/10] sm:aspect-video cursor-pointer group/frame"
                >
                  <Image
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/frame:scale-105"
                    loading="lazy"
                  />

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/frame:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-center p-4">
                    <div className="p-3 rounded-full bg-white text-black shadow-xl">
                      <Eye size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Click to Enlarge
                    </span>
                    <p className="text-[11px] text-white/70 max-w-xs line-clamp-1">
                      {currentPreview.title}
                    </p>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white flex items-center gap-1 shadow-lg pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{currentPreview.category}</span>
                  </div>
                </div>

                {/* Minimalist 4-Button Screen Switcher Below */}
                <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {[
                    { idx: 0, label: "Hero Landing" },
                    { idx: 1, label: "Cloud Upload" },
                    { idx: 2, label: "P2P Room" },
                    { idx: 5, label: "Dashboard" },
                    { idx: 6, label: "Mobile View" },
                  ].map((tab) => {
                    const isSelected = selectedScreenshotIndex === tab.idx;
                    return (
                      <button
                        key={tab.idx}
                        onClick={() => setSelectedScreenshotIndex(tab.idx)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all shrink-0 cursor-pointer ${
                          isSelected
                            ? "bg-brandBlue text-white shadow-md shadow-brandBlue/20"
                            : "bg-foreground/5 dark:bg-white/5 text-foreground/60 dark:text-white/60 hover:text-foreground dark:hover:text-white border border-foreground/5 dark:border-white/5"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isGalleryOpen && (
        <DropzaGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          screenshots={dropzaDetails.screenshots}
          initialIndex={selectedScreenshotIndex}
        />
      )}
    </section>
  );
}
