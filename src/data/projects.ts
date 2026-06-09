export type ProjectItem = {
  title: string;
  description: string;
  tools: string[];
  impact: string;
  image: string;
  link: string;
  type: "website" | "wordpress" | "figma";
};

export const projects: ProjectItem[] = [
  {
    title: "Shei IT",
    description:
      "A full-stack IT services website built for service discovery, portfolio presentation, pricing, blogging, and client contact.",
    tools: ["React", "Node.js", "Express", "Zod", "PostgreSQL", "Hostinger", "Vercel"],
    impact: "Production business website for digital services and client growth",
    image: "/assets/images/projects/Shei IT.png",
    link: "https://www.shei-it.com/",
    type: "website",
  },
  {
    title: "TechDSF",
    description:
      "A company website built to present AI and technology services with a clear structure and modern layout.",
    tools: ["WordPress", "Elementor", "Custom CSS", "Responsive UI"],
    impact: "Company website for a technology-focused brand",
    image: "/assets/images/projects/TechDSF.jpg",
    link: "https://www.techdsf.com",
    type: "wordpress",
  },
  {
    title: "IEEE ICADHI 2026 Program",
    description:
      "A Figma prototype showcasing StudentPulse AI for the IEEE International Congress on AI & Digital Health Innovations.",
    tools: ["Figma", "Prototype", "AI Health", "Digital Health"],
    impact: "Project showcase for AI-powered student stress prediction and digital health innovation",
    image: "/assets/images/projects/StudentPulse AI.svg",
    link: "https://slide-click-50683646.figma.site/",
    type: "figma",
  },
  {
    title: "ABSShakeel",
    description:
      "A WordPress business website designed to present services clearly and support direct client contact.",
    tools: ["WordPress", "Elementor", "Custom UI", "Brand Layout"],
    impact: "Business website focused on trust and lead generation",
    image: "/assets/images/projects/ABSShakeel.jpg",
    link: "https://www.absshakeel.com",
    type: "wordpress",
  },
  {
    title: "GiftNest",
    description:
      "A gift marketplace concept with a structured storefront, curated sections, and a clean shopping flow.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    impact: "Full-stack marketplace concept with a complete storefront UI",
    image: "/assets/images/projects/GiftNest.jpg",
    link: "https://giftnest.onrender.com",
    type: "website",
  },
  {
    title: "Library Management System",
    description:
      "A Figma concept for a library system focused on book discovery, borrowing flow, and admin usability.",
    tools: ["Figma", "UI Design", "UX Flow", "Dashboard Design"],
    impact: "UI concept built around clear student and admin flows",
    image: "/assets/images/projects/Library Management UI.jpg",
    link: "https://www.figma.com/proto/yMnWygQP0b9UOT2jBwJ1Gl/Library-Management-System?node-id=1073-259&starting-point-node-id=1073%3A259",
    type: "figma",
  },
  {
    title: "Arsafa UI",
    description:
      "A Figma dashboard interface for inventory, sales, and daily business operations.",
    tools: ["Figma", "Dashboard UI", "Admin UX", "Component Design"],
    impact: "Dashboard concept for clearer small business operations",
    image: "/assets/images/projects/Arsafa Solution UI.jpg",
    link: "https://www.figma.com/proto/OlO5dd6NhSh8CAXWlvsKTR/UI-UX-Design-Project?node-id=146-65&starting-point-node-id=146%3A65",
    type: "figma",
  },
];
