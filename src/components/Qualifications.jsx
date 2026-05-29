import { motion } from "framer-motion";

export default function Qualifications({ qualifications = [] }) {
  return (
    <section className="min-h-screen py-40 px-6 bg-[#070111]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="text-5xl font-black">
            Qualifications
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Educational background and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {qualifications.map((q, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white leading-relaxed">
                  {q.title}
                </h3>

                <p className="text-purple-300 mt-4 text-lg">
                  {q.institution}
                </p>
              </div>

              {q.year && (
                <p className="text-gray-500 mt-8 text-sm">
                  {q.year}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
