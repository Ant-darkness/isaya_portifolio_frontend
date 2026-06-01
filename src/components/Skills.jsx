import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiScikitlearn,
  SiPandas,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";

// Map skill names to react-icons
const SKILL_ICONS = {
  python:          { icon: <FaPython />,       color: "#3b82f6" },
  react:           { icon: <FaReact />,         color: "#22d3ee" },
  php:             { icon: <FaPhp />,            color: "#8b5cf6" },
  postgresql:      { icon: <SiPostgresql />,    color: "#38bdf8" },
  sql:             { icon: <FaDatabase />,       color: "#a78bfa" },
  "machine learning": { icon: <SiScikitlearn />, color: "#f97316" },
  "data science":  { icon: <BsBarChartFill />,  color: "#e91e8c" },
  fastapi:         { icon: <SiFastapi />,        color: "#34d399" },
  tailwindcss:     { icon: <SiTailwindcss />,   color: "#38bdf8" },
  excel:           { icon: <PiMicrosoftExcelLogo />, color: "#16a34a" },
  pandas:          { icon: <SiPandas />,         color: "#a3e635" },
};

function getSkillMeta(skillName) {
  const key = skillName.toLowerCase();
  return SKILL_ICONS[key] || null;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills({ skills = [] }) {
  return (
    <section className="section-space">
      <div className="container-responsive">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I use to build solutions.</p>
        </div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => {
            const name = typeof skill === "string" ? skill : skill.title;
            const meta = getSkillMeta(name);

            return (
              <motion.div
                key={index}
                variants={item}
                className="card skill-card"
                whileHover={{ y: -5 }}
              >
                {/* Icon or image placeholder */}
                {meta ? (
                  <div
                    className="skill-icon-wrap"
                    style={{
                      color: meta.color,
                      background: `${meta.color}15`,
                      borderColor: `${meta.color}30`,
                    }}
                  >
                    {meta.icon}
                  </div>
                ) : (
                  <div
                    className="skill-img-placeholder"
                    title={`Add image for ${name} in /public/skills/${name.toLowerCase().replace(/\s/g, "-")}.png`}
                  >
                    <span style={{ fontSize: "0.6rem", lineHeight: 1.4 }}>
                      Add icon<br />to /public
                    </span>
                  </div>
                )}

                <span className="skill-name">{name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
