"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

// Dummy testimonials data
const testimonials = [
  {
    text: "Excelente atención y profesionalismo. Me ayudaron en todo momento y resolvieron mi caso rápidamente.",
    name: "María González",
    stars: 5,
  },
  {
    text: "Muy recomendables, claros y atentos. Explicaron todo el proceso y me sentí acompañado.",
    name: "Juan Pérez",
    stars: 4,
  },
  {
    text: "Gran equipo de abogados, resolvieron mi situación laboral de manera eficiente.",
    name: "Lucía Fernández",
    stars: 5,
  },
  {
    text: "Me brindaron confianza y seguridad desde el primer momento. ¡Gracias!",
    name: "Carlos López",
    stars: 5,
  },
  {
    text: "Atención personalizada y resultados favorables. Los recomiendo.",
    name: "Ana Torres",
    stars: 4,
  },
  {
    text: "Profesionales y humanos. Se ocuparon de mi caso con dedicación.",
    name: "Sofía Ramírez",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < count ? "text-[#CBA240] fill-[#CBA240]" : "text-gray-300"}
          fill={i < count ? "#CBA240" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [startIdx, setStartIdx] = useState(0);

  const visibleTestimonials = testimonials.slice(startIdx, startIdx + 3);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + 3 < testimonials.length;

  const handlePrev = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };

  const handleNext = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <section className="w-full py-12 px-2 md:px-0 bg-[#B0B9C2] flex flex-col items-center">
      <h2 className="text-[#183852] text-2xl md:text-3xl font-merriweather font-bold text-center mb-8">
        Testimonios de nuestros clientes
      </h2>
      <div className="flex items-center gap-4 w-full max-w-6xl">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          disabled={!canGoLeft}
          className={`transition-colors duration-200 bg-white border-2 border-[#CBA240] rounded-full p-2 shadow-md hover:bg-[#CBA240] hover:text-white focus:outline-none ${
            !canGoLeft ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          aria-label="Anterior"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
        </button>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-[#E5E7EB] min-h-[220px]"
            >
              <p className="text-[#183852] text-base font-medium mb-4 text-center">
                "{t.text}"
              </p>
              <div className="mb-2">
                <StarRating count={t.stars} />
              </div>
              <span className="text-[#CBA240] font-bold font-merriweather text-sm mt-auto">
                {t.name}
              </span>
            </div>
          ))}
        </div>
        {/* Arrow Right */}
        <button
          onClick={handleNext}
          disabled={!canGoRight}
          className={`transition-colors duration-200 bg-white border-2 border-[#CBA240] rounded-full p-2 shadow-md hover:bg-[#CBA240] hover:text-white focus:outline-none ${
            !canGoRight ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          aria-label="Siguiente"
        >
          <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
