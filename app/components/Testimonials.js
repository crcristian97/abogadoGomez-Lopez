"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf, Star as StarOutline } from "lucide-react";

// Adapted testimonials data (in Spanish, as in your original)
const testimonials = [
  {
    text: "Excelente atención y profesionalismo. Me ayudaron en todo momento y resolvieron mi caso rápidamente.",
    name: "María González",
    stars: 5,
    role: "Cliente de Derecho Penal",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Muy recomendables, claros y atentos. Explicaron todo el proceso y me sentí acompañado.",
    name: "Juan Pérez",
    stars: 4,
    role: "Cliente de Derecho Civil",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Gran equipo de abogados, resolvieron mi situación laboral de manera eficiente.",
    name: "Lucía Fernández",
    stars: 5,
    role: "Cliente de Derecho Laboral",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Me brindaron confianza y seguridad desde el primer momento. ¡Gracias!",
    name: "Carlos López",
    stars: 5,
    role: "Cliente de Derecho Penal",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Atención personalizada y resultados favorables. Los recomiendo.",
    name: "Ana Torres",
    stars: 4,
    role: "Cliente de Pericias Caligráficas",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Profesionales y humanos. Se ocuparon de mi caso con dedicación.",
    name: "Sofía Ramírez",
    stars: 5,
    role: "Cliente de Derecho Civil",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    text: "El estudio me acompañó en todo el proceso y resolvieron mi consulta con rapidez.",
    name: "Martín Gómez",
    stars: 5,
    role: "Cliente de Derecho Laboral",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

// Star rating component using lucide-react icons
function StarRating({ count }) {
  // count: integer 0-5
  const fullStars = Math.floor(count);
  const hasHalf = count - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex space-x-1 text-yellow-400" aria-label={`Valoración: ${count} de 5 estrellas`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={18} fill="#facc15" stroke="#facc15" />
      ))}
      {hasHalf && <StarHalf size={18} fill="#facc15" stroke="#facc15" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={`empty-${i}`} size={18} stroke="#e5e7eb" />
      ))}
    </div>
  );
}

// Testimonial card
function TestimonialCard({ testimonial }) {
  return (
    <div
      className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 animate-fade"
      tabIndex={0}
      aria-label={`Testimonio de ${testimonial.name}`}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-gray-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <StarRating count={testimonial.stars} />
          </div>
          <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
        </div>
        <div className="flex items-center mt-2">
          <img
            src={testimonial.avatar}
            alt={`Foto de ${testimonial.name}`}
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
            loading="lazy"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main carousel component
export default function Testimonials() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Responsive: update visibleCards on resize
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

  // Auto slide
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

  // Styles for fade and carousel
  // (Tailwind can't do keyframes for custom names, so use global style tag)
  // Also, .testimonial-card:hover effect and .active-dot
  // (see below in JSX)

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
          background-color: #4F46E5;
        }
        .nav-button {
          transition: all 0.3s ease;
        }
        .nav-button:hover {
          background-color: #4F46E5;
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
