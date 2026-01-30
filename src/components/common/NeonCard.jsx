import { motion } from "framer-motion";
import styled from "styled-components"; // Wait, I didn't install styled-components. I should use plain CSS modules or inline styles/global class names. I'll stick to standard CSS/Modules.

// Actually, let's use a CSS module for this to keep it clean, or just a separate .css file.
// I'll create NeonCard.css next to it.
import "./NeonCard.css";

const NeonCard = ({ children, className = "", delay = 0, style = {} }) => {
  return (
    <motion.div
      className={`neon-card ${className}`}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="neon-card-content">{children}</div>
      <div className="neon-border"></div>
    </motion.div>
  );
};

export default NeonCard;
