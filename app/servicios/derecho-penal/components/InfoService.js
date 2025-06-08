export default function InfoService() {
  return (
    <section
      className="bg-[#B0B9C2] w-full flex flex-col items-center py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="delitos-penales"
    >
      <h2
        id="delitos-penales"
        className="text-3xl md:text-5xl font-bold text-[#183852] mb-8 md:mb-12 text-center font-merriweather leading-tight"
      >
        Brindamos defensa en causas por delitos tales como:
      </h2>
      <ul className="max-w-3xl w-full flex flex-col gap-6 md:gap-8">
        <li className="border-b border-[#183852] pb-4 md:pb-6">
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Homicidio, tentativa de homicidio
          </span>
        </li>
        <li className="border-b border-[#183852] pb-4 md:pb-6">
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Abuso sexual, grooming, corrupción de menores
          </span>
        </li>
        <li className="border-b border-[#183852] pb-4 md:pb-6">
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Robo, hurto, encubrimiento
          </span>
        </li>
        <li className="border-b border-[#183852] pb-4 md:pb-6">
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Estafa, fraude, falsificación de documentos
          </span>
        </li>
        <li className="border-b border-[#183852] pb-4 md:pb-6">
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Delitos informáticos y contra el honor
          </span>
        </li>
        <li>
          <span className="text-[#183852] font-normal text-2xl md:text-3xl font-merriweather block">
            Violencia de género y violencia doméstica
          </span>
        </li>
      </ul>
    </section>
  );
}
