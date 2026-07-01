import { motion } from "framer-motion";
import "./Philosophy.css";

const philosophy = [
  {
    title: "AFRICA-FIRST INFRASTRUCTURE",
    text: "I build for markets where infrastructure gaps are opportunities. From mobile money parsing to offline-first architecture, every tool I create is designed with the African context in mind — making enterprise-grade technology accessible to small and medium businesses across the continent.",
  },
  {
    title: "AI THAT ACTUALLY HELPS",
    text: "AI should be a tool, not a gimmick. I integrate LLMs into real workflows — ERP assistants that answer natural-language queries, chatbots that generate audio responses — always with the goal of reducing friction, not adding complexity. The technology should serve the people using it.",
  },
  {
    title: "SHIP, THEN PERFECT",
    text: "The best solution is the one that reaches users. I believe in building practical, working systems that solve real problems today, then iterating based on feedback. Dockerised, deployed, and tested in production — not stuck in a theoretical design doc.",
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
