import Section from "../common/Section";
import InfiniteSlider from "../common/InfiniteSlider";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiBootstrap,
  SiMysql,
  SiDocker,
  SiFigma,
  SiVite,
} from "react-icons/si";

const sliderItems = [
  { name: "HTML", category: "Frontend", icon: <SiHtml5 /> },
  { name: "CSS", category: "Frontend", icon: <SiCss3 /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript /> },
  { name: "React", category: "Frontend Library", icon: <SiReact /> },
  { name: "Node.js", category: "Backend Runtime", icon: <SiNodedotjs /> },
  { name: "Express.js", category: "Backend Framework", icon: <SiExpress /> },
  { name: "FastAPI", category: "Backend Framework", icon: <SiFastapi /> },
  { name: "Bootstrap", category: "CSS Framework", icon: <SiBootstrap /> },
  { name: "MySQL", category: "Database", icon: <SiMysql /> },
  { name: "Docker", category: "Containerization", icon: <SiDocker /> },
  { name: "Figma", category: "UI Design", icon: <SiFigma /> },
  { name: "Vite", category: "Build Tool", icon: <SiVite /> },
];

const Skills = () => {
  return (
    <Section id="skills" title="My Arsenal" subtitle="Skills">
      <div style={{ marginBottom: "4rem" }}>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "var(--text-muted)",
          }}
        >
          Technologies I work with to build high-performance applications.
        </p>

        {/* Row 1: Left direction */}
        <InfiniteSlider
          items={sliderItems.slice(0, 5)}
          speed={25}
          direction="left"
        />

        {/* Row 2: Right direction */}
        <InfiniteSlider
          items={sliderItems.slice(5, 9)}
          speed={30}
          direction="right"
        />
      </div>
    </Section>
  );
};

export default Skills;
