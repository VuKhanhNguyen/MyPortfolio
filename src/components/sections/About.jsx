import Section from "../common/Section";
import NeonCard from "../common/NeonCard";

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(300px, 1fr) 2fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <NeonCard>
          <div
            style={{
              aspectRatio: "1/1",
              background: "#222",
              borderRadius: "var(--border-radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Placeholder for Profile Image if user wants later */}
            <img
              src="/avatar.png"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "var(--border-radius-md)",
              }}
            />
          </div>
        </NeonCard>

        <div>
          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            I am a passionate{" "}
            <span className="text-gradient" style={{ fontWeight: 700 }}>
              Frontend Developer
            </span>{" "}
            based in the digital realm. With a keen eye for detail and a love
            for smooth interactions, I build websites that feel alive.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            My journey began with a curiosity for how things work on the web,
            leading me to master modern frameworks and design principles. I
            believe that a great user experience is the bridge between complex
            code and human emotion.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", color: "var(--primary-color)" }}>
                3+
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>Years Experience</p>
            </div>
            <div
              style={{
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2rem", color: "var(--secondary-color)" }}>
                10+
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
