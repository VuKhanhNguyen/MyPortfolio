import { motion } from "framer-motion";
import "./NeonButton.css";

const NeonButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  return (
    <motion.button
      className={`neon-btn neon-btn-${variant} ${className}`}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <div className="neon-btn-bg"></div>
    </motion.button>
  );
};

export default NeonButton;
