import { motion } from "framer-motion";
import "./CV.css";

const experience = [
  { role: "Teleoperations Technician", company: "Verlet Robotics — Kigali, Rwanda", period: "April 2026 — Present" },
  { role: "Full-Stack Engineer (Contract)", company: "AI Factory Dynamics — AgenticERP", period: "May 2026 — Present" },
  { role: "Software Engineering Student", company: "African Leadership University", period: "2027 — 2029 (expected)" },
];

const education = [
  { degree: "BSc Software Engineering", school: "African Leadership University, Kigali", period: "2027 — 2029 (expected)" },
];

const highlights = [
  "Built a 10-tool LangGraph AI agent with SSE streaming for natural-language ERP queries",
  "Delivered Dockerized CMS with Nginx reverse proxy, MySQL, and real-time updates via Socket.IO",
  "Architected full church management platform over 14 months serving a real Kigali congregation",
  "Integrated multiple LLM providers (Gemini, OpenRouter) with tool-calling architectures",
  "Developed Kigali bus tracking simulation with Leaflet, OSRM routing, and real-time ETA calculations",
];

export default function CV() {
  return (
    <section id="cv">
      <div className="cv-container">
        <motion.h1
          className="cv-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          CURRICULUM VITAE
        </motion.h1>

        <div className="cv-grid">
          <motion.div
            className="cv-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="cv-section-title">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.role + exp.company} className="cv-entry">
                <h3 className="cv-entry-role">{exp.role}</h3>
                <p className="cv-entry-company">{exp.company}</p>
                <p className="cv-entry-period">{exp.period}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="cv-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="cv-section-title">Education</h2>
            {education.map((edu) => (
              <div key={edu.degree} className="cv-entry">
                <h3 className="cv-entry-role">{edu.degree}</h3>
                <p className="cv-entry-company">{edu.school}</p>
                <p className="cv-entry-period">{edu.period}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="cv-section cv-highlights"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="cv-section-title">Key Highlights</h2>
          <ul className="cv-highlight-list">
            {highlights.map((h) => (
              <li key={h} className="cv-highlight-item">{h}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="cv-download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/cv.pdf" download className="cv-download-btn">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
