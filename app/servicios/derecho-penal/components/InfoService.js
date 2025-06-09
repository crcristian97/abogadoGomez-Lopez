"use client";
import { motion } from "framer-motion";

const delitos = [
  "Homicidio, tentativa de homicidio",
  "Abuso sexual, grooming, corrupción de menores",
  "Robo, hurto, encubrimiento",
  "Estafa, fraude, falsificación de documentos",
  "Delitos informáticos y contra el honor",
  "Violencia de género y violencia doméstica",
];

const letterAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  }),
};

export default function InfoService() {
  return (
    <section
      className="bg-[#B0B9C2] w-full flex flex-col items-center py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="delitos-penales"
    >
      <motion.h2
        id="delitos-penales"
        className="text-3xl md:text-5xl font-bold text-[#183852] mb-8 md:mb-12 text-center font-merriweather leading-tight"
        initial={{ opacity: 0, y: 40, letterSpacing: "-0.05em" }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
      >
        {"Brindamos defensa en causas por delitos tales como:".split("").map(
          (char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          )
        )}
      </motion.h2>
      <ul className="max-w-3xl w-full flex flex-col gap-6 md:gap-8">
        {delitos.map((delito, idx) => (
          <motion.li
            key={delito}
            className={`border-b border-[#183852] pb-4 md:pb-6 ${
              idx === delitos.length - 1 ? "border-b-0 pb-0" : ""
            }`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + idx * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.span
              className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.35 + idx * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {delito}
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
