export const links = {
  github: "https://github.com/ekshm4",
  portfolio: "https://shima-kabare-ebenezer.vercel.app/",
  linkedin: "https://linkedin.com/in/shima-kabare-ebinezer-92b71437b",
  email: "mailto:Shimaebinezer@gmail.com",
};

// Technologies evidenced by repository manifests and existing project documentation.
// Categories describe tools used, not proficiency scores.
export const skillCategories = [
  {
    title: "Web & interfaces",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "Radix UI"],
    note: "Interfaces, dashboards, and applications built around practical tasks.",
  },
  {
    title: "APIs & real-time systems",
    skills: ["Node.js", "Express", "REST APIs", "Socket.IO", "JWT", "Zod"],
    note: "Application backends, authentication, messaging, and media streaming.",
  },
  {
    title: "Data & delivery",
    skills: ["MySQL", "Prisma", "Docker", "Docker Compose", "Nginx", "Linux", "Git", "Vercel"],
    note: "From persistent application data to self-hosted deployments.",
  },
  {
    title: "Motion & spatial interfaces",
    skills: ["Three.js", "React Three Fiber", "GSAP", "Framer Motion", "Leaflet", "OpenStreetMap"],
    note: "Shader experiments, interaction design, and map-based prototypes.",
  },
  {
    title: "AI & integrations",
    skills: ["LLM APIs", "OpenRouter", "Gemini", "Tool calling", "Odoo integrations"],
    note: "Connecting models and business systems to useful application workflows.",
  },
  {
    title: "Beyond the browser",
    skills: ["Python", "Electron", "Expo", "React Native", "VS Code extensions", "Jest"],
    note: "Exploring automation, desktop tools, mobile apps, and developer tooling.",
  },
];

export const projects = [
  {
    title: "AccessPC",
    category: "Full-stack / self-hosted",
    description: "A personal media server for browsing local files and streaming video and audio. The React client connects to an Express API with HTTP Range playback, JWT authentication, and MySQL persistence through Prisma.",
    tech: ["React", "Express", "Prisma", "MySQL", "Docker"],
    status: "Source available",
    kind: "source",
    source: "https://github.com/ekshm4/accessPc",
  },
  {
    title: "E-SHIME",
    category: "Full-stack / wellbeing prototype",
    description: "A wellbeing application prototype with mood tracking, chat, peer stories, and booking interfaces. It combines a React and TypeScript frontend with a separate Node.js backend; the interface is a development project, not a validated clinical service.",
    tech: ["TypeScript", "React", "Radix UI", "Express", "Socket.IO"],
    status: "Source available",
    kind: "source",
    source: "https://github.com/ekshm4/e-shime",
  },
  {
    title: "Kigali Smart Bus",
    category: "Mapping / transit exploration",
    description: "A frontend transit prototype exploring Kigali routes with interactive maps, simulated bus movement, and route filtering. Vehicle positions and ETAs are simulated; this is not a live GPS service.",
    tech: ["JavaScript", "Leaflet", "OSRM", "OpenStreetMap"],
    status: "Prototype",
    kind: "prototype",
    source: "https://github.com/ekshm4/smart-bus",
  },
  {
    title: "FEGIS Odoo Guide",
    category: "Documentation / business workflows",
    description: "A browser-based guide to Odoo screens and approval workflows. A focused, accessible reference that helps users understand the business interface they work with.",
    tech: ["HTML", "CSS", "JavaScript", "Odoo"],
    status: "Live guide",
    kind: "live",
    source: "https://github.com/ekshm4/fegis-odoo-approval-guide",
    demo: "https://fegis-odoo-approval-guide.vercel.app",
  },
  {
    title: "EPR Kigali Presbytery",
    category: "Web design / community",
    description: "A public-facing website exploration for EPR Kigali Presbytery, bringing community information into a responsive web experience. This version is available to explore online.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    status: "Live website",
    kind: "live",
    source: "https://github.com/ekshm4/EPR3",
    demo: "https://epr3-site-sanctuary.vercel.app",
  },
  {
    title: "SoftPi Website",
    category: "Frontend / marketing",
    description: "A Next.js website built with React, TypeScript, and Tailwind CSS. The public repository showcases the marketing frontend separately from the wider CMS work.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Source available",
    kind: "source",
    source: "https://github.com/ekshm4/softpi-website",
  },
];
