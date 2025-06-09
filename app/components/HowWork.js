"use client";

import { Contact, Laptop, PenLine, Check } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { handleClickWhatsApp } from "../utils/WhatsApp";

const steps = [
  {
    key: "consulta-inicial",
    icon: <Contact />,
    title: "Consulta inicial",
    description:
      "Nos contactás y nos contás tu situación. Analizamos tu caso y te orientamos sobre los pasos a seguir.",
  },
  {
    key: "estrategia-legal",
    icon: <Laptop />,
    title: "Estrategia legal",
    description:
      "Evaluamos las alternativas y diseñamos una estrategia personalizada para tu caso.",
  },
  {
    key: "gestion-acompanamiento",
    icon: <PenLine />,
    title: "Gestión y acompañamiento",
    description:
      "Nos ocupamos de la gestión legal y te acompañamos en cada instancia del proceso.",
  },
  {
    key: "resolucion",
    icon: <Check />,
    title: "Resolución",
    description:
      "Buscamos la mejor solución para tu situación, defendiendo siempre tus derechos.",
  },
];

export default function HowWork() {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-[#B0B9C2] flex flex-col items-center ">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-start mt-16">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:items-start mb-8 md:mb-0">
          <h2 className="text-[#183852] text-2xl md:text-3xl font-merriweather font-bold mb-2 text-left">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-[#183852] text-lg md:text-xl font-semibold text-left">
            Te acompañamos en cada paso, de manera clara y transparente.
          </p>
          <CustomButton
            className="rounded-full px-4 py-2 font-merriweather font-bold mt-4 cursor-pointer"
            variant="primary"
            onClick={() => handleClickWhatsApp('Hola, me comunico porque quisiera asesoramiento legal')}
          >
            Hablá con un abogado
          </CustomButton>
        </div>
        {/* Pasos en vertical a la derecha */}
        <div className="md:w-1/2 w-full flex flex-col gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.key}
              className="flex items-start gap-4 relative "
            >
              <div className="flex flex-col items-center mr-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#183852] text-[#CBA240] text-2xl font-bold shadow-lg border-4 border-[#CBA240] mb-2">
                  {step.icon}
                </div>
                {/* Línea vertical excepto en el último paso */}
                {idx !== steps.length - 1 && (
                  <div className="w-1 h-12 bg-[#CBA240] mx-auto"></div>
                )}
              </div>
              <div>
                <h3 className="text-[#183852] text-lg font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#183852] text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
