import { motion } from "framer-motion";
import "./page3.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React 18/19", "Next.js", "TypeScript", "TanStack", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "Leaflet"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Python", "REST APIs", "WebSockets", "SSE Streaming", "JWT/OAuth"],
  },
  {
    title: "Databases & DevOps",
    skills: ["Prisma ORM", "MySQL", "PostgreSQL", "Docker", "Docker Compose", "Nginx", "Linux", "Git"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LangGraph", "LangChain", "Gemini 2.5 Flash", "OpenRouter", "Piper TTS", "LLM Tool-Calling"],
  },
  {
    title: "ERP & Integrations",
    skills: ["Odoo 17+ JSON-RPC", "Cloudinary", "Socket.IO", "HTTP Range Streaming", "Stripe (conceptual)"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Page3() {
  return (
    <section id="skills">
      <div className="skills-container">
        <motion.h1
          className="skills-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          SKILLS & TOOLS
        </motion.h1>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={categoryVariants}
            >
              <h2 className="category-title">{category.title}</h2>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
