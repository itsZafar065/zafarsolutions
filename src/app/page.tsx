import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Services from "@/components/sections/Services";
import Process from "@/components/Process/Process";
import DropzaShowcase from "@/components/sections/DropzaShowcase";
import Projects from "@/components/sections/Projects"; 
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main className="bg-background transition-colors duration-300"> 
      
      {/* 1. Hero */}
      <Hero />

      {/* 1.5. Technologies Marquee */}
      <TechMarquee />

      {/* 2. Intro */}
      <WhatWeDo />

      {/* 3. Services */}
      <Services />

      {/* 4. Steps (How it works?) */}
      <Process />

      {/* 4.5. Featured SaaS Product Spotlight */}
      <DropzaShowcase />

      {/* 5. Portfolio */}
      <Projects />

      {/* 6. Plans */}
      <Pricing />

    </main>
  );
}
