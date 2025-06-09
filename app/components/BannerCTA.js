"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const cards = [
  {
    title: "Experiencia",
    text: "Más de 30 años brindando asesoramiento jurídico de excelencia en diversas áreas del derecho.",
  },
  {
    title: "Compromiso",
    text: "Nos comprometemos con cada cliente, ofreciendo atención personalizada y soluciones efectivas.",
  },
  {
    title: "Confianza",
    text: "Construimos relaciones basadas en la confianza, la ética profesional y la transparencia.",
  },
];

const BannerCTA = () => {
  return (
    <div className="w-full flex items-center justify-center relative min-h-[900px] md:min-h-[800px] lg:min-h-[700px] xl:min-h-[600px] 2xl:min-h-[520px] overflow-hidden" style={{ padding: "0" }}>
      <Image
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/facultad-de-derecho-buenos-aires.webp"
        alt="Facultad de Derecho Buenos Aires"
        fill
        title="Facultad de Derecho Buenos Aires"
        style={{
          objectFit: "cover",
          objectPosition: "center 40%",
          zIndex: 0,
          filter: "brightness(0.85) contrast(1.08) saturate(1.1)",
          transition: "filter 0.3s"
        }}
        quality={90}
        loading="lazy"
        priority={false}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, rgba(24,56,82,0.82) 0%, rgba(24,56,82,0.65) 100%)",
          zIndex: 1
        }}
      />
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 text-white relative z-10 justify-center items-center py-36 px-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="rounded-xl p-16 flex flex-col items-center text-center min-w-[340px] max-w-md bg-white/0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={idx}
          >
            <h3 className="text-5xl font-bold mb-6">{card.title}</h3>
            <p className="text-2xl font-medium">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BannerCTA;
