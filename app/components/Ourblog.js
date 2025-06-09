import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "EL DERECHO A LA SALUD — EL AMPARO COMO REMEDIO.",
    excerpt:
      "Saber mas sobr el remedio del que disponemos los abogados para proteger al afiliado a las obras sociales y/o sistemas de medicina prepaga cuando se les niegan medicamentos o prestaciones médicas.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/derecho-a-la-salud-en-buenos-aires.webp",
    highlight: true,
  },
  {
    id: 2,
    title:
      "EL TRABAJO FREELANCE — DISTINCIÓN ENTRE EMPLEADO Y CONTRATISTA PRIVADO.",
    excerpt:
      "Ley N° 27.742 y el Decreto N° 847/24 dispuesta por la AFIP (ahora denominada ARCA) en cuanto se introduce un cambio crucial para los trabajadores independientes en Argentina",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/trabajo-freelancer-abogado-buenos-aires.webp",
    highlight: false,
  },
  {
    id: 3,
    title: "SOBRE EL DELITO DE ENCUBRIMIENTO DE CONTRABANDO",
    excerpt:
      "Se trata de una figura prevista en el artículo 874 del Código Aduanero (Ley 22.415) que se configura  básicamente en dos supuestos, a saber: 1) Que exista un delito de contrabando, sin importar si es en grado de tentativa o consumado; 2) Que quien oficie de encubridor, lo haga sin necesidad de responder a una promesa previa en ese sentido.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/delito-contrabando-en-buenos-aires.webp",
    highlight: false,
  },
];

export default function Ourblog() {
  return (
    <section
      id="ourblog"
      className="w-full py-10 px-2 md:px-0 bg-[#B0B9C2] flex flex-col items-center "
    >
      <h2 className="text-[#183852] text-2xl md:text-3xl font-merriweather font-bold text-center mb-8">
        Conocé nuestro blog
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left big card with image */}
        <div className="rounded-xl bg-[#8E98A3] p-0 overflow-hidden flex flex-col justify-end min-h-[260px] md:row-span-2 shadow-lg relative">
          {blogPosts[0].image && (
            <>
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                title={blogPosts[0].title}
                width={800}
                height={400}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-[#183852] opacity-65 z-0" />
            </>
          )}
          <div className="relative z-10 px-8 py-6 flex flex-col gap-2 h-auto justify-end">
            <h3 className="text-[#CBA240] text-lg md:text-xl font-bold mb-1 leading-snug">
              {blogPosts[0].title}
            </h3>
            <p className="text-[#ededed] text-base">{blogPosts[0].excerpt}</p>
          </div>
        </div>
        {/* Top right card */}
        <div className="rounded-xl overflow-hidden relative min-h-[120px] shadow-lg flex flex-col justify-end">
          {blogPosts[1].image && (
            <>
              <Image
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                title={blogPosts[1].title}
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#183852] opacity-65 z-0" />
            </>
          )}
          <div className="relative z-10 p-6">
            <h3 className="text-[#CBA240] text-base md:text-lg font-bold mb-1 leading-snug">
              {blogPosts[1].title}
            </h3>
            <p className="text-[#ededed] text-sm mt-0">{blogPosts[1].excerpt}</p>
          </div>
        </div>
        {/* Bottom right card */}
        <div className="rounded-xl overflow-hidden relative min-h-[120px] shadow-lg flex flex-col justify-end">
          {blogPosts[2].image && (
            <>
              <Image
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                width={500}
                height={500}
                title={blogPosts[2].title}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#183852] opacity-65 z-0" />
            </>
          )}
          <div className="relative z-10 p-6">
            <h3 className="text-[#CBA240] text-base md:text-lg font-bold mb-2 leading-snug">
              {blogPosts[2].title}
            </h3>
            <p className="text-[#ededed] text-sm">{blogPosts[2].excerpt}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/blog"
          prefetch={false}
          className="group inline-flex items-center gap-3 rounded-full px-10 py-4 font-merriweather font-bold text-lg md:text-xl bg-[#183852] text-[#CBA240] shadow-lg transition-all duration-200 min-w-[200px] focus:outline-none focus:ring-4 focus:ring-[#CBA240]/40 hover:bg-[#CBA240] hover:text-[#183852] hover:scale-105 active:scale-100"
          aria-label="Ir al blog"
        >
          Leer más
          <svg
            className="w-6 h-6 text-[#CBA240] group-hover:text-[#183852] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
