import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp,
    FaPhoneAlt,
  } from "react-icons/fa";
  
  export default function Contact({ contact = {} }) {
    const items = [
      {
        title: "WhatsApp",
        value: contact.whatsapp,
        icon: <FaWhatsapp className="text-[#25D366]" />,
        link: `https://wa.me/${contact.whatsapp}`,
      },
      {
        title: "Email",
        value: contact.email,
        icon: <FaEnvelope className="text-[#EA4335]" />,
        link: `mailto:${contact.email}`,
      },
      {
        title: "Phone",
        value: contact.phone,
        icon: <FaPhoneAlt className="text-[#38BDF8]" />,
        link: `tel:${contact.phone}`,
      },
      {
        title: "LinkedIn",
        value: "Open Profile",
        icon: <FaLinkedin className="text-[#0A66C2]" />,
        link: contact.linkedin,
      },
      {
        title: "Github",
        value: "Visit Github",
        icon: <FaGithub className="text-white" />,
        link: contact.github,
      },
    ];
  
    return (
      <section className="min-h-screen py-40 px-6 bg-[#05010d] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
  
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black">
              Contact Me
            </h2>
  
            <p className="text-gray-400 mt-4 text-lg">
              Let’s connect and build something great.
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center gap-8">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="w-full sm:w-[280px] rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mx-auto">
                  {item.icon}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold text-center">
                  {item.title}
                </h3>
  
                <p className="mt-4 text-gray-400 break-all text-center leading-7">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
