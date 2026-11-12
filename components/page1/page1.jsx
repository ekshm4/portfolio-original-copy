import { motion } from "framer-motion";
import "./page1.css";

export default function Page1 () {
  return (
    <section id="home">
      <div className="container">
        <div className="mid-small-text">
          <p>FULL-STACK DEVELOPER / KIGALI, RWANDA</p>
          <a href="https://github.com/ekshm4" target="_blank" rel="noopener noreferrer">GITHUB / @EKSHM4 ↗</a>
        </div>

        <motion.div
          className="mid-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="hero-eyebrow">SHIMA KABARE EBENEZER</p>
          <h1 className="hero-heading">Ideas into<br />working systems.</h1>
          <p className="hero-description">I build web applications, real-time tools, and interactive experiences — with people and practical problems at the center.</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-action">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="hero-action hero-action-secondary">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
