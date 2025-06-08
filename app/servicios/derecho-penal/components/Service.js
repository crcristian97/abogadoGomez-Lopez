import React from "react";
import {
  ShieldCheck,
  Users,
  FileText,
  Lightbulb,
} from "lucide-react";
import PenalCard from "../../../ui/PenalCard";

const serviceCards = [
  {
    title: "Defensa de imputados",
    description:
      "Asistencia y representación en todas las etapas del proceso penal, garantizando el respeto de sus derechos.",
    icon: ShieldCheck,
  },
  {
    title: "Asesoría a víctimas",
    description:
      "Acompañamiento y patrocinio a víctimas de delitos para lograr justicia y reparación.",
    icon: Users,
  },
  {
    title: "Recursos y apelaciones",
    description:
      "Interposición de recursos y apelaciones para la revisión de resoluciones judiciales desfavorables.",
    icon: FileText,
  },
  {
    title: "Consultas y estrategias",
    description:
      "Consultoría penal y diseño de estrategias legales personalizadas para cada caso.",
    icon: Lightbulb,
  },
];


export default function Service() {
  return (
    <section className="py-16 bg-[#183852]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 text-white">
            Servicios
          </h2>
          <p className="text-left text-lg md:text-xl text-white">
            Ofrecemos una{" "}
            <span className="font-bold text-[#CBA240]">
              defensa penal técnica, ética y personalizada
            </span>{" "}
            en todas las etapas del proceso penal. <br />
            Nuestro objetivo es proteger tus derechos, buscar soluciones efectivas y acompañarte con compromiso y confidencialidad en cada instancia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {serviceCards.map((card, idx) => (
            <PenalCard
              key={idx}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
