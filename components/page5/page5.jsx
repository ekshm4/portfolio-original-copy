import { motion } from "framer-motion";
import "./page5.css";

export default function Page5() {
  return (
    <section id="contact">
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.h1>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-text">
            Have a project in mind, a problem to solve, or just want to connect?
          </p>

          <div className="contact-links">
            <a href="mailto:Shimaebinezer@gmail.com" className="contact-link">
              <span className="link-label">Email</span>
              <span className="link-value">Shimaebinezer@gmail.com</span>
            </a>
            <a href="tel:+250791387381" className="contact-link">
              <span className="link-label">Phone</span>
              <span className="link-value">+250 791 387 381</span>
            </a>
            <a href="https://github.com/ekshm4" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">GitHub</span>
              <span className="link-value">github.com/ekshm4</span>
            </a>
            <a href="https://linkedin.com/in/shima-kabare-ebinezer-92b71437b" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">LinkedIn</span>
              <span className="link-value">Shima Kabare Ebenezer</span>
            </a>
          </div>
        </motion.div>

        <motion.p
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Shima Kabare Ebenezer
        </motion.p>
      </div>
    </section>
  );
}
