"use client";
import {
  Stethoscope,
  Landmark,
  Gavel,
  Scale
} from "lucide-react";

// Subcomponente para cada beneficio/amparo
export function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center bg-[#CBA240] rounded-xl shadow p-5 transition-transform transition-shadow duration-200 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:bg-[#e2c77a] group cursor-pointer">
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-[#183852] mb-1 text-left group-hover:text-[#8a6a1a] transition-colors duration-200">{title}</h3>
        <p className="text-[#183852] text-left">{description}</p>
      </div>
      <div className="flex-shrink-0 ml-4 mt-1">
        <Icon className="w-8 h-8 text-[#183852] group-hover:text-[#8a6a1a] transition-colors duration-200" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function BeneftisDC({
  heading = "Amparos: protección rápida y efectiva de derechos constitucionales",
  intro = "En situaciones urgentes donde se vulneran derechos fundamentales garantizados por la Constitución Nacional, el recurso de amparo es una herramienta esencial. Nuestro estudio se especializa en presentar y gestionar los siguientes amparos:",
  benefits = [
    {
      icon: Stethoscope,
      title: "Amparos de salud",
      description: "Para garantizar el acceso a tratamientos médicos, medicamentos o prestaciones sanitarias."
    },
    {
      icon: Landmark,
      title: "Amparos ante entidades bancarias",
      description: "Defensa frente a cobros indebidos, ejecuciones o cláusulas abusivas."
    },
    {
      icon: Gavel,
      title: "Amparos por mora en la administración pública",
      description: "Reclamos contra retrasos injustificados o falta de respuestas."
    },
    {
      icon: Scale,
      title: "Amparos tributarios",
      description: "Protección contra actos ilegales o arbitrarios en materia impositiva."
    }
  ],
  outro = "Nos aseguramos de que tu derecho sea protegido con rapidez, entendiendo la urgencia que estas situaciones requieren."
}) {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-[#B0B9C2]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-[#183852] mb-4 text-left drop-shadow-lg">
          {heading}
        </h2>
        <p className="text-[#25476a] text-base md:text-lg mb-8 text-left">
          {intro}
        </p>
        <div className="space-y-6">
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        <p className="text-[#25476a] text-base md:text-lg mt-10 text-left">
          {outro}
        </p>
      </div>
    </section>
  );
}
