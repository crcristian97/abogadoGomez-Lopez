import React from "react";
import { motion } from "framer-motion";

// Helper to animate and show each letter individually
function AnimatedLetters({ text, className = "" }) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 220,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: letter === " " ? "pre" : "normal",
            color: "#CBA240", // Highlight each letter for visibility
            fontWeight: "bold",
            fontSize: "1.2em",
            marginRight: letter === " " ? "0.15em" : "0.02em",
            letterSpacing: "0.01em",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Animation variants for the main container and content columns
const sectionVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const leftColVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  },
};

export default function SobreFirma() {
  return (
    <motion.section
      className="w-full max-w-5xl mx-auto my-12 px-4 md:px-0"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
        {/* Columna izquierda: SOLO el título */}
        <motion.div
          className="w-full md:w-1/2 flex items-start md:items-start justify-start md:justify-start bg-transparent p-0 md:p-10"
          variants={leftColVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-white text-left mb-8 md:mb-0">
            <AnimatedLetters text="SOBRE LA FIRMA" />
          </h2>
        </motion.div>
        {/* Columna derecha: todo el contenido menos el título */}
        <motion.div
          className="w-full md:w-1/2 p-0 md:p-10 flex flex-col justify-start"
          variants={rightColVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-lg md:text-xl text-white font-medium mb-4">
            <span className="font-bold">En el Estudio Jurídico Gómez&amp;López</span> nos dedicamos desde hace más de <span className="font-bold">30 años</span> a brindar defensa penal urgente, humana y efectiva a personas que enfrentan situaciones legales críticas en la Ciudad de Buenos Aires y alrededores.
          </p>
          <p className="text-base md:text-lg text-white mb-4">
            Somos un equipo de <span className="font-bold">abogados penalistas especializados</span>, con una fuerte vocación por la justicia y la protección de los derechos individuales. Actuamos con rapidez en momentos clave como <span className="font-bold">detenciones, imputaciones, allanamientos y citaciones</span>, acompañando a cada cliente sin prejuicios y con el compromiso que la situación merece.
          </p>
          <p className="text-base md:text-lg text-white mb-4">
            Atendemos delitos graves —como <span className="font-bold">homicidios, abusos, estafas y violencia familiar</span>—, así como también casos de <span className="font-bold">falsificación documental, denuncias falsas y delitos informáticos</span>, ofreciendo una defensa técnica sólida, basada en experiencia comprobada y un trato empático.
          </p>
          <div className="mb-4">
            <span className="font-bold text-white">Nuestra propuesta se basa en tres valores fundamentales:</span>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>
                <span className="font-bold text-[#CBA240]">Justicia</span>, como motor de cada estrategia legal.
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Confianza</span>, como pilar de la relación abogado-cliente.
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Compromiso</span>, porque cada persona merece ser escuchada, cuidada y defendida.
              </li>
            </ul>
          </div>
          <p className="text-base md:text-lg text-white mb-4">
            Creemos que una buena defensa penal no es solo ganar un caso, sino también proteger la libertad, la reputación y la tranquilidad de nuestros clientes. Por eso, ofrecemos un servicio personalizado, con <span className="font-bold">consultas presenciales o virtuales</span> y un enfoque claro, sin tecnicismos, para que sepas qué hacer y cómo avanzar desde el primer momento.
          </p>
          <p className="text-base md:text-lg text-white font-semibold">
            Si enfrentás un conflicto penal o necesitás orientación legal seria y confidencial, <span className="text-[#CBA240] font-bold">estamos para ayudarte</span>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
