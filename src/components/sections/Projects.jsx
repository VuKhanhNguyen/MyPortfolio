import Section from "../common/Section";
import NeonCard from "../common/NeonCard";
import NeonButton from "../common/NeonButton";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Flappy Bird",
    description: "A remake FlappyBird that I created using React",
    tags: ["React"],
    link: "https://myflappybirdd.netlify.app/",
    github: "https://github.com/VuKhanhNguyen/FlappyBird_ReactJS.git",
  },
  {
    title: "My Portfolio",
    description: "A portfolio website built with React and Framer Motion.",
    tags: ["React", "Framer Motion"],
    link: "#",
    github: "https://github.com/VuKhanhNguyen/MyPortfolio.git",
  },
  {
    title: "Furniture Website",
    description: "A website for furniture store built with React and FastAPI.",
    tags: ["React", "FastAPI", "Tailwind CSS", "Bootstrap"],
    link: "#",
    github: "https://github.com/VuKhanhNguyen/FurnitureWebsite.git",
  },
  {
    title: "Cyberpunk Portfolio",
    description:
      "The website you are looking at right now. Built with modern web technologies.",
    tags: ["React", "Framer Motion", "CSS"],
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
      <motion.div
        className="projects-slider"
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          padding: "0rem 1rem",
          cursor: "grab",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE/Edge */,
        }}
        drag="x"
        dragConstraints={{ right: 0, left: -(projects.length * 320) }} // Approximate width calculation
        whileTap={{ cursor: "grabbing" }}
      >
        <style>{`
          .projects-slider::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {projects.map((project, index) => (
          <div key={index} style={{ minWidth: "300px", maxWidth: "300px" }}>
            <NeonCard
              delay={index * 0.1}
              className="h-full"
              style={{ height: "100%" }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
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
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
