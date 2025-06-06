import Image from "next/image";
import CustomButton from "../ui/CustomButton";

export default function HeroSection({ src = "", alt = "", title = "", subtitle = "" }) {
  return (
    <div className="relative h-screen">
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay with background color and opacity */}
      <div className="absolute inset-0 bg-[#183852] opacity-65 z-[1]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl text-white font-bold text-center">
          {title}
        </h1>
        <h2 className="text-xl text-white mt-4 text-center">
          {subtitle}
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <CustomButton variant="primary">
            Solicitar consulta gratuita
          </CustomButton>
          <CustomButton
            variant="outline"
            href="https://wa.me/"
            title="Hablá ahora por WhatsApp"
            aria-label="Hablá ahora por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablá ahora por WhatsApp
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
