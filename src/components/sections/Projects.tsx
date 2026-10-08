"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { projectsData } from "@/data/projects";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const displayProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
            / Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            Engineering <span className="text-foreground/40 font-light">Masterpieces</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brandBlue to-brandGreen mx-auto rounded-full" />
        </motion.div>

        {/* CAROUSEL */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={displayProjects.length > 2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-16 !overflow-visible"
        >
          {displayProjects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative w-full max-w-[360px] bg-foreground/[0.03] rounded-3xl border border-foreground/5 overflow-hidden flex flex-col items-center text-center p-4 transition-all duration-500 hover:border-brandBlue/30 hover:shadow-2xl hover:shadow-brandBlue/5 backdrop-blur-sm"
              >
                {/* Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all" />
                  {project.status && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${
                        project.status === "In Progress"
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      }`}>
                        ● {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 pb-4 flex flex-col items-center flex-1 justify-between">
                  <div className="space-y-3">
                    <span className="text-brandGreen font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-brandGreen/10 border border-brandGreen/20">
                      {project.displayCategory}
                    </span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brandBlue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/50 text-xs md:text-sm leading-relaxed max-w-[280px] font-light italic">
                      &quot;{project.desc}&quot;
                    </p>
                  </div>
                  
                  {project.link !== "#" ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-foreground text-[11px] font-bold uppercase tracking-widest mx-auto group-hover:text-brandBlue transition-all"
                    >
                      View Live Project <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                    </a>
                  ) : (
                    <span className="mt-4 flex items-center gap-1.5 text-amber-400/80 text-[10px] font-semibold uppercase tracking-widest mx-auto cursor-default bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Under Active Development
                    </span>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: var(--foreground) !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #38bdf8 !important; opacity: 1; }
      `}</style>
    </section>
  );
}