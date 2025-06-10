export default function Stats() {
  return (
    <section className="bg-[#B0B9C2] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Cambiamos md:items-end por md:items-start para alinear arriba */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-14 md:mb-20 gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#183852] mb-2 md:mb-0 tracking-tight font-merriweather">
            Nuestra <span className="text-[#183852]">trayectoria</span>
          </h2>
          <p className="text-[#183852] max-w-2xl text-lg md:text-xl font-light leading-relaxed md:text-right">
            Más de <span className="font-bold text-[#183852]">30 años</span> brindando <span className="font-bold text-[#183852]">defensa penal técnica y personalizada</span> a <span className="font-bold text-[#183852]">imputados y víctimas</span> en el fuero ordinario y federal. Nuestra experiencia y compromiso nos distinguen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t-2 border-[#183852] pt-10">
          <div className="flex flex-col items-start md:items-center">
            <span className="text-5xl md:text-6xl font-extrabold text-[#183852] mb-2 drop-shadow-sm">+30</span>
            <span className="text-[#183852] text-base md:text-lg font-semibold tracking-wide uppercase">Años de experiencia</span>
          </div>
          <div className="flex flex-col items-start md:items-center border-t md:border-t-0 md:border-l-2 border-[#183852] pt-8 md:pt-0 md:pl-10">
            <span className="text-5xl md:text-6xl font-extrabold text-[#183852] mb-2 drop-shadow-sm">+500</span>
            <span className="text-[#183852] text-base md:text-lg font-semibold tracking-wide uppercase">Clientes representados</span>
          </div>
          <div className="flex flex-col items-start md:items-center border-t md:border-t-0 md:border-l-2 border-[#183852] pt-8 md:pt-0 md:pl-10">
            <span className="text-5xl md:text-6xl font-extrabold text-[#183852] mb-2 drop-shadow-sm">2</span>
            <span className="text-[#183852] text-base md:text-lg font-semibold tracking-wide uppercase">Jurisdicciones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
