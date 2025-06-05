import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { Shield, Users, Scale } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 w-full max-w-none mx-0 my-8 md:my-16">
      <div className="flex-1 min-w-0 p-2 md:p-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold font-merriweather mb-6">
          G&amp;L Asesoramiento jurídico integral
        </h2>
        <p className="text-[#ededed] text-lg md:text-xl mb-4">
          Somos un estudio de abogados con una visión clara: brindar{" "}
          <span className="text-[#CBA240] font-bold">
            soluciones personalizadas
          </span>{" "}
          en materia Penal, Civil y Laboral. Contamos además con especialistas en{" "}
          <span className="text-[#CBA240] font-bold">
            pericias caligráficas y documentológicas
          </span>{" "}
          para respaldar cada caso con evidencia técnica.
        </p>
        <p className="text-[#ededed] text-base md:text-lg mb-6">
          Nos destacamos por una atención cercana, profesional y eficaz tanto para personas físicas como jurídicas.
        </p>
        <ul className="mb-6 space-y-6">
          <li className="flex items-center gap-2 text-lg">
            <Shield className="text-[#CBA240] text-lg mt-1" />
            <span>
              <span className="text-[#CBA240] font-bold">Soluciones legales</span> a tu medida y con confianza.
            </span>
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Users className="text-[#CBA240] text-lg" />
            <span>
              <span className="text-[#CBA240] font-bold">Asesoría integral</span> en Derecho Penal y más.
            </span>
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Scale className="text-[#CBA240] text-lg" />
            <span>
              <span className="text-[#CBA240] font-bold">Comprometidos con honestidad</span> en el seguimiento del tema hasta su finalización.
            </span>
          </li>
        </ul>
        <CustomButton variant="primary" >
          Conocé más sobre nosotros
        </CustomButton>
      </div>
      <div className="flex-1 flex justify-center min-w-0 mt-8 md:mt-0 p-2 md:p-4">
        <div className="rounded-xl overflow-hidden border-4 border-[#183852] w-full max-w-lg">
          <Image
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1717432327/estudio-lopez-gomez/biblioteca-legal.webp"
            alt="Biblioteca legal"
            width={640}
            height={400}
            className="object-cover w-full h-64 md:h-80"
            priority
          />
        </div>
      </div>
    </section>
  );
}
