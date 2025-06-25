"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Mail className="w-8 h-8 text-[#CBA240] mb-4" />,
    title: "Correo",
    description: "Listos/as para recibir tus consultas legales de manera rápida y efectiva.",
    content: (
      <a
        href="mailto:jllopez1269@gmail.com"
        className="text-[#CBA240] underline text-base break-all"
        title="Correo de contacto"
        aria-label="Correo de contacto"
      >
        jllopez1269@gmail.com
      </a>
    ),
  },
  {
    icon: <Phone className="w-8 h-8 text-[#CBA240] mb-4" />,
    title: "Teléfono",
    description: "Horarios: 10:00 a 18:00.",
    content: (
      <a
        href="tel:+5491134644620"
        className="text-[#CBA240] underline text-base"
        title="Teléfono de contacto"
        aria-label="Teléfono de contacto"
      >
        011-54645620 <br />
        011-61280168 
      </a>
    ),
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#CBA240] mb-4" />,
    title: "Oficina",
    description: "Llamanos para recibir asesoramiento personalizado y profesional.",
    content: (
      <address className="not-italic text-base text-[#CBA240]">
        Av. Carlos Pellegrini 465, Piso 9°, Oficina 71, CABA
      </address>
    ),
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.8,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  return (
    <section className="bg-[#183852] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CBA240] mb-14">Contactanos</h2>
        <div className="flex flex-col md:flex-row justify-between gap-12 text-white">
          {contactItems.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex-1 flex flex-col items-start"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={idx}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-2 text-gray-200">{item.description}</p>
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
