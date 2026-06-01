import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsImageFill } from "react-icons/bs";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects({ projects = [] }) {
  return (
    <section className="section-space">
      <div className="container-responsive">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2>Featured Projects</h2>
          <p>Systems and solutions I have built.</p>
        </div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card"
              whileHover={{ y: -5 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Project image */}
              <div className="project-img-wrap">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div className="project-img-placeholder">
                    <BsImageFill size={28} />
                    <span>
                      Add image: /public/projects/<br />
                      {project.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 className="project-title">{project.name}</h3>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "clamp(0.82rem, 1vw, 0.92rem)",
                    lineHeight: 1.75,
                    marginTop: "0.6rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.tech?.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginTop: "1rem",
                    }}
                  >
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {(project.github || project.live) && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "1.25rem",
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
