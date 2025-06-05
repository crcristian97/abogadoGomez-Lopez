import Image from "next/image";
import CustomButton from "../ui/CustomButton";

export default function HeroSection() {
  return (
    <div className="relative h-screen ">
      <Image
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
        alt="abogados especialistas en buenos aires"
        title="abogados especialistas en buenos aires"
        fill
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay with background color and opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#183852",
          opacity: 0.65,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl text-white font-bold text-center">
          Abogados especialistas en Derecho Penal y Civil
        </h1>
        <p className="text-xl text-white mt-4 text-center">
          Defendemos tus derechos con compromiso y experiencia. Asesoramiento legal personalizado.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <CustomButton variant="primary">
            Solicitar consulta gratuita
          </CustomButton>
          <CustomButton
            variant="outline"
            href="https://wa.me/"
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
