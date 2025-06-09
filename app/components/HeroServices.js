"use client";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.65, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const descVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

export default function HeroServices({ src, alt, title, description, buttonShow = true }) {
  return (
    <motion.section
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] h-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={imageVariants}
      >
        <Image
          src={src}
          alt={alt}
          title={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover" }}
          fill
          sizes="100vw"
          loading="lazy"
          aria-hidden="true"
          priority={false}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#183852] z-[1]"
        aria-hidden="true"
        variants={overlayVariants}
      />
      {/* Contenido más abajo a la izquierda, sin fondo */}
      <motion.div
        className="absolute left-0 bottom-0 z-20 flex flex-col items-start justify-end max-w-4xl px-4 sm:px-8 pb-12 sm:pb-20 md:pb-28 w-full"
        style={{ minHeight: "unset" }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-merriweather font-bold text-white text-left mb-4 drop-shadow-lg break-words"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="text-white text-lg sm:text-xl md:text-3xl text-left max-w-full mb-6 drop-shadow-md break-words"
            variants={descVariants}
          >
            {description}
          </motion.p>
        )}
        {buttonShow && (
          <motion.div variants={buttonVariants}>
            <CustomButton
              variant="primary"
              href="https://wa.me/5491161280168?text=Hola, quiero asesoramiento legal"
              title="Hablá ahora por WhatsApp"
              aria-label="Hablá ahora por WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Solicitar consulta gratuita
            </CustomButton>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}
