"use client";
import Image from "next/image";

export default function WhoDo() {
  return (
    <section className="bg-[#183852] py-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Foto con efecto hover */}
        <div className="flex-shrink-0 group relative rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <Image
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogada-especialista-caligrafia-derecho.webp"
            alt="Dra. Estefanía Gómez"
            title="Dra. Estefanía Gómez"
            width={260}
            height={260}
            className="rounded-full object-cover w-64 h-64 grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          {/* Sutil overlay al hacer hover */}
          <div className="absolute inset-0 bg-[#CBA240]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />
        </div>
        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#CBA240] text-2xl sm:text-3xl font-semibold mb-2">
            ¿Quién realiza las pericias?
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            Dra. Estefanía Gómez
          </h3>
          <p className="text-white text-base mb-2">
            Calígrafa Pública Nacional
          </p>
          <ul className="text-sm sm:text-base text-white/90 mb-5 space-y-1">
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Matriculada ante <span className="text-[#7ec4e7] font-semibold">SCJBA</span> y <span className="text-[#CBA240] font-semibold">CPCBA</span>
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              <span className="text-[#CBA240] font-semibold">+15 años</span> de experiencia judicial
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Experiencia docente <span className="text-[#7ec4e7] font-semibold">especializada</span>
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-[#CBA240] rounded-full mr-2 align-middle" />
              Dictámenes válidos en tribunales <span className="text-[#CBA240]">civiles, penales y laborales</span>
            </li>
          </ul>
          <a
            href={`https://wa.me/5491161280168?text=${encodeURIComponent('Hola, me comunico porque quisiera asesoramiento legal')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Contactar ahora por WhatsApp"
            aria-label="Contactar ahora por WhatsApp"
            className="inline-block bg-[#CBA240] text-[#183852] font-semibold px-7 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#e2c77a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#CBA240] focus:ring-offset-2"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
