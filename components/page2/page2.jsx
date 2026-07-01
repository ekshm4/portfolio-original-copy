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
                I'm a self-taught full-stack engineer pursuing a BSc in Software Engineering at African Leadership University, while shipping production-grade applications across the stack. I build technology infrastructure to address structural problems in African markets — from AI-powered ERP assistants and real-time chat systems to Kigali public transit visualisation.
              </p>
              <p>
                My work combines modern full-stack development with AI/LLM integration and DevOps. I currently work as a Teleoperations Technician at Verlet Robotics, gathering operational data through real-world field operations. Every project I build solves a real problem, many with an Africa-first lens.
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
                Pay attention to the problems people actually deal with — the small frustrations, daily inefficiencies, moments where a system fails the person it was supposed to serve — and build practical solutions that genuinely help. Not flashy tools for the sake of innovation, but real ones that make a difference in how people move through their day. When you understand people first, the technology follows naturally.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
