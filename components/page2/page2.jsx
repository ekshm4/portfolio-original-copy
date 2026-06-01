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
                I'm a full-stack developer who cares about how things work — not just the code, but the problem it solves and the people it serves. I've spent years building across the stack, from responsive frontends with React and Three.js to robust backends with Node.js, Python, and PostgreSQL.
              </p>
              <p>
                What drives me is the intersection of creative expression and practical engineering. I believe the best technology is invisible — it just works, and it makes life better for the people using it.
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
              <h1>OUR MISSION</h1>
              <p>
                Pay attention to the problems people actually deal with — the small frustrations, daily inefficiencies, moments where a system fails the person it was supposed to serve — and build practical solutions that genuinely help. Not flashy tools for the sake of innovation, but real ones that make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
