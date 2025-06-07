export default function Footer() {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Estudio López Gómez" className="inline-flex items-center">
            <svg className="w-8 text-[#CBA240]" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">López Gómez</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Estudio Jurídico López Gómez: especialistas en Derecho Penal y Civil en Buenos Aires. Defendemos tus derechos con compromiso, experiencia y asesoramiento legal personalizado.
            </p>
            
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">Contacto</p>
          <div className="flex">
            <p className="mr-1 text-white">Teléfono:</p>
            <a href="tel:+541123456789" aria-label="Nuestro teléfono" title="Nuestro teléfono" className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]">+54 11 2345-6789</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a href="mailto:info@lopezgomezabogados.com" aria-label="Nuestro email" title="Nuestro email" className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]">info@lopezgomezabogados.com</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Dirección:</p>
            <a href="https://maps.google.com/?q=Av. Corrientes 1234, CABA, Argentina" target="_blank" rel="noopener noreferrer" aria-label="Nuestra dirección" title="Nuestra dirección" className="transition-colors duration-300 text-[#CBA240] hover:text-[#b49536]">
              Av. Corrientes 1234, CABA
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">Redes</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="https://wa.me/541123456789" target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#CBA240]" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 11.945C0 5.355 5.373 0 12 0c3.181 0 6.167 1.24 8.413 3.488A11.822 11.822 0 0 1 24 11.945c0 6.627-5.373 12.001-12 12.001a11.95 11.95 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.735.995 3.27 1.591 5.346 1.591 5.448 0 9.89-4.444 9.89-9.94 0-5.495-4.442-9.939-9.89-9.939C6.551 2.905 2.11 7.349 2.11 12.844c0 2.225.651 3.891 1.746 5.453l-.999 3.648 3.797-.752zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.366.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#CBA240]" aria-label="Instagram">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#CBA240]" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"/>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Consultá por WhatsApp, seguinos en Instagram y Facebook para novedades legales y consejos útiles.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Estudio López Gómez. Todos los derechos reservados.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="#faq" className="text-sm text-white transition-colors duration-300 hover:text-[#CBA240]">F.A.Q</a>
          </li>
          <li>
            <a href="/privacidad" className="text-sm text-white transition-colors duration-300 hover:text-[#CBA240]">Política de Privacidad</a>
          </li>
          <li>
            <a href="/terminos" className="text-sm text-white transition-colors duration-300 hover:text-[#CBA240]">Términos &amp; Condiciones</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
