"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../mock/testimonials";

export default function Testimonials() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % (testimonials.length - visibleCards + 1)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleCards]);

  // Pause on hover
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (!isPaused) return;
    const id = setTimeout(() => {}, 1000000);
    return () => clearTimeout(id);
  }, [isPaused]);

  // Calculate offset for carousel
  const getOffset = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector(".testimonial-card");
    if (!card) return 0;
    return -currentIndex * card.offsetWidth;
  };

  // Navigation handlers
  const goTo = (idx) => setCurrentIndex(idx);
  const next = () =>
    setCurrentIndex(
      (prev) => (prev + 1) % (testimonials.length - visibleCards + 1)
    );
  const prev = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (testimonials.length - visibleCards + 1)) %
        (testimonials.length - visibleCards + 1)
    );

  // Dots
  const dotCount = testimonials.length - visibleCards + 1;

  // Animation for fade
  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".testimonial-card");
    cards.forEach((card) => {
      card.classList.remove("animate-fade");
      // eslint-disable-next-line no-unused-expressions
      card.offsetWidth; // force reflow
      card.classList.add("animate-fade");
    });
  }, [currentIndex, visibleCards]);


  return (
    <div className="bg-[#B0B9C2] h-full flex items-center justify-center p-4">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0.4; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-fade {
          animation: fadeIn 0.8s ease-in-out;
        }
        .testimonial-card {
          transition: all 0.5s cubic-bezier(.4,2,.3,1);
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }
        .active-dot {
          transform: scale(1.4);
          background-color: #183852;
        }
        .nav-button {
          transition: all 0.3s ease;
        }
        .nav-button:hover {
          background-color: #183852;
          color: white;
        }
      `}</style>
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#183852] mb-4">Testimonios de Clientes</h2>
          <div className="w-20 h-1 bg-[#CBA240] mx-auto mb-6"></div>
          <p className="text-xl text-[#183852] max-w-2xl mx-auto">
            Escuchá lo que nuestros clientes dicen sobre su experiencia con nuestro estudio.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#183852] hover:text-white"
            onClick={prev}
            aria-label="Anterior"
            type="button"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
                className="nav-button absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#183852] hover:text-white"
            onClick={next}
            aria-label="Siguiente"
            type="button"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Carousel Container */}
          <div
            id="carousel"
            className="overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              id="testimonial-track"
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${getOffset()}px)`,
              }}
            >
              {testimonials.map((t, idx) => (
                <TestimonialCard testimonial={t} key={idx} />
              ))}
            </div>
          </div>
          {/* Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 ${currentIndex === idx ? "active-dot" : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
