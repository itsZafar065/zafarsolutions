"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, LayoutDashboard, Database, ShieldCheck, Laptop, ShoppingBag, Cloud } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    desc: "Bespoke web applications built with Next.js, React, and Laravel for maximum scalability.",
    icon: <Code2 className="text-brandPurple" />,
    gradient: "from-brandPurple/20",
  },
  {
    title: "WordPress Development",
    desc: "Tailored themes, WooCommerce stores, and custom plugins tailored to your business needs.",
    icon: <Laptop className="text-brandBlue" />,
    gradient: "from-brandBlue/20",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android built with React Native.",
    icon: <Smartphone className="text-brandGreen" />,
    gradient: "from-brandGreen/20",
  },
  {
    title: "E-Commerce Solutions",
    desc: "High-conversion online stores featuring customized WooCommerce, Shopify, and Stripe integrations.",
    icon: <ShoppingBag className="text-brandOrange" />,
    gradient: "from-brandOrange/20",
  },
  {
    title: "UI/UX Figma Design",
    desc: "User-centric wireframes and high-fidelity responsive prototypes designed directly in Figma.",
    icon: <LayoutDashboard className="text-brandPurple" />,
    gradient: "from-brandPurple/20",
  },
  {
    title: "API & Cloud Integrations",
    desc: "Seamless connection of external microservices, custom APIs, and payment gateways.",
    icon: <Globe className="text-brandBlue" />,
    gradient: "from-brandBlue/20",
  },
  {
    title: "Performance & SEO",
    desc: "Technical optimization of loading speeds, accessibility scores, and Google search visibility.",
    icon: <ShieldCheck className="text-brandGreen" />,
    gradient: "from-brandGreen/20",
  },
  {
    title: "Cloud & DevOps Solutions",
    desc: "Secure deployments, hosting setups on AWS or Vercel, Docker environments, and automated CI/CD.",
    icon: <Cloud className="text-brandOrange" />,
    gradient: "from-brandOrange/20",
  },
  {
    title: "Tech Consulting & Scoping",
    desc: "Agile sprints, architecture design, and direct project delivery mapping client requirements.",
    icon: <Database className="text-brandPurple" />,
    gradient: "from-brandPurple/20",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function ServiceCard({
  service,
  index,
  isMobile,
  manualActive,
  onCardClick,
}: {
  service: typeof services[0];
  index: number;
  isMobile: boolean;
  manualActive: number | null;
  onCardClick: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Detect when this service card enters the vertical center 60% of mobile viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.25,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isActive = isMobile && (manualActive === index || (manualActive === null && isCentered));

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      onClick={() => onCardClick(index)}
      className={`group relative p-7 sm:p-8 rounded-3xl bg-background border transition-all duration-500 cursor-pointer overflow-hidden shadow-xl ${
        isActive
          ? "border-foreground/20 -translate-y-2 shadow-2xl"
          : "border-foreground/5 hover:border-foreground/10"
      }`}
    >
      {/* Glow Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} to-transparent transition-opacity duration-500 pointer-events-none ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative z-10 space-y-4">
        {/* Service Icon Box */}
        <div
          className={`w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 transition-all duration-500 ${
            isActive
              ? "scale-110 rotate-6 shadow-md"
              : "group-hover:scale-110 group-hover:rotate-6"
          }`}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isActive ? "text-brandPurple" : "text-foreground group-hover:text-brandPurple"
          }`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-foreground/60 text-sm leading-relaxed font-medium">
          {service.desc}
        </p>

        {/* Decorative Animated Bottom Bar */}
        <div className="pt-4 overflow-hidden">
          <div
            className={`h-[2px] transition-all duration-700 bg-gradient-to-r from-brandPurple to-brandBlue ${
              isActive ? "w-full" : "w-12 group-hover:w-full"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [manualActive, setManualActive] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setManualActive((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Glows for 3D Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandPurple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4 flex flex-col items-center justify-center w-full"
        >
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs">
            / My Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#38bdf8]">Solutions</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isMobile={isMobile}
              manualActive={manualActive}
              onCardClick={handleCardClick}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
