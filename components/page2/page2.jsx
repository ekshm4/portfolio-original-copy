/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import "./page2.css";

export default function Page2() {
  return (
    <section id="mission">
      <div className="second-container">
        <div className="side-second-page-text">
          <motion.div
            className="side-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text1">
              <h1>ABOUT ME</h1>
              <p>
                I'm Shima Kabare Ebenezer, a full-stack developer based in Kigali, Rwanda, and a Software Engineering student at African Leadership University (2026–2029). I work across React and Next.js interfaces, Node.js APIs, real-time applications, and interactive visual experiences.
              </p>
              <p>
                My projects range from self-hosted media tools and content management systems to map-based transit prototypes and AI integrations. I also work as a Teleoperations Technician at Verlet Robotics. I care about how a system behaves in practice: how it communicates, where it fails, and whether people can actually use it.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="side-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text1 no-3d">
              <h1>THE MISSION</h1>
              <p>
                Pay attention to the problems people deal with every day, understand the constraints, and build something useful. I want to make software that is clear to use, maintainable, and grounded in the communities it serves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
