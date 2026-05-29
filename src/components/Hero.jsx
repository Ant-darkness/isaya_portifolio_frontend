import { motion } from "framer-motion";

export default function Hero({ profile = {} }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-bold"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition inline-block"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
