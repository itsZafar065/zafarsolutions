"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Code2, X, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { projectsData } from "@/data/projects";

// Categories definition
const categories = ["All", "Laravel", "Next.js", "WordPress", "Custom Software", "Figma"];

export default function OurWorkPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      filter === "All" ||
      (Array.isArray(project.category)
        ? (project.category as string[]).includes(filter)
        : project.category === filter);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14 space-y-3">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs"
            >
              / Portfolio Showcase
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandGreen">Work</span>
            </motion.h1>
            <p className="text-foreground/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Explore our real-world enterprise web applications, e-commerce stores, and high-performance software solutions.
            </p>
          </div>

          {/* Filter Bar & Search: Mobile First Responsive Layout */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 mb-10 w-full">
            
            {/* Scrollable Category Track for Mobile */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center gap-2 min-w-max md:flex-wrap">
                {categories.map((cat) => {
                  const isActive = filter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-brandPurple to-brandBlue text-white shadow-lg shadow-brandPurple/25 scale-[1.02]"
                          : "bg-foreground/[0.04] dark:bg-white/[0.04] text-foreground/65 hover:text-foreground hover:bg-foreground/[0.08] border border-foreground/[0.08] dark:border-white/[0.08]"
                      }`}
                    >
                      {cat === "Figma" ? "🎨 Figma" : cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/35" size={16} />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 dark:border-white/10 rounded-full py-2.5 sm:py-3 pl-10 pr-9 text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground p-1 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Special Figma UI/UX Showcase when filter === "Figma" */}
          {filter === "Figma" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-b from-foreground/[0.03] to-transparent dark:from-white/[0.02] border border-foreground/10 dark:border-white/10 rounded-3xl p-6 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl"
            >
              {/* Backlight Ambient Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#A259FF]/15 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Figma Logo Emblem */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/50 dark:bg-black/70 border border-white/10 flex items-center justify-center mb-6 shadow-xl p-3.5 group hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 38 57" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-brandPurple/15 text-brandPurple border border-brandPurple/30">
                    🎨 UI/UX DESIGN LAB
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    🔒 Enterprise NDA Projects
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-4 tracking-tight">
                  Curating Fresh Figma UI/UX Prototypes & Case Studies
                </h2>

                <p className="text-foreground/70 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed mb-8">
                  We are currently formatting and publishing our latest high-fidelity Figma design files, atomic design systems, and client web & mobile app prototypes. 
                  Because our primary enterprise design systems are protected under confidential <strong>Non-Disclosure Agreements (NDAs)</strong>, private interactive walkthroughs are available on-demand.
                </p>

                {/* 3 Teaser Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mb-8 text-left">
                  <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 hover:border-brandBlue/30 transition-all">
                    <div className="text-brandBlue font-bold text-sm mb-1">Interactive Prototypes</div>
                    <p className="text-foreground/60 text-xs leading-relaxed">
                      Fluid micro-animations, clickable user journeys, and pixel-perfect responsive layouts.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 hover:border-brandPurple/30 transition-all">
                    <div className="text-brandPurple font-bold text-sm mb-1">Atomic Design Systems</div>
                    <p className="text-foreground/60 text-xs leading-relaxed">
                      Custom typography scales, cohesive color palettes, and developer-ready Tailwind tokens.
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 hover:border-brandGreen/30 transition-all">
                    <div className="text-brandGreen font-bold text-sm mb-1">SaaS & Mobile Apps</div>
                    <p className="text-foreground/60 text-xs leading-relaxed">
                      Conversion-optimized admin portals, dashboard analytics, and clean iOS/Android wireframes.
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                  <a
                    href="https://api.whatsapp.com/send/?phone=923132804232&text=Hi%20Zafar!%20I%20would%20like%20to%20request%20a%20private%20walkthrough%20of%20your%20Figma%20UI/UX%20design%20prototypes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brandPurple to-brandBlue text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-brandPurple/20 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> Request Figma Walkthrough
                  </a>
                  <Link
                    href="/contact?plan=Project-Based"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    Inquire via Contact Form <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Regular Projects Grid */
            <>
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-brandBlue/30 transition-all shadow-xl flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative aspect-video overflow-hidden">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          {project.status && (
                            <div className="absolute top-3 right-3 z-10">
                              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${
                                project.status === "In Progress"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                                  : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              }`}>
                                ● {project.status}
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            {project.link !== "#" ? (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 bg-white text-black rounded-full hover:bg-brandBlue hover:text-white transition-colors"
                                title="Visit Live Site"
                              >
                                <ExternalLink size={20} />
                              </a>
                            ) : (
                              <span className="text-white text-xs font-semibold px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
                                Under Development
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Code2 size={14} className="text-brandBlue" />
                            <span className="text-[10px] uppercase tracking-widest text-[#4ade80] font-bold">
                              {project.displayCategory || (Array.isArray(project.category) ? project.category.join(" / ") : project.category)}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-brandBlue transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-foreground/60 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {project.desc}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                        {project.link !== "#" ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue hover:underline"
                          >
                            Visit Live Project <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-xs font-medium text-foreground/40 italic">
                            Under Active Development
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-foreground/50 space-y-3">
                  <p className="text-sm font-medium">No projects found matching &ldquo;{searchQuery}&rdquo;.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setFilter("All"); }}
                    className="text-xs text-brandBlue font-bold hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </main>
  );
}
