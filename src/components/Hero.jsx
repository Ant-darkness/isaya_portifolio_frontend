import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero({ profile = {}, contact = {} }) {
  return (
    <section className="min-h-screen bg-[#05010d] relative overflow-hidden flex items-center justify-center pt-36 pb-20 px-6">

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-700/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-600/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={profile.image}
            alt="profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-5xl md:text-7xl font-black leading-tight text-white break-words"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-2xl md:text-3xl font-bold text-purple-300"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 leading-8 text-lg max-w-3xl mx-auto"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <a
            href="/projects"
            className="min-w-[180px] h-14 px-8 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 flex items-center justify-center font-semibold text-base"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="min-w-[180px] h-14 px-8 rounded-xl border border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-semibold text-base"
          >
            Contact Me
          </a>
        </motion.div>

        <div className="flex justify-center items-center gap-4 mt-10 flex-wrap">

          <a
            href={contact.github}
            target="_blank"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#24292e] transition-all duration-300"
          >
            <FaGithub className="text-lg text-white" />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300"
          >
            <FaLinkedin className="text-lg text-[#0A66C2]" />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
          >
            <MdEmail className="text-lg text-[#EA4335]" />
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300"
          >
            <FaWhatsapp className="text-lg text-[#25D366]" />
          </a>
        </div>
      </div>
    </section>
  );
}
