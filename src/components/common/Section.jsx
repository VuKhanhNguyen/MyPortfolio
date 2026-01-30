import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            {subtitle && (
              <span
                style={{
                  color: "var(--primary-color)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                {subtitle}
              </span>
            )}
            {title && <h2 className="text-gradient">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
