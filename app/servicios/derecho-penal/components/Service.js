import React from "react";

const serviceCards = [
  {
    title: "Defensa de imputados",
    description:
      "Asistencia y representación en todas las etapas del proceso penal, garantizando el respeto de sus derechos.",
  },
  {
    title: "Asesoría a víctimas",
    description:
      "Acompañamiento y patrocinio a víctimas de delitos para lograr justicia y reparación.",
  },
  {
    title: "Recursos y apelaciones",
    description:
      "Interposición de recursos y apelaciones para la revisión de resoluciones judiciales desfavorables.",
  },
  {
    title: "Consultas y estrategias",
    description:
      "Consultoría penal y diseño de estrategias legales personalizadas para cada caso.",
  },
];

function PenalCard({ title, description }) {
  return (
    <div className="group block rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[260px] relative bg-[#183852] transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#CBA240]">
      <div className="relative z-10">
        <h3 className="text-[#ffffff] text-lg font-bold mb-2 group-hover:text-[#183852] transition-colors duration-200">{title}</h3>
        <p className="text-white mb-4 group-hover:text-[#183852] transition-colors duration-200">{description}</p>
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 text-[#183852]">
            Servicios
          </h2>
          <p className="text-left text-lg md:text-xl text-[#183852]">
            Ofrecemos una <span className="font-bold text-[#CBA240]">defensa penal técnica, ética y personalizada</span> en todas las etapas del proceso penal. <br />Nuestro objetivo es proteger tus derechos, buscar soluciones efectivas y acompañarte con compromiso y confidencialidad en cada instancia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {serviceCards.map((card, idx) => (
            <PenalCard
              key={idx}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
