import { motion } from "framer-motion";
import "./page4.css";

import { projects } from "../../src/data/portfolio";

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
          SELECTED WORK
        </motion.h1>

        <p className="projects-intro">A selection of applications, prototypes, and web experiences. Explore the source, or open a live project where available.</p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="project-info">
                <p className="project-category">{String(index + 1).padStart(2, "0")} / {project.category}</p>
                <div className="project-name-row">
                  <h2 className="project-name">{project.title}</h2>
                  <span className={`project-status status-${project.kind}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>View source <span aria-hidden="true">↗</span></a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>Open project <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
