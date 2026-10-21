"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";
import Image from "next/image";
import { DropzaScreenshot } from "@/data/projects";

interface DropzaGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: DropzaScreenshot[];
  initialIndex?: number;
}

export default function DropzaGalleryModal({
  isOpen,
  onClose,
  screenshots,
  initialIndex = 0,
}: DropzaGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  const currentScreenshot = screenshots[currentIndex];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100000] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Dropza Screenshot Showcase Gallery"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl max-h-[96vh] flex flex-col bg-[#0b0f19] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-white"
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-white/10 bg-[#0f1423]/80 backdrop-blur-md">
            <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                {currentScreenshot.isMobile ? (
                  <>
                    <Smartphone size={11} /> Mobile View
                  </>
                ) : (
                  <>
                    <Monitor size={11} /> Desktop View
                  </>
                )}
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 font-mono shrink-0">
                {currentIndex + 1} / {screenshots.length}
              </span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold text-white/90 truncate hidden xs:inline">
                {currentScreenshot.title}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MAIN SCREENSHOT DISPLAY */}
          <div className="relative flex-1 min-h-[260px] sm:min-h-[420px] md:min-h-[500px] max-h-[55vh] sm:max-h-[66vh] flex items-center justify-center p-2 sm:p-6 bg-gradient-to-b from-[#090d16] via-[#050811] to-[#090d16] overflow-hidden select-none">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenshot.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full h-full flex items-center justify-center ${
                  currentScreenshot.isMobile ? "max-w-[280px] sm:max-w-[340px]" : "max-w-5xl"
                }`}
              >
                <div className={`relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden ${
                  currentScreenshot.isMobile ? "border-2 sm:border-4 border-white/20 rounded-[28px] sm:rounded-[32px] p-1.5 bg-black shadow-2xl" : "border border-white/10 shadow-2xl"
                }`}>
                  <Image
                    src={currentScreenshot.image}
                    alt={currentScreenshot.title}
                    width={currentScreenshot.isMobile ? 480 : 1600}
                    height={currentScreenshot.isMobile ? 960 : 900}
                    loading="lazy"
                    className="max-h-[50vh] sm:max-h-[60vh] w-auto object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* PREV / NEXT ARROWS */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md hover:scale-105 cursor-pointer z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={18} className="sm:hidden" />
              <ChevronLeft size={22} className="hidden sm:block" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md hover:scale-105 cursor-pointer z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight size={18} className="sm:hidden" />
              <ChevronRight size={22} className="hidden sm:block" />
            </button>
          </div>

          {/* CAPTION & ARCHITECTURE CONTEXT */}
          <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 border-t border-white/10 bg-[#0f1423]/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
              <div className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-emerald-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                    {currentScreenshot.category}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90 text-xs sm:text-sm font-semibold truncate max-w-[240px] sm:max-w-none">
                    {currentScreenshot.title}
                  </span>
                </div>
                <p className="text-white/65 text-[11px] sm:text-xs leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-none">
                  {currentScreenshot.description}
                </p>
              </div>

              <div className="text-[10px] text-white/40 font-mono hidden md:block shrink-0">
                Use ← → arrow keys to navigate
              </div>
            </div>
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#080c16] border-t border-white/5 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {screenshots.map((s, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-14 h-9 sm:w-20 sm:h-12 rounded-lg overflow-hidden border transition-all duration-200 shrink-0 cursor-pointer ${
                      isActive
                        ? "border-emerald-400 ring-2 ring-emerald-400/40 scale-105 shadow-md shadow-emerald-500/20"
                        : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="80px"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
