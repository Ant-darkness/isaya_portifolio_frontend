import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Qualifications({ qualifications = [] }) {
  return (
    <section className="section-space">
      <div className="container-responsive">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2>Qualifications</h2>
          <p>Education and certifications.</p>
        </div>

        <motion.div
          className="qualifications-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {qualifications.map((q, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card qual-card"
              whileHover={{ y: -5 }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "0.85rem",
                  background: "rgba(233,30,140,0.08)",
                  border: "1px solid rgba(233,30,140,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--pink-soft)",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                }}
              >
                <HiAcademicCap />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  fontWeight: 800,
                  lineHeight: 1.3,
                }}
              >
                {q.title}
              </h3>

              <p
                style={{
                  color: "var(--pink-soft)",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  marginTop: "0.5rem",
                  fontWeight: 500,
                }}
              >
                {q.institution}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {q.year && (
                  <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>
                    {q.year}
                  </span>
                )}
                {q.status && (
                  <span
                    className={`qual-status ${q.status.toLowerCase()}`}
                  >
                    {q.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
