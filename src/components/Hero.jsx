import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { BsPersonBoundingBox } from "react-icons/bs";

export default function Hero({ profile = {}, contact = {} }) {
  return (
    <section className="hero-section section-space">
      <div className="container-responsive" style={{ width: "100%" }}>
        <div className="hero-grid">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span className="pink-dot" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Available for opportunities
              </span>
            </div>

            <h1 className="hero-name">
              Hello, I'm <br />
              <span>{profile.name || "ISAYA MKUMBO"}</span>
            </h1>

            <p className="hero-title">{profile.title || "Data Science Student"}</p>

            <p className="hero-bio">{profile.bio}</p>

            {profile.location && (
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.82rem",
                  marginTop: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                📍 {profile.location}
              </p>
            )}

            {/* CTA buttons */}
            <div className="flex-wrap-gap" style={{ marginTop: "2rem" }}>
              <Link to="/projects" className="btn-primary">
                View Projects <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex-wrap-gap" style={{ marginTop: "1.75rem" }}>
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="social-btn"
                  title="Email"
                >
                  <MdEmail />
                </a>
              )}
              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              )}
            </div>
          </motion.div>

          {/*RIGHT - Avatar
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="hero-avatar"
              />
            ) : (
              <div className="hero-avatar-placeholder">
                <BsPersonBoundingBox size={48} opacity={0.3} />
                <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                  Add profile.jpg<br />to /public
                </span>
              </div>
            )}
          </motion.div>*/}
        </div>
      </div>
    </section>
  );
}
