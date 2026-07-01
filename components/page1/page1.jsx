import { motion } from "framer-motion";
import { useTheme } from "../../src/ThemeContext";
import "./page1.css";

export default function Page1 () {
  const { toggleTheme } = useTheme();

  return (
    <section id="home">
      <div className="container">
        <div className="mid-small-text">
          <p>xx</p>
          <p>xx</p>
        </div>

        <motion.div
          className="mid-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ul className="i-am">
            <li>IMPACT THROUGH.</li>
            <li>Change.</li>
          </ul>
        </motion.div>


      </div>
    </section>
  );
}
