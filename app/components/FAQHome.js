"use client";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Puede un solo heredero iniciar la sucesión?",
    answer:
      "Sí. En Argentina, según el Código Civil y Comercial, un solo heredero puede iniciar la sucesión sin necesidad de los demás. Posteriormente, se cita al resto para que acepten o rechacen la herencia.",
  },
  {
    question: "¿Es obligatorio hacer la sucesión para heredar?",
    answer:
      "Sí. Para transferir legalmente los bienes del fallecido, es necesario iniciar un trámite de sucesión judicial o notarial, dependiendo del caso.",
  },
  {
    question: "¿Qué pasa después de la declaratoria de herederos?",
    answer:
      "Una vez dictada la declaratoria, los herederos pueden inscribir los bienes a su nombre. También pueden repartirlos o venderlos según el acuerdo que haya entre ellos.",
  },
  {
    question: "¿Cómo saber si una sucesión está iniciada en Argentina?",
    answer:
      "Se puede consultar el estado de una expediente sucesorio en el sitio web del Poder Judicial correspondiente a cada provincia. En CABA, se usa el buscador de expedientes judiciales online.",
  },
  {
    question: "¿Una madre puede dejarle toda la herencia a un solo hijo?",
    answer:
      "No completamente. La ley argentina protege la porción legítima de los herederos forzosos (hijos); por lo tanto no se puede desheredar sin justa causa. Se puede hacer donación en vida, pero con límites legales.",
  },
  {
    question: "¿Cuánto tiempo tarda una sucesión en Argentina?",
    answer:
      "El tiempo varía según la complejidad y si hay acuerdo entre los herederos. En promedio, una sucesión simple puede demorar entre 6 meses y 1 año.",
  },
];

export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative isolate overflow-hidden bg-custom" id="faq">
      <div className="py-12 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left column: Title, description, and contact button */}
        <div className="flex flex-col text-left basis-1/2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-2">
            Preguntas
          </h2>
          <p className="mb-6 text-base text-base-content/80">
            Aquí respondemos las preguntas más frecuentes sobre nuestros servicios legales y cómo podemos ayudarte.
          </p>
          <div>
            <CustomButton
              variant="outline"
              href="#contact"
              className="w-fit"
            >
              Contactanos
            </CustomButton>
          </div>
        </div>
        {/* Right column: FAQ accordion */}
        <ul className="basis-1/2">
          {faqs.map((faq, idx) => (
            <li className="group" key={faq.question}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                type="button"
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 ml-auto transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-60" : "max-h-0"
                }`}
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
