"use client";
import { motion } from "framer-motion";
import CustomButton from "../../../ui/CustomButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } },
  whileHover: { scale: 1.07, boxShadow: "0 8px 32px 0 rgba(203,162,64,0.18)" },
};

export default function BanneCTALaboral({ title, description }) {
  return (
    <motion.section
      className="w-full relative flex items-center justify-center min-h-[340px] py-20 px-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(24,56,82,1) 70%, rgba(176,185,194,0.18) 100%), linear-gradient(270deg, rgba(24,56,82,1) 70%, rgba(176,185,194,0.18) 100%)",
        backgroundColor: "#183852",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full max-w-5xl flex flex-col items-center justify-center text-center relative z-10"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          variants={fadeUpVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg sm:text-2xl text-white mb-8 max-w-2xl mx-auto"
          variants={fadeUpVariants}
        >
          {description}
        </motion.p>
        <motion.div
          variants={buttonVariants}
          whileHover="whileHover"
        >
          <CustomButton
            variant="primary"
            href="https://wa.me/"
            title="Hablá ahora por WhatsApp"
            aria-label="Hablá ahora por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg px-10 py-4"
          >
            Hablá ahora por WhatsApp
          </CustomButton>
        </motion.div>
      </motion.div>
      {/* Degradé extra en los costados para pantallas grandes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(176,185,194,0.18) 0%, rgba(24,56,82,1) 15%, rgba(24,56,82,1) 85%, rgba(176,185,194,0.18) 100%)",
        }}
      />
    </motion.section>
  );
}
