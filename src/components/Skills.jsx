import { motion } from "framer-motion";

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-lg hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
