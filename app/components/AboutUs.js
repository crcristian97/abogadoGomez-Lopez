"use client";
import Image from "next/image";
import { Shield, Users, Scale } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full max-w-none mx-0 my-8 md:my-16">
      <motion.div
        className="flex-1 min-w-0 p-2 md:p-4"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold font-merriweather mb-6">
          G&amp;L Asesoramiento jurídico integral
        </h2>
        <p className="text-[#ededed] text-lg md:text-xl mb-4">
          Somos un estudio de abogados con una visión clara: brindar{" "}
          <span className="text-[#CBA240] font-bold">
            soluciones personalizadas
          </span>{" "}
          en materia Penal, Civil y Laboral. Contamos además con especialistas en{" "}
          <span className="text-[#CBA240] font-bold">
            pericias caligráficas y documentológicas
          </span>{" "}
          para respaldar cada caso con evidencia técnica.
        </p>
        <p className="text-[#ededed] text-base md:text-lg mb-6">
          Nos destacamos por una atención cercana, profesional y eficaz tanto para personas físicas como jurídicas.
        </p>
        <ul className="mb-6 space-y-6">
          <li className="flex items-center gap-2 text-lg">
            <Shield className="text-[#CBA240] text-lg mt-1" />
            <span>
              <span className="text-[#CBA240] font-bold">Soluciones legales</span> a tu medida y con confianza.
            </span>
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Users className="text-[#CBA240] text-lg" />
            <span>
              <span className="text-[#CBA240] font-bold">Asesoría integral</span> en Derecho Penal y más.
            </span>
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Scale className="text-[#CBA240] text-lg" />
            <span>
              <span className="text-[#CBA240] font-bold">Comprometidos con honestidad</span> en el seguimiento del tema hasta su finalización.
            </span>
          </li>
        </ul>
        <Link
          href="/sobre-la-firma"
          prefetch={false}
          className="inline-block px-6 py-3 rounded-full bg-transparent border-2 border-[#CBA240] text-[#CBA240] font-bold transition-colors hover:bg-[#CBA240] hover:text-[#183852] focus:outline-none focus:ring-2 focus:ring-[#CBA240] focus:ring-offset-2"
        >
          Conocé más sobre nosotros
        </Link>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center items-center min-w-0 mt-8 md:mt-0 p-2 md:p-4"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="rounded-2xl overflow-hidden w-full max-w-xl bg-[#183852] opacity-80 z-[1] shadow-2xl">
          <Image
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/estudio-abogados-en-buenos-aires.webp"
            alt="estudio Gomez y Lopez de abogados en buenos aires"
            width={1200}
            height={800}
            className="object-cover w-full h-80 md:h-[28rem] opacity-65 z-0"
            priority={false}
            title="estudio Gomez y Lopez de abogados en buenos aires"
          />
        </div>
      </motion.div>
    </section>
  );
}
