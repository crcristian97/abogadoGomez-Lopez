"use client";

// Helper to show each letter (sin animación)
function AnimatedLetters({ text, className = "" }) {
  return (
    <span
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((letter, idx) => (
        <span
          key={idx}
          style={{
            display: "inline-block",
            whiteSpace: letter === " " ? "pre" : "normal",
            color: "#CBA240",
            fontWeight: "bold",
            fontSize: "1.2em",
            marginRight: letter === " " ? "0.15em" : "0.02em",
            letterSpacing: "0.01em",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function SobreFirma() {
  return (
    <section className="w-full flex flex-col justify-center px-4 py-10 md:px-8 lg:px-0 max-w-4xl mx-auto">
      <div className="rounded-2xl overflow-hidden w-full bg-transparent">
        {/* Título centrado arriba en mobile, alineado a la izquierda en desktop */}
        <div className="w-full flex items-center justify-center md:justify-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-white text-left">
            <AnimatedLetters text="SOBRE LA FIRMA" />
          </h2>
        </div>
        {/* Contenido principal, ancho máximo y texto legible */}
        <div className="w-full flex flex-col gap-5 text-white">
          <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            <span className="font-bold">En el Estudio Jurídico Gómez&nbsp;López</span> nos dedicamos desde hace más de <span className="font-bold">30 años</span> a brindar defensa penal urgente, humana y efectiva a personas que enfrentan situaciones legales críticas en la Ciudad de Buenos Aires y alrededores.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            <span className="font-bold">Somos un equipo de abogados penalistas especializados</span>, con una fuerte vocación por la justicia y la protección de los derechos individuales. Actuamos con rapidez en momentos clave como <span className="font-bold">detenciones, imputaciones, allanamientos y citaciones</span>, acompañando a cada cliente sin prejuicios y con el compromiso que la situación merece.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Atendemos delitos graves —como <span className="font-bold">homicidios, abusos, estafas y violencia familiar</span>—, así como también casos de <span className="font-bold">falsificación documental, denuncias falsas y delitos informáticos</span>, ofreciendo una defensa técnica sólida, basada en experiencia comprobada y un trato empático.
          </p>
          <div>
            <span className="font-bold">Nuestra propuesta se basa en tres valores fundamentales:</span>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>
                <span className="font-bold text-[#CBA240]">Justicia</span>
                <span className="font-bold text-white">, como motor de cada estrategia legal.</span>
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Confianza</span>
                <span className="font-bold text-white">, como pilar de la relación abogado-cliente.</span>
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Compromiso</span>
                <span className="font-bold text-white">, porque cada persona merece ser escuchada, cuidada y defendida.</span>
              </li>
            </ul>
          </div>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            <span className="font-bold">Creemos que una buena defensa penal no es solo ganar un caso, sino también proteger la libertad, la reputación y la tranquilidad de nuestros clientes.</span> Por eso, ofrecemos un servicio personalizado, con <span className="font-bold">consultas presenciales o virtuales</span> y un enfoque claro, sin tecnicismos, para que sepas qué hacer y cómo avanzar desde el primer momento.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
            <span className="font-bold">Si enfrentás un conflicto penal o necesitás orientación legal seria y confidencial,</span> <span className="text-[#CBA240] font-bold">estamos para ayudarte</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
