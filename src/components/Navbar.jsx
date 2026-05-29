import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar({ profile = {} }) {
  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Qualifications", path: "/qualifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 inset-x-0 z-50 bg-[#090313]/90 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-5">

        <div className="flex items-center gap-4 min-w-fit">
          <img
            src={profile.image}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/40"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-black text-white leading-none whitespace-nowrap">
              ISAYA MKUMBO
            </h1>

            <p className="text-sm text-purple-300 mt-1 whitespace-nowrap">
            Aspiring Data Scientist
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-2">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
