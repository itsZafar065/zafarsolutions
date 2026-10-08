"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Code2 } from "lucide-react";

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
        ? project.category.includes(filter as any)
        : project.category === filter);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-foreground"
            >
              Our <span className="text-brandBlue">Work</span>
            </motion.h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Check out some of our awesome projects with creative ideas and great design.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-foreground/5 p-4 rounded-3xl border border-foreground/10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat 
                    ? "bg-brandPurple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                    : "bg-foreground/5 text-foreground/40 hover:bg-foreground/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-foreground/10 rounded-full py-3 pl-12 pr-6 text-sm text-foreground focus:border-brandBlue outline-none transition-all"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-brandBlue/30 transition-all shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 size={14} className="text-brandBlue" />
                        <span className="text-[10px] uppercase tracking-widest text-[#4ade80] font-bold">
                          {project.displayCategory || (Array.isArray(project.category) ? project.category.join(" / ") : project.category)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-brandBlue transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-foreground/60 text-xs md:text-sm line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
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
            <div className="text-center py-20 text-foreground/50">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
