"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  whileHover: { scale: 1.05, boxShadow: "0 8px 32px 0 rgba(203,162,64,0.18)" },
};

const infoVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
  whileHover: { scale: 1.07, boxShadow: "0 8px 32px 0 rgba(203,162,64,0.18)" },
};

export default function WhoDo() {
  return (
    <motion.section
      className="bg-[#183852] py-14 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Foto con efecto hover y animación */}
        <motion.div
          className="flex-shrink-0 group relative rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          variants={photoVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="whileHover"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogada-especialista-caligrafia-derecho.webp"
            alt="Dra. Estefanía Gómez"
            title="Dra. Estefanía Gómez"
            width={260}
            height={260}
            className="rounded-full object-cover w-64 h-64 grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          {/* Sutil overlay al hacer hover */}
          <div className="absolute inset-0 bg-[#CBA240]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />
        </motion.div>
        {/* Info con animación */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={infoVariants}
        >
          <h2 className="text-[#CBA240] text-2xl sm:text-3xl font-semibold mb-2">
            ¿Quién realiza las pericias?
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            Dra. Estefanía Gómez
          </h3>
          <p className="text-white text-base mb-2">
            Calígrafa Pública Nacional
          </p>
          <ul className="text-sm sm:text-base text-white/90 mb-5 space-y-1">
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Matriculada ante <span className="text-[#7ec4e7] font-semibold">SCJBA</span> y <span className="text-[#CBA240] font-semibold">CPCBA</span>
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              <span className="text-[#CBA240] font-semibold">+15 años</span> de experiencia judicial
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Experiencia docente <span className="text-[#7ec4e7] font-semibold">especializada</span>
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Dictámenes válidos en tribunales <span className="text-[#CBA240]">civiles, penales y laborales</span>
            </li>
          </ul>
          <motion.a
            href={`https://wa.me/5491161280168?text=${encodeURIComponent('Hola, me comunico porque quisiera asesoramiento legal')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Contactar ahora por WhatsApp"
            aria-label="Contactar ahora por WhatsApp"
            className="inline-block bg-[#CBA240] text-[#183852] font-semibold px-7 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#e2c77a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#CBA240] focus:ring-offset-2"
            variants={buttonVariants}
            whileHover="whileHover"
          >
            Contactar ahora
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
