import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Derecho civil",
    title: "EL DERECHO A LA SALUD — EL AMPARO COMO REMEDIO",
    description: "Saber mas sobre el remedio del que disponemos los abogados para proteger al afiliado a las obras sociales y/o sistemas de medicina prepaga cuando se les niegan medicamentos o prestaciones médicas.",
    author: "Dra. Estefanía Gómez y Dr. José Luis López",
    date: "09 Junio 2025",
    time: "5 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/derecho-a-la-salud-en-buenos-aires.webp",
    featured: true,
    avatar: "LG", 
    slug: "el-derecho-a-la-salud-el-amparo-como-remedio",
  },
  {
    id: 2,
    category: "Derecho laboral",
    title: "EL TRABAJO FREELANCE — DISTINCIÓN ENTRE EMPLEADO Y CONTRATISTA PRIVADO.",
    description: "Los derechos de freelancers en la región y la Ley de Contrato de Trabajo (LCT) aplicable a contrataciones eventuales.",
    author: "Dra. Estefanía Gómez",
    date: "09 Junio 2025",
    time: "5 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749250677/trabajo-freelancer-abogado-buenos-aires.webp",
    featured: false,
    slug: "trabajo-freelance-en-argentina",
    avatar: "EG"

  },
  {
    id: 3,
    category: "Derecho penal",
    title: "SOBRE EL DELITO DE ENCUBRIMIENTO DE CONTRABANDO",
    description: "El art. 864 del Código Aduanero-Ley 22.415: qué aspectos reviste básicamente este delito.",
    author: "Dr. José Luis López",
    date: "09 Junio 2025",
    time: "6 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/delito-contrabando-en-buenos-aires.webp",
    featured: false,
    slug: "delito-encubrimiento-contrabando",
    avatar: "EG", // Simulated avatar
  },
  {
    id: 4,
    category: "Peritajes caligráficos",
    title: "¿Qué hace un Calígrafo Público? Funciones y rol profesional",
    description: "El Calígrafo Público o Perito Calígrafo es un profesional especializado en verificar la autenticidad de documentos, firmas y manuscritos. ",
    author: "Dra. Estefanía Gómez",
    date: "18 Junio 2025",
    time: "6 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/caligrafo-publico-en-buenos-aires.webp",
    featured: false,
    slug: "delito-encubrimiento-contrabando",
    avatar: "EG", // Simulated avatar

  }
];

export default function BlogsHeadline() {
  return (
    <section className="w-full bg-[#cfd6df] py-12 px-2 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold text-[#183852] text-center mb-2">
          Últimos artículos del blog
        </h2>
        <p className="text-[#183852] text-center mb-10 text-base sm:text-lg">
          Explora nuestros artículos más recientes sobre derecho
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48 min-h-[192px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
              <div className="flex flex-col justify-between p-6 w-full">
                <span className="text-xs text-[#183852] font-semibold mb-1">{post.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#183852] mb-2">{post.title}</h3>
                <p className="text-[#183852] text-sm mb-4">{post.description}</p>
                <div className="flex items-center gap-2 mt-auto">
                  {post.avatar && (
                    <div className="w-7 h-7 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold text-base shadow">
                      {post.avatar}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-xs text-[#183852] font-semibold">{post.author}</span>
                    <span className="text-xs text-[#183852]">{post.date}</span>
                  </div>
                  <span className="text-xs text-[#183852] ml-3">{post.time}</span>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="inline-block text-[#cba240] font-semibold text-sm hover:underline transition"
                  >
                    Leer más &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
