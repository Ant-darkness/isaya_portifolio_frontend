import { motion } from "framer-motion";

export default function Skills({ skills = [] }) {
  return (
    <section className="min-h-screen py-36 px-6 bg-[#070111] flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Skills
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I use for building scalable systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="w-full sm:w-[280px] rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white text-center">
                {skill}
              </h3>

              <p className="mt-5 text-gray-400 leading-7 text-center">
                Professional development experience using {skill} for modern applications.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
