"use client";
import { motion } from "framer-motion";

export default function PenalCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      className="group block rounded-xl overflow-hidden shadow-lg p-6 flex flex-col min-h-[260px] relative bg-gradient-to-br from-[#b08a1e] via-[#c2a869] to-[#183852] transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Título e ícono en la misma línea */}
      <div className="flex items-center gap-3">
        <Icon
          size={32}
          className="text-[#183852] flex-shrink-0"
          aria-hidden="true"
        />
        <h4 className="text-[#183852] text-xl font-bold text-left w-full">
          {title}
        </h4>
      </div>
      {/* Margen generoso y uniforme entre título e ícono y la descripción */}
      <div className="mt-6" />
      {/* Descripción ocupa todo el ancho debajo */}
      <p className="text-white text-base w-full">
        {description}
      </p>
    </motion.div>
  );
}