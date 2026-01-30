import Section from "../common/Section";
import NeonCard from "../common/NeonCard";
import NeonButton from "../common/NeonButton";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neon E-Commerce",
    description:
      "A futuristic shopping platform with 3D product previews and real-time inventory tracking.",
    tags: ["React", "Three.js", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency analytics tool with interactive charts and AI predictions.",
    tags: ["Next.js", "D3.js", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    title: "Cyberpunk Portfolio",
    description:
      "The website you are looking at right now. Built with modern web technologies.",
    tags: ["React", "Framer Motion", "CSS"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Selected Works" subtitle="Projects">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <NeonCard key={index} delay={index * 0.1}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "150px",
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#333",
                }}
              >
                {/* Project Image Placeholder */}
                <span style={{ fontSize: "3rem" }}>🚀</span>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--primary-color)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={project.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                  className="hover-link"
                >
                  <ExternalLink size={16} /> Demo
                </a>
                <a
                  href={project.github}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                  className="hover-link"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </NeonCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
