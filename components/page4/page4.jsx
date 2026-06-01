import { motion } from "framer-motion";
import "./page4.css";

const projects = [
  {
    title: "Project One",
    description: "A full-stack application built with React and Node.js that solves real-world problems through clean architecture.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    img: "img/DSC_0881.JPG",
  },
  {
    title: "Project Two",
    description: "Backend microservices architecture handling distributed data processing and real-time analytics.",
    tech: ["Python", "FastAPI", "Redis", "Kafka"],
    img: "img/DSC_1053.JPG",
  },
  {
    title: "Project Three",
    description: "Interactive 3D visualization tool leveraging WebGL and custom shaders for data exploration.",
    tech: ["Three.js", "React", "WebGL", "GLSL"],
    img: "img/DSC_0547.JPG",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h2 className="project-name">{project.title}</h2>
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
