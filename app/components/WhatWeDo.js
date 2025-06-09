import React from "react";
import CustomCard from "../ui/CustomCard";
const whatWeDoData = [
  {
    title: "Derecho Penal",
    description:
      "Especialistas en estafas, contrabando, denuncias por abuso sexual, amenazas y lesiones.Defensa eficaz en todas las instancias.",
    link: "/servicios/derecho-penal",
    bg: "https://res.cloudinary.com/dgzi8i2ji/image/upload/especialista-derecho-penal.webp",
  },
  {
    title: "Derecho Civil",
    description:
      "Amparos de salud, sucesiones, divorcios y contratos, tanto generales como de  sociedades..",
    link: "/servicios/derecho-civil",
    bg: "https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-civil-en-bueno-aires.webp",
  },
  {
    title: "Derecho laboral",
    description:
      "Atención a empresas en juicios laborales. Asesoramiento en contratación y desvinculación laboral, según normativa vigente. Representación ante el Servicio de Conciliación Laboral Obligatoria (SECLO).",
    link: "/servicios/derecho-laboral",
    bg: "https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-laboral-en-buenos-aires.webp",
  },
  {
    title: "Pericias caligráficas y documentológicas",
    description:
      "Nuestro Departamento Pericial dispone de peritos de parte en materia penal y consultores técnicos en materia civil, especialistas en seguridad documental.",
    link: "/servicios/peritajes-caligraficos",
    bg: "https://res.cloudinary.com/dgzi8i2ji/image/upload/pericias-caligr%C3%A1ficas-en-buenos-aires.webp",
  },
];



export default function WhatWeDo() {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-[#B0B9C2] flex flex-col items-center">
      <h2 className="text-[#183852] text-2xl md:text-3xl font-merriweather font-bold text-center mb-2">
        ¿Qué hacemos?
      </h2>
      <p className="text-[#183852] text-lg md:text-xl font-semibold text-center mb-10">
        Para cada una de estas materias tenemos una solución.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whatWeDoData.map((item, idx) => (
          <CustomCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
