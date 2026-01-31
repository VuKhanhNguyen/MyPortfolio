import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import NeonButton from "../common/NeonButton";

const Hero = () => {
  const titleLine1 = "Building the ".split("");
  const titleLine2 = "Future Web".split("");
  const subtitleText =
    "Creating immersive digital experiences with modern technologies. Focused on performance, accessibility, and futuristic UI interactions.".split(
      "",
    );

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        // 1. Type Title
        await titleControls.start("visible");

        // 2. Type Subtitle (starts after title is done)
        await subtitleControls.start("visible");

        // 3. Show Buttons
        buttonControls.start("visible");

        // 4. Wait for user to read
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // 5. Hide Buttons
        buttonControls.start("hidden");

        // 6. Erase Subtitle (backwards)
        await subtitleControls.start("hidden");

        // 7. Erase Title (backwards)
        await titleControls.start("hidden");

        // 8. Short pause before repeating
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, [titleControls, subtitleControls, buttonControls]);

  const sentence = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1, // Backwards for erasing
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1, // Forwards for typing
      },
    },
  };

  const subtitleSentence = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

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
          variants={sentence}
          initial="hidden"
          animate={titleControls}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",

            lineHeight: 1.1,
            minHeight: "3.2em", // Reserve space to prevent layout jump
          }}
        >
          {titleLine1.map((char, index) => (
            <motion.span key={`line1-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          <span className="text-gradient">
            {titleLine2.map((char, index) => (
              <motion.span key={`line2-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          variants={subtitleSentence}
          initial="hidden"
          animate={subtitleControls}
          style={{
            maxWidth: "600px",
            margin: "0 auto 3rem",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            minHeight: "4.5em", // Reserve space
          }}
        >
          {subtitleText.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          initial="hidden"
          animate={buttonControls}
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
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
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
