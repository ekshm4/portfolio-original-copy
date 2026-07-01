import { motion } from "framer-motion";
import "./page4.css";

const projects = [
  {
    title: "AgenticERP",
    description: "AI-powered ERP assistant with a LangGraph agent that answers natural-language business questions. SSE streaming chat, real-time dashboard with KPI sparkline cards, and Odoo 17+ JSON-RPC integration.",
    tech: ["Python", "LangGraph", "Gemini", "React 19", "TanStack", "FastAPI"],
    status: "In Progress",
  },
  {
    title: "GMC Kimihurura",
    description: "Comprehensive church management platform for a real Kigali congregation. 7+ Prisma models, Docker multi-stage production build, Google Gemini AI integration, built over 14 months with 235 commits.",
    tech: ["Next.js 16", "Prisma", "MySQL", "Docker", "Gemini AI", "GSAP"],
    status: "Near-Finished",
  },
  {
    title: "softPi",
    description: "Dockerized dual-frontend CMS with Next.js marketing site and React admin dashboard. Real-time updates, media management, audit logging, and Nginx reverse proxy configuration.",
    tech: ["Next.js", "Express", "Prisma", "Docker Compose", "Socket.IO", "Nginx"],
    status: "Near-Finished",
  },
  {
    title: "Chat General",
    description: "Full-stack real-time AI chat with text-to-speech. OpenRouter-powered AI responses, Piper TTS audio generation, Socket.IO bidirectional messaging, and resizable terminal-styled UI.",
    tech: ["React 19", "Socket.IO", "Express 5", "OpenRouter", "Piper TTS", "JWT"],
    status: "Near-Finished",
  },
  {
    title: "Kigali Smart Bus",
    description: "Bus tracking prototype simulating 8 buses across 3 Kigali routes on an interactive Leaflet map with OSRM road-following, ETA calculations, and route filtering — all in a single 928-line HTML file.",
    tech: ["React 18", "Leaflet", "OSRM", "OpenStreetMap", "Vanilla JS"],
    status: "Complete",
  },
  {
    title: "accessPc",
    description: "Self-hosted media server (Plex-like) with HTTP Range streaming, recursive media scanning, music-metadata extraction, mobile-responsive UI, and JWT-authenticated multi-user support.",
    tech: ["React 18", "Express 5", "Prisma", "MySQL", "HTTP Range", "Zod"],
    status: "Near-Finished",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Page4() {
  return (
    <section id="projects">
      <div className="projects-container">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h1>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="project-info">
                <div className="project-name-row">
                  <h2 className="project-name">{project.title}</h2>
                  <span className={`project-status ${project.status === 'Complete' ? 'status-done' : project.status === 'In Progress' ? 'status-wip' : 'status-near'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
