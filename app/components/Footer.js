import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 pt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-y-14 gap-x-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 flex flex-col gap-6">
          <a href="/" aria-label="Go home" title="Estudio Gómez&López" className="inline-flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="Estudio Gómez&López Logo"
              title="Estudio Gómez&López"
              width={80}
              height={80}
              className="w-20 h-20"
              priority={false}
            />
          </a>
          <div className="lg:max-w-sm">
            <p className="text-white text-[1.1rem] leading-relaxed">
              Estudio Jurídico López&nbsp;Gómez: especialistas en Derecho Penal y Civil en Buenos Aires. <br /> Defendemos tus derechos con compromiso, experiencia y asesoramiento legal personalizado.
            </p>
          </div>
        </div>
        <div className="space-y-6 text-[1.1rem] font-sans">
          <p className="text-base font-bold tracking-wide text-white mb-4">Contacto</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white min-w-[90px]">Teléfono:</span>
              <a
                href="tel:+541161280168"
                aria-label="Teléfono Dra. Estefanía Gómez"
                title="Teléfono Dra. Estefanía Gómez"
                className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]"
              >
                +54 11 6128-0168
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white min-w-[90px]">Teléfono:</span>
              <a
                href="tel:+541154645620"
                aria-label="Teléfono Dr. José Luis López"
                title="Teléfono Dr. José Luis López"
                className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]"
              >
                +54 11 5464-5620
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white min-w-[90px]">Email:</span>
              <a
                href="mailto:jllopez!269@gmail.com"
                aria-label="Nuestro email"
                title="Nuestro email"
                className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536] break-all"
              >
                jllopez!269@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-white min-w-[90px] mt-1">Dirección:</span>
              <a
                href="https://maps.google.com/?q=Av. Carlos Pellegrini 465, Piso 9°, Oficina 71, CABA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nuestra dirección"
                title="Nuestra dirección"
                className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]"
              >
                Av. Carlos Pellegrini 465,<br className="sm:hidden" /> Piso 9°, Oficina 71, CABA
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-base font-bold tracking-wide text-white mb-2">Redes</span>
          <div className="flex items-center gap-5 mt-1">
            <a href="https://wa.me/541161280168" target="_blank" title="WhatsApp" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#CBA240]" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.945C0 5.355 5.373 0 12 0c3.181 0 6.167 1.24 8.413 3.488A11.822 11.822 0 0 1 24 11.945c0 6.627-5.373 12.001-12 12.001a11.95 11.95 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.735.995 3.27 1.591 5.346 1.591 5.448 0 9.89-4.444 9.89-9.94 0-5.495-4.442-9.939-9.89-9.939C6.551 2.905 2.11 7.349 2.11 12.844c0 2.225.651 3.891 1.746 5.453l-.999 3.648 3.797-.752zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.366.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/g.l.legales/" target="_blank" title="Instagram" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#CBA240]" aria-label="Instagram">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-7">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"/>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-white text-[1.1rem] leading-relaxed">
            Consultá por WhatsApp, seguinos en Instagram para novedades legales y consejos útiles.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-8 pb-12 border-t border-white/20 gap-6 lg:flex-row">
        <p className="text-white text-[1.05rem] leading-relaxed">
          © {new Date().getFullYear()} Estudio Gómez&López. Todos los derechos reservados.
        </p>
        <div className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <span className="text-white text-[1.05rem]">
            Desarrollado por{" "}
            <a
              href="https://www.wemakeitlab.com"
              target="_blank"
              rel="noopener"
              title="Desarrollado por We make it Lab"
              className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]"
            >
              We make it Lab
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
