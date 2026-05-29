import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects({ projects = [] }) {
  return (
    <section className="min-h-screen py-36 px-6 bg-[#05010d]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Projects
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Featured projects and systems I have worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white leading-tight">
                {project.name}
              </h3>

              <p className="mt-6 text-gray-400 leading-8 text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="h-12 px-5 rounded-xl bg-white/10 hover:bg-[#24292e] transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub />
                    Github
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="h-12 px-5 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
