import { motion } from "framer-motion";
import "./CV.css";

import cv from "../../src/data/cv.json";

const { experience, education, highlights } = cv;

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
