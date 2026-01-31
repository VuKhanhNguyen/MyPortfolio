import Section from "../common/Section";
import NeonCard from "../common/NeonCard";
import NeonButton from "../common/NeonButton";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Flappy Bird",
    description:
      "A remake of the classic Flappy Bird game built entirely with React. Players choose difficulty mode and control a bird to navigate through pipes by tapping spacebar or clicking, featuring real-time collision detection, score tracking, and smooth animations.",
    tags: ["React"],
    link: "https://myflappybirdd.netlify.app/",
    github: "https://github.com/VuKhanhNguyen/FlappyBird_ReactJS.git",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, experience, and contact information. Built with React and enhanced with Framer Motion for fluid animations, page transitions, and interactive elements, delivering a modern and engaging user experience that highlights my front-end development style and design sense.",
    tags: ["React", "Framer Motion"],
    link: "#",
    github: "https://github.com/VuKhanhNguyen/MyPortfolio.git",
  },
  {
    title: "Furniture Website",
    description:
      "A full-featured e-commerce platform for a furniture store, including product list, detailed product pages, search & filter functionality, shopping cart, order management, send mail, authenticate. The frontend is built with React, Tailwind CSS, and Bootstrap for a responsive & attractive UI, while the backend uses FastAPI with MySQL to handle products, users, and orders — a complete full-stack online shop simulation.",
    tags: ["React", "FastAPI", "Tailwind CSS", "Bootstrap", "MySQL"],
    link: "#",
    github: "https://github.com/VuKhanhNguyen/FurnitureWebsite.git",
  },
  {
    title: "My Kalimba",
    description:
      "A virtual kalimba web app that lets users play beautiful kalimba melodies by clicking or tapping on-screen keys, with realistic sound samples. Built with React for an interactive and responsive interface, combined with an Express/Node.js + MySQL backend (for potential user features, saved tunes, or recordings). A fun fusion of music and web technology.",
    tags: ["React", "ExpressJS", "NodeJS", "MySQL"],
    link: "http://mykalimba.netlify.app/",
    github: "https://github.com/VuKhanhNguyen/kalimba.git",
  },
  {
    title: "Food Recipe Blog",
    description:
      "A clean and modern recipe blog platform where users can browse, search, and save favorite food recipes. Developed with React + TypeScript for type-safe, maintainable code, and powered by a Node.js backend with MongoDB for storing recipes, images, and user data. Focuses on great reading experience and essential blog CRUD operations.",
    tags: ["React", "TypeScript", "NodeJS", "MongoDB"],
    link: "#",
    github: "https://github.com/VuKhanhNguyen/FoodRecipeBlog.git",
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
        dragConstraints={{ right: 0, left: -(projects.length * 432) }} // Approximate width calculation
        whileTap={{ cursor: "grabbing" }}
      >
        <style>{`
          .projects-slider::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {projects.map((project, index) => (
          <div key={index} style={{ minWidth: "400px", maxWidth: "400px" }}>
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
                  {project.link && project.link !== "#" && (
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
                  )}
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
