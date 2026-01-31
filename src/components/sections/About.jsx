import Section from "../common/Section";
import NeonCard from "../common/NeonCard";

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="about-grid">
        <NeonCard>
          <div className="about-image-wrapper">
            {/* Placeholder for Profile Image if user wants later */}
            <img src="/avatar.png" alt="Profile" className="about-image" />
          </div>
        </NeonCard>

        <div>
          <p className="about-text">
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

          <div className="about-stats-grid">
            <div className="stat-card">
              <h3
                className="stat-number"
                style={{ color: "var(--primary-color)" }}
              >
                3+
              </h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3
                className="stat-number"
                style={{ color: "var(--secondary-color)" }}
              >
                10+
              </h3>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
