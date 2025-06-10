"use client";
import {
  Stethoscope,
  Landmark,
  Gavel,
  Scale
} from "lucide-react";
import { motion } from "framer-motion";

// Animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

// Subcomponente para cada beneficio/amparo
export function BenefitCard({ icon, title, description }) {
  return (
    <motion.div
      className="flex items-center bg-[#CBA240] rounded-xl shadow p-5 transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:bg-[#e2c77a] group "
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-[#183852] mb-1 text-left group-hover:text-[#8a6a1a] transition-colors duration-200">{title}</h3>
        <p className="text-[#183852] text-left">{description}</p>
      </div>
      <div className="flex-shrink-0 ml-4 mt-1">
        {icon}
      </div>
    </motion.div>
  );
}

export default function BeneftisDC({
  heading = "Amparos: protección rápida y efectiva de derechos constitucionales",
  intro = "En situaciones urgentes donde se vulneran derechos fundamentales garantizados por la Constitución Nacional, el recurso de amparo es una herramienta esencial. Nuestro estudio se especializa en presentar y gestionar los siguientes amparos:",
  benefits = [
    {
      icon: <Stethoscope className="w-8 h-8 text-[#183852]" />,
      title: "Amparos de salud",
      description: "Para garantizar el acceso a tratamientos médicos, medicamentos o prestaciones sanitarias."
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#183852]" />,
      title: "Amparos ante entidades bancarias",
      description: "Defensa frente a cobros indebidos, ejecuciones o cláusulas abusivas."
    },
    {
      icon: <Gavel className="w-8 h-8 text-[#183852]" />,
      title: "Amparos por mora en la administración pública",
      description: "Reclamos contra retrasos injustificados o falta de respuestas."
    },
    {
      icon: <Scale className="w-8 h-8 text-[#183852]" />,
      title: "Amparos tributarios",
      description: "Protección contra actos ilegales o arbitrarios en materia impositiva."
    }
  ],
  outro = "Nos aseguramos de que tu derecho sea protegido con rapidez, entendiendo la urgencia que estas situaciones requieren."
}) {
  return (
    <motion.section
      className="w-full py-12 px-4 md:px-12 bg-[#B0B9C2]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-merriweather font-bold text-[#183852] mb-4 text-left drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="text-[#25476a] text-base md:text-lg mb-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {intro}
        </motion.p>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
        <motion.p
          className="text-[#25476a] text-base md:text-lg mt-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {outro}
        </motion.p>
      </div>
    </motion.section>
  );
}
