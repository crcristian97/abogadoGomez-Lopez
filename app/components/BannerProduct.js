import Image from "next/image";
import CustomButton from "../ui/CustomButton";

export default function BannerProduct() {
  return (
    <div className="relative w-full min-h-[20rem] md:min-h-[24rem] lg:min-h-[32rem] h-auto">
      <Image
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/asesoria-legal-en-buenos-aires.webp"
        alt="Banner Asesoría Legal"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        sizes="100vw"
        loading="lazy"
        title="Banner Asesoría Legal"
        priority={false}
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute inset-0 bg-[#183852] opacity-65 z-[1]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full h-full">
        <h2 className="text-2xl text-white font-bold text-center">
          Solicitá asesoramiento legal hoy
        </h2>
        <p className="text-base text-white mt-4 text-center max-w-2xl">
          Estamos acá para brindarte soluciones legales personalizadas y acompañarte en cada paso del proceso.
        </p>
        <div className="mt-8">
          <CustomButton
            variant="primary"
            href={`https://wa.me/5491161280168?text=${encodeURIComponent('Hola, me comunico porque quisiera asesoramiento legal')}`}
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
