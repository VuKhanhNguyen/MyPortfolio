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
      <div className="contact-grid">
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

          <div className="contact-info">
            <div className="contact-item">
              <div
                className="contact-icon-wrapper"
                style={{ color: "var(--primary-color)" }}
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

            <div className="contact-item">
              <div
                className="contact-icon-wrapper"
                style={{ color: "var(--secondary-color)" }}
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

          <div className="contact-socials">
            <a
              href="https://github.com/VuKhanhNguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <Github size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/vu-khanh-nguyen-06a8632a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <Linkedin size={25} />
            </a>
            <a
              href="https://www.facebook.com/vukhanh.nguyen.9461/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <Facebook size={25} />
            </a>
          </div>
        </motion.div>

        <div className="contact-form-wrapper">
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="contact-form-row">
              <div className="input-group">
                <label className="input-label">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input-field"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="input-field"
                style={{ resize: "vertical" }}
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

export default Contact;
