import Section from "../common/Section";
import NeonButton from "../common/NeonButton";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(300px, 1fr) 2fr",
          gap: "4rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Let's Build Something Amazing
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              Have a project in mind or just want to say hi? I'm always open to
              discussing new ideas and opportunities.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div style={{ display: "flex", items: "center", gap: "1rem" }}>
              <div
                style={{
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  color: "var(--primary-color)",
                }}
              >
                <Mail size={50} />
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Email
                </p>
                <p>nguyenvukhanh392@gmail.com</p>
              </div>
            </div>

            <div style={{ display: "flex", items: "center", gap: "1rem" }}>
              <div
                style={{
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  color: "var(--secondary-color)",
                }}
              >
                <MapPin size={50} />
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Location
                </p>
                <p>Da Nang City, Vietnam</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            {[Github, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  padding: "0.8rem",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary-color)";
                  e.currentTarget.style.boxShadow = "var(--glow-primary)";
                  e.currentTarget.style.color = "var(--primary-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.color = "inherit";
                }}
              >
                <Icon size={25} />
              </a>
            ))}
          </div>
        </motion.div>

        <div
          style={{
            background: "var(--card-bg)",
            padding: "2rem",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
                >
                  Name
                </label>
                <input type="text" placeholder="John Doe" style={inputStyle} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={inputStyle}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                style={inputStyle}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: "vertical" }}
              ></textarea>
            </div>

            <NeonButton type="submit" style={{ marginTop: "1rem" }}>
              Send Message
            </NeonButton>
          </form>
        </div>
      </div>
    </Section>
  );
};

const inputStyle = {
  background: "rgba(0,0,0,0.3)",
  border: "1px solid var(--glass-border)",
  padding: "1rem",
  borderRadius: "var(--border-radius-sm)",
  color: "#fff",
  fontFamily: "inherit",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

export default Contact;
