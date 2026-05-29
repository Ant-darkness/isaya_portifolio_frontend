import { motion } from "framer-motion";

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10"
            >
              <h3 className="text-3xl font-bold">
                {project.name}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
