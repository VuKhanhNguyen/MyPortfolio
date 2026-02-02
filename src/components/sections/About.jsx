import Section from "../common/Section";
import NeonCard from "../common/NeonCard";
import { Github, Facebook, Linkedin } from "lucide-react";
import { SiReact, SiMysql, SiNodedotjs } from "react-icons/si";

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

          <div className="personal-info-grid">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Nguyen Vu Khanh</span>
            </div>
            <div className="info-item">
              <span className="info-label">Birthday:</span>
              <span className="info-value">09/11/2004</span>
            </div>
            <div className="info-item">
              <span className="info-label">University:</span>
              <span className="info-value">
                University of Technology and Education
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Start from:</span>
              <span className="info-value">2022 - Present</span>
            </div>
            <div className="info-item">
              <span className="info-label">GPA:</span>
              <span className="info-value">3.39/4.0</span>
            </div>
            <div className="info-item">
              <span className="info-label">Hobbies:</span>
              <span className="info-value">
                Listen to music, Play game, Learn new things, Sleep
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">nguyenvukhanh392@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">0795605214</span>
            </div>
            <div className="info-item">
              <span className="info-label">Socials:</span>
              <div className="social-links-container">
                <a
                  href="https://github.com/VuKhanhNguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github size={30} />
                </a>
                <a
                  href="https://www.facebook.com/vukhanh.nguyen.9461/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Facebook size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vu-khanh-nguyen-06a8632a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={30} />
                </a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-label">Skills:</span>
              <div className="skills-container">
                <SiReact size={30} />
                <SiMysql size={30} />
                <SiNodedotjs size={30} />
              </div>
            </div>
          </div>

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
