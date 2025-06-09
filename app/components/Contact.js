import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#183852] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CBA240] mb-14">Contactanos</h2>
        <div className="flex flex-col md:flex-row justify-between gap-12 text-white">
          {/* Correo */}
          <div className="flex-1 flex flex-col items-start">
            <Mail className="w-8 h-8 text-[#CBA240] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Correo</h3>
            <p className="text-sm mb-2 text-gray-200">
              Listos/as para recibir tus consultas legales de manera rápida y efectiva.
            </p>
            <a
              href="mailto:contacto@slgabogados.com"
              className="text-[#CBA240] underline text-base break-all"
              title="Correo de contacto"
              aria-label="Correo de contacto"
            >
              contacto@slgabogados.com
            </a>
          </div>
          {/* Teléfono */}
          <div className="flex-1 flex flex-col items-start">
            <Phone className="w-8 h-8 text-[#CBA240] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Teléfono</h3>
            <p className="text-sm mb-2 text-gray-200">Horarios: 10:00 a 18:00.</p>
            <a
              href="tel:+5491134644620"
              className="text-[#CBA240] underline text-base"
              title="Teléfono de contacto"
              aria-label="Teléfono de contacto"
            >
              011-61280168 <br />
              011-54645620
            </a>
          </div>
          {/* Oficina */}
          <div className="flex-1 flex flex-col items-start">
            <MapPin className="w-8 h-8 text-[#CBA240] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Oficina</h3>
            <p className="text-sm mb-2 text-gray-200">
              Llámanos para recibir asesoramiento personalizado y profesional.
            </p>
            <address className="not-italic text-base text-[#CBA240]">
              Av. Carlos Pellegrini 465, Piso 9°, Oficina 71, CABA
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
