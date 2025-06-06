import React from "react";
import Image from "next/image";

const BannerCTA = () => {
  return (
    <div className="w-full flex items-center justify-center relative min-h-[900px] md:min-h-[800px] lg:min-h-[700px] xl:min-h-[600px] 2xl:min-h-[520px] overflow-hidden" style={{ padding: "0" }}>
      <Image
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/facultad-de-derecho-buenos-aires.webp"
        alt="Facultad de Derecho Buenos Aires"
        fill
        title="Facultad de Derecho Buenos Aires"
        loading="lazy"
        style={{
          objectFit: "cover",
          objectPosition: "center 40%",
          zIndex: 0,
          filter: "brightness(0.85) contrast(1.08) saturate(1.1)",
          transition: "filter 0.3s"
        }}
        quality={90}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, rgba(24,56,82,0.82) 0%, rgba(24,56,82,0.65) 100%)",
          zIndex: 1
        }}
      />
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 text-white relative z-10 justify-center items-center py-36 px-6">
        <div className="rounded-xl p-16 flex flex-col items-center text-center shadow-2xl min-w-[340px] max-w-md backdrop-blur-sm bg-white/0">
          <h3 className="text-5xl font-bold mb-6">Experiencia</h3>
          <p className="text-2xl font-medium">Más de 20 años brindando asesoramiento jurídico de excelencia en diversas áreas del derecho.</p>
        </div>
        <div className="rounded-xl p-16 flex flex-col items-center text-center shadow-2xl min-w-[340px] max-w-md backdrop-blur-sm bg-white/0">
          <h3 className="text-5xl font-bold mb-6">Compromiso</h3>
          <p className="text-2xl font-medium">Nos comprometemos con cada cliente, ofreciendo atención personalizada y soluciones efectivas.</p>
        </div>
        <div className="rounded-xl p-16 flex flex-col items-center text-center shadow-2xl min-w-[340px] max-w-md backdrop-blur-sm bg-white/0">
          <h3 className="text-5xl font-bold mb-6">Confianza</h3>
          <p className="text-2xl font-medium">Construimos relaciones basadas en la confianza, la ética profesional y la transparencia.</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCTA;
