import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function Contact({ contact = {} }) {
  const items = [
    {
      title: "WhatsApp",
      value: contact.whatsapp ? `+${contact.whatsapp}` : null,
      icon: <FaWhatsapp />,
      color: "#25D366",
      link: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null,
    },
    {
      title: "Email",
      value: contact.email,
      icon: <FaEnvelope />,
      color: "#EA4335",
      link: contact.email ? `mailto:${contact.email}` : null,
    },
    {
      title: "Phone",
      value: contact.phone,
      icon: <FaPhoneAlt />,
      color: "#38BDF8",
      link: contact.phone ? `tel:${contact.phone}` : null,
    },
    {
      title: "LinkedIn",
      value: "View Profile",
      icon: <FaLinkedin />,
      color: "#0A66C2",
      link: contact.linkedin,
    },
    {
      title: "GitHub",
      value: "Visit GitHub",
      icon: <FaGithub />,
      color: "#e2e8f0",
      link: contact.github,
    },
  ].filter((i) => i.link);

  return (
    <section className="section-space">
      <div className="container-responsive">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Contact Me</h2>
          <p>Let's connect and build something great together.</p>
        </div>

        <motion.div
          className="contact-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {items.map((item_data, index) => (
            <motion.a
              key={index}
              href={item_data.link}
              target="_blank"
              rel="noreferrer"
              className="card contact-card"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div
                className="contact-icon-wrap"
                style={{
                  color: item_data.color,
                  background: `${item_data.color}15`,
                  borderColor: `${item_data.color}30`,
                }}
              >
                {item_data.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  fontWeight: 800,
                }}
              >
                {item_data.title}
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
                  wordBreak: "break-all",
                  lineHeight: 1.5,
                }}
              >
                {item_data.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
