import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact({ contact = {} }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-white/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-10">
          Contact
        </h2>

        <div className="flex justify-center gap-8 text-4xl">
          <a
            href={contact.github}
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
