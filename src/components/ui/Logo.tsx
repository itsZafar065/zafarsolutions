"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  textClassName?: string;
  href?: string;
}

export function ZSIcon({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const dimensionMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const pxMap = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const dim = dimensionMap[size];
  const px = pxMap[size];

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl flex items-center justify-center p-[1px] overflow-hidden group shadow-lg shadow-brandBlue/10 transition-all duration-300 ${dim} ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(56, 189, 248, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, rgba(74, 222, 128, 0.6) 100%)",
      }}
    >
      {/* Background card with glass effect */}
      <div className="w-full h-full rounded-[11px] sm:rounded-[15px] bg-[#070417] dark:bg-[#060317] flex items-center justify-center relative overflow-hidden transition-colors">
        {/* Ambient subtle glow backlights */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#38bdf8]/30 rounded-full blur-md pointer-events-none group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#34d399]/25 rounded-full blur-md pointer-events-none group-hover:scale-125 transition-transform duration-500" />

        {/* Scalable SVG Emblem */}
        <svg
          viewBox="0 0 40 40"
          width={px - 8}
          height={px - 8}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Z Gradient: Cyan -> Electric Indigo */}
            <linearGradient id="z-grad-elem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            {/* S Gradient: Violet -> Emerald */}
            <linearGradient id="s-grad-elem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          {/* Letter Z */}
          <path
            d="M 9 12.5 H 20.5 L 10 27.5 H 21.5"
            stroke="url(#z-grad-elem)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter S */}
          <path
            d="M 31 15.2 C 30.2 13.2 28.2 12.2 25.8 12.2 C 23.2 12.2 21.8 13.6 21.8 15.8 C 21.8 19.8 31 19.2 31 23.8 C 31 26.6 28.8 27.8 25.8 27.8 C 23.2 27.8 21.8 26.4 21.4 24.6"
            stroke="url(#s-grad-elem)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Micro Sparkle Accent (✦) */}
          <path
            d="M 32 7.5 L 32.7 9.3 L 34.5 10 L 32.7 10.7 L 32 12.5 L 31.3 10.7 L 29.5 10 L 31.3 9.3 Z"
            fill="#38bdf8"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  textClassName = "",
  href = "/",
}: LogoProps) {
  const content = (
    <div className={`flex items-center gap-2 sm:gap-3 group cursor-pointer ${className}`}>
      <ZSIcon size={size} />

      {showText && (
        <div className={`flex flex-col leading-none ${textClassName}`}>
          <div className="flex items-center gap-1 sm:gap-1.5 font-sans tracking-tight">
            <span className="text-foreground font-black text-base sm:text-xl tracking-tight">
              Zafar
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue via-brandPurple to-brandGreen font-bold text-base sm:text-xl tracking-tight">
              Solutions
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-foreground/45 font-semibold mt-0.5">
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
