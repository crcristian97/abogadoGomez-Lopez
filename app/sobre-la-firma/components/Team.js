"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { handleClickWhatsApp } from "../../utils/WhatsApp";

export default function CardTeam({
  image,
  title,
  description,
  buttonText = "Ver perfil",
  imagePosition = "right", // "left" or "right"
  rounder = true, // new prop: if true, card is fully rounded
}) {
  // Determine card rounding class
  const cardRoundingClass = rounder ? "rounded-full" : "rounded-2xl";

  // Overlay effect style
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#183852",
    opacity: 0.65,
    zIndex: 1,
    pointerEvents: "none",
  };

  // Wrapper for image with overlay effect
  function ImageWithOverlay({ src, alt, title, className, style }) {
    return (
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          title={title}
          className={className}
          style={style}
          aria-hidden="true"
          loading="lazy"
        />
        <div style={overlayStyle} aria-hidden="true" />
      </div>
    );
  }

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center bg-[#183852] rounded-2xl overflow-hidden my-8`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image on the left */}
      {imagePosition === "left" && (
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-[#183852]"
          initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <ImageWithOverlay
            src={image}
            alt={title}
            title={title}
            className={`object-cover w-72 h-72 md:w-[28rem] md:h-[28rem] shadow-2xl ${cardRoundingClass}`}
            style={{ backgroundColor: "#183852", opacity: 2.5 }}
            loading="lazy"
          />
        </motion.div>
      )}
      {/* Text content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10"
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-xl md:text-2xl font-bold font-merriweather text-white mb-4">
          {title}
        </h2>
        <p className="text-white text-base md:text-lg mb-6 whitespace-pre-line">
          {description}
        </p>
        <motion.button
          className="bg-[#CBA240] hover:bg-[#b89a3a] text-[#183852] font-bold py-2 px-6 rounded-lg transition-colors duration-200 w-fit cursor-pointer"
          onClick={() => handleClickWhatsApp('Hola, Dr Luis López quiero asesoramiento legal', '5491154645620')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
      {/* Image on the right */}
      {imagePosition === "right" && (
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-[#183852]"
          initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <ImageWithOverlay
            src={image}
            alt={title}
            title={title}
            className={`object-cover w-72 h-72 md:w-[28rem] md:h-[28rem] shadow-2xl ${cardRoundingClass}`}
            style={{ backgroundColor: "#183852", opacity: 0.95 }}
            loading="lazy"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
