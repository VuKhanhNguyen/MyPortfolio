import Section from "../common/Section";
import NeonCard from "../common/NeonCard";

const skillsData = [
  {
    category: "Frontend",
    items: [
      "React",
      "Vue",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Firebase", "Supabase", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Vite", "Figma", "Docker", "VS Code"],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="My Arsenal" subtitle="Skills">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {skillsData.map((group, index) => (
          <NeonCard key={group.category} delay={index * 0.2}>
            <h3
              style={{
                marginBottom: "1.5rem",
                color: "var(--primary-color)",
                textAlign: "center",
              }}
            >
              {group.category}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                justifyContent: "center",
              }}
            >
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    border: "1px solid var(--glass-border)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "var(--primary-color)";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.05)";
                    e.target.style.color = "var(--text-color)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </NeonCard>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
