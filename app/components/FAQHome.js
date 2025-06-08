"use client";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { ChevronDown } from "lucide-react";

export default function FAQHome({ faqs = [] }) {
  console.log(faqs);
  const [openIndex, setOpenIndex] = useState(null);

  // If no faqs prop is provided, show nothing
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

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
              title="Contactanos"
              aria-label="Contactanos"
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
