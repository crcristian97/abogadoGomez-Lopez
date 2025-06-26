"use client";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "El derecho a la salud — el amparo como remedio.",
    excerpt:
      "Saber más sobre el remedio del que disponemos los abogados para proteger al afiliado a las obras sociales y/o sistemas de medicina prepaga cuando se les niegan medicamentos o prestaciones médicas.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/derecho-a-la-salud-en-buenos-aires.webp",
    slug: "el-derecho-a-la-salud-el-amparo-como-remedio",
  },
  {
    id: 2,
    title:
      "El trabajo freelance — distinción entre empleado y contratista privado.",
    excerpt:
      "Ley N° 27.742 y el Decreto N° 847/24 dispuesta por la AFIP (ahora denominada ARCA) en cuanto se introduce un cambio crucial para los trabajadores independientes en Argentina.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/trabajo-freelancer-abogado-buenos-aires.webp",
    slug: "trabajo-freelance-en-argentina",
  },
  {
    id: 3,
    title: "Sobre el delito de encubrimiento de contrabando",
    excerpt:
      "Se trata de una figura prevista en el artículo 874 del Código Aduanero (Ley 22.415) que se configura básicamente en dos supuestos: 1) Que exista un delito de contrabando, sin importar si es en grado de tentativa o consumado; 2) Que quien oficie de encubridor, lo haga sin necesidad de responder a una promesa previa en ese sentido.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/delito-contrabando-en-buenos-aires.webp",
    slug: "delito-encubrimiento-contrabando",
  },
  {
    id: 4,
    title: "¿Qué hace un calígrafo público? Funciones y rol profesional",
    excerpt:
      "El Calígrafo Público o Perito Calígrafo es un profesional especializado en verificar la autenticidad de documentos, firmas y manuscritos. ",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/caligrafo-publico-en-buenos-aires.webp",
    slug: "que-hace-un-caligrafo-publico",
  },
];

export default function Ourblog() {
  return (
    <div className="w-full py-16 md:py-24 bg-gradient-to-b from-[#B0B9C2] via-[#e6e8ea] to-[#B0B9C2]">
      <div className="container mx-auto flex flex-col gap-14 px-4">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h3 className="text-2xl md:text-4xl font-merriweather font-bold text-[#183852] tracking-tight max-w-xl">
            Últimos artículos del blog
          </h3>
          <Link
            href="/blog"
            prefetch={false}
            className="group inline-flex items-center gap-3 rounded-full px-8 py-3 font-merriweather font-bold text-lg bg-[#183852] text-[#CBA240] shadow-lg transition-all duration-200 min-w-[180px] focus:outline-none focus:ring-4 focus:ring-[#CBA240]/40 hover:bg-[#CBA240] hover:text-[#183852] hover:scale-105 active:scale-100"
            aria-label="Ir al blog"
          >
            Ver todos los artículos
            <MoveRight className="w-5 h-5 text-[#CBA240] group-hover:text-[#183852] transition-colors duration-200" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              prefetch={false}
              className="flex flex-col gap-2 hover:opacity-85 cursor-pointer group bg-[#f7f8fa] rounded-2xl shadow-lg border border-[#e2e6ea] transition-transform duration-200 hover:scale-[1.025] overflow-hidden"
              aria-label={post.title}
            >
              <div className="relative w-full aspect-video mb-4 bg-[#B0B9C2]">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    title={post.title}
                    fill
                    className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300 opacity-80"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={false}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#183852]/80 via-[#183852]/40 to-transparent rounded-t-2xl" />
              </div>
              <div className="flex flex-col gap-2 px-5 pb-6">
                <h4 className="text-xl font-bold font-merriweather text-[#CBA240] tracking-tight group-hover:underline">
                  {post.title}
                </h4>
                <p className="text-[#183852] text-base font-medium">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
