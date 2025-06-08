import Image from "next/image";
import CustomButton from "../ui/CustomButton";

export default function HeroServices({ src, alt, title, description }) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] h-auto">
      <Image
        src={src}
        alt={alt}
        title={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
        fill
        sizes="100vw"
        loading="lazy"
        aria-hidden="true"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-[#183852] opacity-65 z-[1]"
        aria-hidden="true"
      />
      {/* Contenido más abajo a la izquierda, sin fondo */}
      <div
        className="absolute left-0 bottom-0 z-20 flex flex-col items-start justify-end max-w-4xl px-4 sm:px-8 pb-12 sm:pb-20 md:pb-28 w-full"
        style={{ minHeight: "unset" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-merriweather font-bold text-white text-left mb-4 drop-shadow-lg break-words">
          {title}
        </h1>
        {description && (
          <p className="text-white text-lg sm:text-xl md:text-3xl text-left max-w-full mb-6 drop-shadow-md break-words">
            {description}
          </p>
        )}
        <CustomButton
          variant="primary"
          href="https://wa.me/"
          title="Hablá ahora por WhatsApp"
          aria-label="Hablá ahora por WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          Solicitar consulta gratuita
        </CustomButton>
      </div>
    </section>
  );
}
