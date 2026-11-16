import { motion } from "framer-motion";
import { useState } from "react";
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
  const [visibility, setVisibility] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const matchingProjects = projects.filter((project) => {
    const matchesVisibility = visibility === "all" || project.visibility === visibility;
    const text = [project.title, project.category, project.description, ...project.tech].join(" ").toLowerCase();
    return matchesVisibility && text.includes(query.trim().toLowerCase());
  });
  const displayedProjects = matchingProjects.slice(0, visibleCount);

  function chooseVisibility(value) {
    setVisibility(value);
    setVisibleCount(12);
  }

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

        <p className="projects-intro">Public projects and private work in progress — from working APIs to interface prototypes. Each project shows its current stage. Some source is private; get in touch to discuss the work.</p>

        <div className="project-controls">
          <div className="project-filters" role="group" aria-label="Filter projects by source visibility">
            {[["all", "All work"], ["private", "Private projects"], ["public", "Public projects"]].map(([value, label]) => (
              <button key={value} type="button" aria-pressed={visibility === value} aria-controls="projects-grid" onClick={() => chooseVisibility(value)}>
                {label} <span>({value === "all" ? projects.length : projects.filter((project) => project.visibility === value).length})</span>
              </button>
            ))}
          </div>
          <label className="project-search" htmlFor="project-search">
            <span>Find a project</span>
            <input id="project-search" type="search" value={query} placeholder="Search projects or tools" onChange={(event) => { setQuery(event.target.value); setVisibleCount(12); }} />
          </label>
        </div>

        <p className="project-count" role="status" aria-live="polite">{matchingProjects.length === 0 ? "No matching projects. Try another name or tool." : `Showing ${displayedProjects.length} of ${matchingProjects.length} projects`}</p>

        <motion.div
          className="projects-grid"
          id="projects-grid"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          {displayedProjects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="project-info">
                <p className="project-category">{project.category} / {project.visibility === "private" ? "Private" : "Public"}</p>
                <div className="project-name-row">
                  <h2 className="project-name">{project.title}</h2>
                  <span className={`project-status status-${project.kind}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-desc">{project.description}</p>
                {project.next && <p className="project-next"><span>Next:</span> {project.next}</p>}
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>View source <span aria-hidden="true">↗</span></a>}
                  {project.visibility === "private" && <a href={`mailto:Shimaebinezer@gmail.com?subject=${encodeURIComponent(`About ${project.title}`)}`} aria-label={`Discuss ${project.title}`}>Discuss project <span aria-hidden="true">↗</span></a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>Open project <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        {displayedProjects.length < matchingProjects.length && <button type="button" className="projects-more" onClick={() => setVisibleCount(matchingProjects.length)}>Show {matchingProjects.length - displayedProjects.length} more projects <span aria-hidden="true">↓</span></button>}
      </div>
    </section>
  );
}
