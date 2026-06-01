import { motion } from "framer-motion";
import "./Philosophy.css";

const philosophy = [
  {
    title: "PRACTICAL OVER PERFECT",
    text: "The best solution is the one that ships. I believe in building things that work in the real world, not just in ideal conditions. Every abstraction, every architecture decision — it has to justify itself by making the product better for the people using it.",
  },
  {
    title: "UNDERSTAND FIRST, BUILD SECOND",
    text: "Technology is a means, not an end. Before writing a single line of code, I invest time in understanding the problem, the people affected by it, and the context around it. The right solution emerges naturally when you deeply understand what needs solving.",
  },
  {
    title: "CLEAN CODE IS KINDNESS",
    text: "Code is read far more often than it's written. Writing clean, maintainable code is a courtesy to your future self and everyone who comes after you. Simplicity is the ultimate sophistication — I strive to make the complex feel obvious.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="philosophy-container">
        <motion.h1
          className="philosophy-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          MY PHILOSOPHY
        </motion.h1>

        <motion.div
          className="philosophy-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {philosophy.map((item) => (
            <motion.div key={item.title} className="philosophy-item" variants={itemVariants}>
              <h2 className="ph-item-title">{item.title}</h2>
              <p className="ph-item-text">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
