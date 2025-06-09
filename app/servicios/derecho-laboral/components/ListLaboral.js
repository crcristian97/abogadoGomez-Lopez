import Image from "next/image";
import { Briefcase, UserCheck, ShieldCheck, Gavel } from "lucide-react";

// Solo 4 servicios para la columna derecha
const servicios = [
  {
    icon: <UserCheck className="w-8 h-8 text-[#183852] mr-3" aria-hidden="true" />,
    title: "Contratación legal y correcta",
    desc: "Te ayudamos a contratar personal cumpliendo todas las normativas laborales, evitando riesgos y sanciones futuras.",
  },
  {
    icon: <Gavel className="w-8 h-8 text-[#183852] mr-3" aria-hidden="true" />,
    title: "Despidos con y sin causa",
    desc: "Asesoramos en procesos de despido, garantizando el cumplimiento de la ley y minimizando conflictos.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#183852] mr-3" aria-hidden="true" />,
    title: "Gestión de riesgos laborales",
    desc: "Implementamos estrategias para reducir riesgos y proteger tanto a la empresa como a los empleados.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#183852] mr-3" aria-hidden="true" />,
    title: "Defensa en juicios laborales",
    desc: "Brindamos defensa integral en audiencias y litigios laborales, representando tus intereses con experiencia.",
  },
];

function ServicioItem({ icon, title, desc }) {
  return (
    <div className="flex items-start mb-8 last:mb-0">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-[#183852] mb-1">{title}</h3>
        <p className="text-[#183852] text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ListLaboral() {
  return (
    <section
      className="relative w-full min-h-[400px] py-16 px-0 flex items-center justify-center overflow-hidden"
      style={{
        background: "#B0B9C2",
        border: "none",
        borderRadius: 0,
        margin: "0",
      }}
      aria-labelledby="asesoria-laboral-empresas"
    >
      {/* Sutil animación de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          // El gradiente ahora es completamente #B0B9C2 para que el fondo sea uniforme
          background: "#B0B9C2",
          animation: "pulseBg 8s ease-in-out infinite alternate",
        }}
      />
      <style>
        {`
          @keyframes pulseBg {
            0% { opacity: 1; }
            100% { opacity: 0.93; }
          }
        `}
      </style>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="asesoria-laboral-empresas"
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-[#183852] mb-4 drop-shadow"
          >
            Asesoría laboral para empresas
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-[#183852] max-w-2xl mx-auto">
            Acompañamos a empleadores y pymes en la gestión integral de sus obligaciones laborales, previniendo conflictos y optimizando recursos. <span className="font-bold text-[#CBA240] text-xl">Consultá por una auditoría gratuita.</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-20 w-full">
          {/* Columna izquierda: Imagen */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-[#e2c77b] bg-white">
              <Image
                src="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1717699002/asesoria-laboral-empresas.webp"
                alt="Asesoría laboral para empresas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            </div>
          </div>
          {/* Columna derecha: Textos uno debajo del otro */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {servicios.map((serv, idx) => (
              <ServicioItem
                key={idx}
                icon={serv.icon}
                title={serv.title}
                desc={serv.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}
