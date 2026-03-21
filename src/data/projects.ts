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
    title: "TechDSF",
    description:
      "A modern company website focused on AI, technology services, and a confident brand presence with a clean landing experience.",
    tools: ["WordPress", "Elementor", "Custom CSS", "Responsive UI"],
    impact: "Corporate website for technology-focused service positioning",
    image: "/assets/images/projects/TechDSF.jpg",
    link: "https://www.techdsf.com",
    type: "wordpress",
  },
  {
    title: "ABSShakeel",
    description:
      "A WordPress business website designed to present digital services, establish trust, and guide visitors toward direct contact.",
    tools: ["WordPress", "Elementor", "Custom UI", "Brand Layout"],
    impact: "Service-focused web presence for lead generation and credibility",
    image: "/assets/images/projects/ABSShakeel.jpg",
    link: "https://www.absshakeel.com",
    type: "wordpress",
  },
  {
    title: "GiftNest",
    description:
      "An elegant gifting platform concept with a warm storefront experience, curated product sections, and conversion-friendly shopping flows.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    impact: "Full-stack gift marketplace experience with polished storefront UI",
    image: "/assets/images/projects/GiftNest.jpg",
    link: "https://giftnest.onrender.com",
    type: "website",
  },
  {
    title: "Library Management System",
    description:
      "A Figma UI concept for a library system focused on smarter discovery, borrowing flows, and a friendly student-centered interface.",
    tools: ["Figma", "UI Design", "UX Flow", "Dashboard Design"],
    impact: "Designed for book discovery, reserve flow, and admin usability",
    image: "/assets/images/projects/Library Management UI.jpg",
    link: "https://www.figma.com/proto/yMnWygQP0b9UOT2jBwJ1Gl/Library-Management-System?node-id=1073-259&starting-point-node-id=1073%3A259",
    type: "figma",
  },
  {
    title: "Arsafa UI",
    description:
      "A Figma dashboard interface for inventory, sales, and quick-access business operations with a structured admin-first layout.",
    tools: ["Figma", "Dashboard UI", "Admin UX", "Component Design"],
    impact: "Operations dashboard concept for small business workflow clarity",
    image: "/assets/images/projects/Arsafa Solution UI.jpg",
    link: "https://www.figma.com/proto/OlO5dd6NhSh8CAXWlvsKTR/UI-UX-Design-Project?node-id=146-65&starting-point-node-id=146%3A65",
    type: "figma",
  },
];
