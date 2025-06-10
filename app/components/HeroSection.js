"use client";

import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { motion } from "framer-motion";

export default function HeroSection({ src = "", alt = "", title = "", subtitle = "" }) {
  return (
    <div className="relative h-screen">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={1200}
        height={630}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay with background color and opacity */}
      <div
        className="absolute inset-0 bg-[#183852] opacity-65 z-[1]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h1
          className="text-4xl text-white font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="text-xl text-white mt-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {subtitle}
        </motion.h2>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <CustomButton
            variant="outline"
            href={`https://wa.me/5491161280168?text=${encodeURIComponent(
              "Hola, me comunico porque quisiera asesoramiento legal"
            )}`}
            title="Hablá ahora por WhatsApp"
            aria-label="Hablá ahora por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablá ahora por WhatsApp
          </CustomButton>
        </motion.div>
      </div>
    </div>
  );
}
