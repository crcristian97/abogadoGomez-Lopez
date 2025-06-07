import Image from "next/image";
import CustomButton from "../ui/CustomButton";

export default function HeroServices({ src, alt, title, description }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen h-[70vh] md:h-screen">
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
      {/* Responsive container: bottom left on desktop, centered on mobile */}
      <div className="absolute z-20 flex flex-col items-start p-4 sm:p-6 md:p-10 w-full max-w-full md:max-w-md
        left-1/2 md:left-0 bottom-8 md:bottom-0
        transform -translate-x-1/2 md:translate-x-0
        bg-black/30 md:bg-transparent rounded-lg md:rounded-none
        backdrop-blur-sm md:backdrop-blur-0
        mx-auto md:mx-0
        ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-merriweather font-bold text-white text-left mb-3 md:mb-4 drop-shadow-lg whitespace-normal md:whitespace-nowrap">
          {title}
        </h1>
        {description && (
          <p className="text-white text-sm sm:text-base md:text-lg text-left max-w-full md:max-w-md mb-3 md:mb-4 drop-shadow-md">
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
