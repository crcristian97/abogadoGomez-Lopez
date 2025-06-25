"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqContainerVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const answerVariants = {
  collapsed: { opacity: 0, height: 0, y: 10, transition: { duration: 0.25, ease: "easeIn" } },
  open: { opacity: 1, height: "auto", y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FAQHome({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  // If no faqs prop is provided, show nothing
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="relative isolate overflow-hidden bg-custom"
      id="faq"
      variants={faqContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="py-12 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left column: Title, description, and contact button */}
        <motion.div
          className="flex flex-col text-left basis-1/2"
          initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Preguntas
          </h2>
          <p className="mb-6 text-base text-white/80">
            Aquí respondemos las preguntas más frecuentes sobre nuestros servicios legales y cómo podemos ayudarte.
          </p>
          <div>
            <Link
              href="/blog"
              prefetch={false}
              className="w-fit font-bold text-[#CBA240] hover:text-white transition-colors duration-200"
              title="Mira lo que dicen nuestros expertos"
              aria-label="Mira lo que dicen nuestros expertos"
            >
              Mira lo que dicen nuestros expertos
            </Link>
          </div>
        </motion.div>
        {/* Right column: FAQ accordion */}
        <ul className="basis-1/2 text-white">
          {faqs.map((faq, idx) => (
            <motion.li
              className="group"
              key={faq.question}
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-white/10 cursor-pointer"
                aria-expanded={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                type="button"
              >
                <span className="flex-1">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 ml-auto transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={answerVariants}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 leading-relaxed">
                      <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
