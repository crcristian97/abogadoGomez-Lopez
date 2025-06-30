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
    <section className="w-full max-w-5xl mx-auto my-12 px-4 md:px-0">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
        {/* Columna izquierda: SOLO el título */}
        <div className="w-full md:w-1/2 flex items-start md:items-start justify-start md:justify-start bg-transparent p-0 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-white text-left mb-8 md:mb-0">
            <AnimatedLetters text="SOBRE LA FIRMA" />
          </h2>
        </div>
        {/* Columna derecha: todo el contenido menos el título */}
        <div className="w-full md:w-1/2 p-0 md:p-10 flex flex-col justify-start">
          <p className="text-lg md:text-xl text-white font-medium mb-4">
            <span className="font-bold">En el Estudio Jurídico Gómez&amp;López</span> <span className="font-bold">nos dedicamos desde hace más de</span> <span className="font-bold">30 años</span> <span className="font-bold">a brindar defensa penal urgente, humana y efectiva a personas que enfrentan situaciones legales críticas en la Ciudad de Buenos Aires y alrededores.</span>
          </p>
          <p className="text-base md:text-lg text-white mb-4">
            <span className="font-bold">Somos un equipo de</span> <span className="font-bold">abogados penalistas especializados</span><span className="font-bold">, con una fuerte vocación por la justicia y la protección de los derechos individuales. Actuamos con rapidez en momentos clave como</span> <span className="font-bold">detenciones, imputaciones, allanamientos y citaciones</span><span className="font-bold">, acompañando a cada cliente sin prejuicios y con el compromiso que la situación merece.</span>
          </p>
          <p className="text-base md:text-lg text-white mb-4">
            <span className="font-bold">Atendemos delitos graves —como</span> <span className="font-bold">homicidios, abusos, estafas y violencia familiar</span><span className="font-bold">—, así como también casos de</span> <span className="font-bold">falsificación documental, denuncias falsas y delitos informáticos</span><span className="font-bold">, ofreciendo una defensa técnica sólida, basada en experiencia comprobada y un trato empático.</span>
          </p>
          <div className="mb-4">
            <span className="font-bold text-white">Nuestra propuesta se basa en tres valores fundamentales:</span>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>
                <span className="font-bold text-[#CBA240]">Justicia</span><span className="font-bold text-white">, como motor de cada estrategia legal.</span>
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Confianza</span><span className="font-bold text-white">, como pilar de la relación abogado-cliente.</span>
              </li>
              <li>
                <span className="font-bold text-[#CBA240]">Compromiso</span><span className="font-bold text-white">, porque cada persona merece ser escuchada, cuidada y defendida.</span>
              </li>
            </ul>
          </div>
          <p className="text-base md:text-lg text-white mb-4">
            <span className="font-bold">Creemos que una buena defensa penal no es solo ganar un caso, sino también proteger la libertad, la reputación y la tranquilidad de nuestros clientes. Por eso, ofrecemos un servicio personalizado, con</span> <span className="font-bold">consultas presenciales o virtuales</span><span className="font-bold"> y un enfoque claro, sin tecnicismos, para que sepas qué hacer y cómo avanzar desde el primer momento.</span>
          </p>
          <p className="text-base md:text-lg text-white font-semibold">
            <span className="font-bold">Si enfrentás un conflicto penal o necesitás orientación legal seria y confidencial,</span> <span className="text-[#CBA240] font-bold">estamos para ayudarte</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
