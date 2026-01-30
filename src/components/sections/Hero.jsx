import { motion } from "framer-motion";
import NeonButton from "../common/NeonButton";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: -1,
        }}
      ></div>

      <div className="container" style={{ textAlign: "center", zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "var(--primary-color)",
            fontSize: "1.2rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Building the <br />
          <span className="text-gradient">Future Web</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            maxWidth: "600px",
            margin: "0 auto 3rem",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
          }}
        >
          Creating immersive digital experiences with modern technologies.
          Focused on performance, accessibility, and futuristic UI interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}
        >
          <NeonButton
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </NeonButton>
          <NeonButton
            variant="secondary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </NeonButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
          fontSize: "2rem",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
