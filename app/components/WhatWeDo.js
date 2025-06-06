import React from "react";
import CustomCard from "../ui/CustomCard";
const whatWeDoData = [
  {
    title: "Derecho Penal",
    description:
      "Especialistas en estudios, denuncias, defensa, asesoramiento, seguimiento y representación en todas las instancias. Defensa eficaz en todas las instancias.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dgzi8i2ji/image/upload/especialista-derecho-penal.webp')]",
  },
  {
    title: "Derecho Civil",
    description:
      "Arreglos extrajud., sucesiones, divorcios, contratos, herencias, daños y perjuicios, contratos de locación.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dgzi8i2ji/image/upload/v1717690000/civil-bg.jpg')]",
  },
  {
    title: "Derecho laboral",
    description:
      "Asesoría a empresas y/o trabajadores. Asistencia en contratación y desvinculación laboral, representación ante el Servicio de Conciliación Laboral Obligatoria (SECLO).",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dgzi8i2ji/image/upload/v1717690000/laboral-bg.jpg')]",
  },
  {
    title: "Pericias caligráficas y documentológicas",
    description:
      "Nuestro Departamento Pericial elabora informes de parte en expedientes judiciales, asesoría en autenticidad, falsificación y estudios documentales.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dgzi8i2ji/image/upload/v1717690000/pericias-bg.jpg')]",
  },
];



export default function WhatWeDo() {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-[#b8c2cc] flex flex-col items-center">
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
