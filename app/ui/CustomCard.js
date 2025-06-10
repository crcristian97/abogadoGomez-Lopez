"use client";
import Link from "next/link"; 
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomCard({ title = '', description = '', link = '', bg = '' }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[260px] relative bg-[#183852]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }} 
    >
      {bg && (
        <Image
          src={bg}
          alt={title}
          fill
          title={title}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-65"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
      )}
      <div className="absolute inset-0 bg-[#183852] opacity-65 z-0" />
      <div className="relative z-10">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-[#ededed] mb-4">{description}</p>
      </div>
      <Link
        href={link}
        prefetch={false}
        className="relative z-10 text-[#CBA240] text-sm font-semibold hover:underline mt-auto "
      >
        Leer más &gt;
      </Link>
    </motion.div>
  );
}