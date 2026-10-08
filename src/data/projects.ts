export type ProjectCategory = "WordPress" | "Next.js" | "Laravel" | "Figma" | "Custom Software";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  displayCategory: string;
  image: string;
  desc: string;
  link: string;
  featured?: boolean;
  status?: "In Progress" | "Live Demo" | "Live";
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "HA'S INTERNATIONAL (PVT) LTD.",
    category: ["Laravel", "Custom Software"],
    displayCategory: "Laravel / Custom Enterprise Software",
    image: "/has-international.png",
    desc: "Custom enterprise operations & ERP system built for multi-million company HA'S International (PVT) LTD.",
    link: "#",
    featured: true,
    status: "In Progress",
  },
  {
    id: 2,
    title: "BikeShop POS – Workshop & Billing",
    category: "Next.js",
    displayCategory: "Next.js / POS & Workshop System",
    image: "/bikeshop.png",
    desc: "Complete bilingual motorcycle spare parts and workshop management software with inventory, billing, and reports.",
    link: "https://bikesoftware.vercel.app/",
    featured: true,
    status: "Live",
  },
  {
    id: 3,
    title: "AI Clinic Management & Smart Diagnosis",
    category: "Next.js",
    displayCategory: "Next.js / AI Healthcare SaaS",
    image: "/ai-clinic.png",
    desc: "All-in-one AI-powered clinic platform with Gemini symptom analysis, appointment queues, and digital PDF prescriptions.",
    link: "https://ai-clinic-management-smart-diagnosi-cyan.vercel.app/",
    featured: true,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Pastaliano – Italian Restaurant",
    category: "WordPress",
    displayCategory: "WordPress / WooCommerce",
    image: "/pastaliano.png",
    desc: "A fully functional E-commerce website for a food brand, built using WooCommerce and Elementor.",
    link: "https://pastaliano.co.uk/",
    featured: true,
    status: "Live",
  },
  {
    id: 5,
    title: "The Paleta Bar",
    category: "WordPress",
    displayCategory: "WordPress / Elementor",
    image: "/paletabar.png",
    desc: "A vibrant and engaging WordPress website for a dessert brand with product showcase and location finder.",
    link: "https://thepaletabar.com/",
    featured: true,
    status: "Live",
  },
  {
    id: 6,
    title: "Founders of Pakistan",
    category: "WordPress",
    displayCategory: "WordPress / Corporate",
    image: "/founders.png",
    desc: "A professional corporate platform designed for high-level networking and showcasing award winners.",
    link: "https://foundersofpakistan.com/",
    featured: true,
    status: "Live",
  },
  {
    id: 7,
    title: "MRQ Production",
    category: "WordPress",
    displayCategory: "WordPress / Media",
    image: "/mrq.png",
    desc: "A WordPress-based media production website showcasing Islamic audio, video, and digital media services.",
    link: "https://mrqproduction.com/",
    featured: false,
    status: "Live",
  },
  {
    id: 8,
    title: "Token System",
    category: ["Custom Software", "Next.js"],
    displayCategory: "Next.js / Custom Software",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f972?q=80&w=800",
    desc: "Custom token generation and management workflow.",
    link: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Naeemi Fragrance e-commerce",
    category: "Next.js",
    displayCategory: "Next.js / E-Commerce",
    image: "/naeemi-fragrance.png",
    desc: "Luxury artisanal fragrance e-commerce boutique platform built with Next.js.",
    link: "#",
    featured: false,
    status: "Live",
  },
];
