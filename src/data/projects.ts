export type ProjectCategory = 
  | "WordPress" 
  | "Next.js" 
  | "Laravel" 
  | "Figma" 
  | "Custom Software" 
  | "Featured SaaS"
  | "SaaS Products";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  displayCategory: string;
  image: string;
  desc: string;
  link: string;
  featured?: boolean;
  status?: "In Progress" | "Live Demo" | "Live" | "Production Ready";
}

export interface DropzaScreenshot {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  isMobile?: boolean;
}

export interface DropzaProductDetails {
  name: string;
  category: string;
  tagline: string;
  role: string;
  status: "Production Ready / Live";
  overview: {
    description: string;
    pillars: {
      title: string;
      badge: string;
      description: string;
      icon: "Radio" | "CloudLightning" | "FileCode" | "LayoutDashboard";
    }[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    securityStorage: string[];
  };
  highlights: {
    title: string;
    metric: string;
    description: string;
    icon: "Cpu" | "Zap" | "ShieldCheck" | "Smartphone";
  }[];
  screenshots: DropzaScreenshot[];
  liveUrl: string;
}

export const dropzaDetails: DropzaProductDetails = {
  name: "Dropza",
  category: "Full-Stack SaaS / Web Product",
  tagline: "Drop it. Share it. Done. Fast, privacy-conscious file sharing & peer-to-peer transfers.",
  role: "Lead Full-Stack Software Engineer (Design, Architecture & Implementation)",
  status: "Production Ready / Live",
  overview: {
    description:
      "Dropza is a modern, privacy-focused file sharing platform engineered with a hybrid transfer architecture. It combines zero-cloud WebRTC direct peer-to-peer streaming with encrypted, short-lived S3 cloud storage for seamless transfers across devices.",
    pillars: [
      {
        title: "Zero-Cloud WebRTC P2P",
        badge: "Zero-Knowledge",
        description:
          "Direct browser-to-browser streaming in 64KB encrypted binary chunks without intermediate server uploads, paired instantly via high-resolution QR codes.",
        icon: "Radio",
      },
      {
        title: "Encrypted Cloud Sharing",
        badge: "Direct S3",
        description:
          "Restricted short-lived S3 presigned uploads with customizable self-destruct timers (1h, 24h, 7d), download limits, and bcrypt password protection.",
        icon: "CloudLightning",
      },
      {
        title: "Secret Text & Snippets",
        badge: "Burn-After-Reading",
        description:
          "Confidential credentials, API keys, and clipboard text sharing with strict burn-after-reading view limits and zero server persistence.",
        icon: "FileCode",
      },
      {
        title: "Dashboard & Quota Engine",
        badge: "Guest + Pro",
        description:
          "Instant 50MB sharing for guest users, plus registered accounts with 2GB storage quotas, active link telemetry, and one-click revocation.",
        icon: "LayoutDashboard",
      },
    ],
  },
  techStack: {
    frontend: [
      "Next.js 14 (App Router)",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "WebSockets (ws)",
      "WebRTC DataChannels",
      "Next.js Route Handlers",
    ],
    database: [
      "PostgreSQL (Neon Serverless)",
      "Prisma ORM",
      "Connection Pooling",
    ],
    securityStorage: [
      "AWS S3 Compatible Storage",
      "Presigned Restricted URLs",
      "Bcrypt Password Protection",
      "SHA-256 Tokenization",
      "NextAuth.js",
    ],
  },
  highlights: [
    {
      title: "Custom P2P Protocol Engine",
      metric: "64KB Binary Chunks",
      description:
        "Engineered a custom signaling server and WebRTC DataChannel engine with backpressure control (bufferedAmount) and binary chunking to stream large files smoothly.",
      icon: "Cpu",
    },
    {
      title: "Server-Bypass Architecture",
      metric: "Zero Server I/O",
      description:
        "Bypassed server CPU and bandwidth bottlenecks using direct-to-S3 restricted presigned PUT/GET URLs, ensuring payload buffers never touch application memory.",
      icon: "Zap",
    },
    {
      title: "Granular Privacy & Security Controls",
      metric: "5-Attempt Lockout",
      description:
        "Implemented time-based self-destruct mechanisms, brute-force lockout safeguards, salted IP hashing, and instant link revocation.",
      icon: "ShieldCheck",
    },
    {
      title: "Mobile-First Responsive UX",
      metric: "Instant QR Pairing",
      description:
        "Crafted a dark obsidian and emerald design system with effortless PC-to-Mobile QR pairing, delivering a seamless touch experience on any screen.",
      icon: "Smartphone",
    },
  ],
  screenshots: [
    {
      id: "hero",
      title: "Dropza Landing Hero & Dual-Mode Zone",
      category: "Desktop Showcase",
      image: "/dropza-portfolio-screenshots/01_landing_hero_desktop.png",
      description:
        "Obsidian dark hero interface with quick-toggle between Cloud Upload and WebRTC P2P direct transfer room.",
    },
    {
      id: "cloud-sharing",
      title: "Encrypted Cloud File Sharing Zone",
      category: "Cloud Upload & Security",
      image: "/dropza-portfolio-screenshots/03_cloud_file_sharing_desktop.png",
      description:
        "Direct-to-S3 drag-and-drop zone with customizable self-destruct timers (1h, 24h, 7d), burn-after-download limits, and bcrypt password protection.",
    },
    {
      id: "p2p-room",
      title: "Active WebRTC P2P Room with QR Code",
      category: "Zero-Cloud P2P",
      image: "/dropza-portfolio-screenshots/04_webrtc_p2p_active_room_desktop.png",
      description:
        "Live peer-to-peer room with dynamic room code and auto-generated high-resolution QR code for instant mobile phone pairing.",
    },
    {
      id: "recipient-download",
      title: "Recipient File Download & Metadata Page",
      category: "Recipient View",
      image: "/dropza-portfolio-screenshots/06_recipient_file_download_page_desktop.png",
      description:
        "Clean recipient screen displaying file name, size, remaining downloads counter, expiry countdown timer, and secure retrieval button.",
    },
    {
      id: "secret-text",
      title: "Confidential Text & Snippet Sharing",
      category: "Secret Sharing",
      image: "/dropza-portfolio-screenshots/05_text_code_snippet_sharing_desktop.png",
      description:
        "Zero-persistence secret clipboard sharing for sensitive API credentials, keys, and code snippets with single-view self-destruct.",
    },
    {
      id: "user-dashboard",
      title: "Authenticated User Analytics & Link Hub",
      category: "Dashboard & Quotas",
      image: "/dropza-portfolio-screenshots/10_user_dashboard_desktop.png",
      description:
        "Full analytics dashboard providing 2GB storage quota tracking, active link status, download counters, and one-click revocation buttons.",
    },
    {
      id: "mobile-landing",
      title: "Mobile Responsive Landing View",
      category: "Mobile UX",
      image: "/dropza-portfolio-screenshots/11_mobile_landing_iphone.png",
      description:
        "Ergonomically tuned mobile interface with high-contrast emerald action cards and touch-optimized layout.",
      isMobile: true,
    },
    {
      id: "mobile-p2p",
      title: "Mobile P2P Direct Transfer Flow",
      category: "Mobile P2P",
      image: "/dropza-portfolio-screenshots/13_mobile_p2p_transfer_iphone.png",
      description:
        "Mobile browser receiving binary file chunks directly over WebRTC DataChannel without installing any native app.",
      isMobile: true,
    },
  ],
  liveUrl: "https://dropza-six.vercel.app/",
};

export const projectsData: Project[] = [
  {
    id: 0,
    title: "Dropza – Fast P2P & Encrypted Cloud Sharing",
    category: ["Next.js", "Custom Software", "Featured SaaS"],
    displayCategory: "Full-Stack SaaS / Web Product",
    image: "/dropza-portfolio-screenshots/01_landing_hero_desktop.png",
    desc: "Drop it. Share it. Done. Fast, privacy-conscious file sharing & peer-to-peer transfers with zero-cloud WebRTC and encrypted S3.",
    link: "https://dropza-six.vercel.app/",
    featured: true,
    status: "Production Ready",
  },
  {
    id: 1,
    title: "HA'S INTERNATIONAL (PVT) LTD.",
    category: ["Laravel", "Custom Software"],
    displayCategory: "Laravel / Custom Enterprise Software",
    image: "/has-international.webp",
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
    image: "/bikeshop.webp",
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
    image: "/ai-clinic.webp",
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
    image: "/pastaliano.webp",
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
    image: "/paletabar.webp",
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
    image: "/founders.webp",
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
    image: "/mrq.webp",
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
    image: "/token sytem.webp",
    desc: "Custom token generation and management workflow.",
    link: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Naeemi Fragrance e-commerce",
    category: "Next.js",
    displayCategory: "Next.js / E-Commerce",
    image: "/naeemi-fragrance.webp",
    desc: "Luxury artisanal fragrance e-commerce boutique platform built with Next.js.",
    link: "#",
    featured: false,
    status: "Live",
  },
];
