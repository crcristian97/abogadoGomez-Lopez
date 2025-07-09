import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 0,
    category: "Derecho penal",
    title: "El caso Felipe Petinatto - Incendio doloso u homicidio agravado por el medio empleado",
    description: "Análisis jurídico sobre el caso Felipe Petinatto: ¿incendio doloso o homicidio agravado por el medio empleado? Diferencias penales, implicancias y claves del proceso.",
    author: "Dr. José Luis López",
    date: "09 Julio 2025",
    time: "7 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/el-caso-felipe-petinatto-incendio-doloso-u-homicidio-agravado-por-el-medio-empleado.webp",
    featured: true,
    avatar: "LG", 
    slug: "el-caso-felipe-petinatto-incendio-doloso-u-homicidio-agravado-por-el-medio-empleado",
  },
  {
    id: 1,
    category: "Derecho civil",
    title: "Beatriz Sarlo y el derecho sucesorio: ¿puede heredar el cónyuge separado de hecho?",
    description: "Analizamos el caso real de la escritora Beatriz Sarlo para explicar si un cónyuge separado de hecho conserva derechos hereditarios. Qué dice el Código Civil y qué ocurre con los testamentos ológrafos.",
    author: "Dra. Estefanía Gómez",
    date: "26 Junio 2025",
    time: "12 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/herencia-beatriz-sarlo.webp",
    featured: true,
    avatar: "LG", 
    slug: "beatriz-sarlo-herencia-y-separacion-de-hecho",
  },
  {
    id: 2,
    category: "Derecho civil",
    title: "El derecho a la salud - El amparo como remedio",
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
    id: 3,
    category: "Derecho laboral",
    title: "El trabajo freelance - Distinción entre empleado y contratista privado.",
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
    id: 4,
    category: "Derecho penal",
    title: "Sobre el delito de encubrimiento de contrabando",
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
    id: 5,
    category: "Peritajes caligráficos",
    title: "¿Qué hace un Calígrafo Público? Funciones y rol profesional",
    description: "El Calígrafo Público o Perito Calígrafo es un profesional especializado en verificar la autenticidad de documentos, firmas y manuscritos. ",
    author: "Dra. Estefanía Gómez",
    date: "18 Junio 2025",
    time: "6 min read",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/caligrafo-publico-en-buenos-aires.webp",
    featured: false,
    slug: "que-hace-un-caligrafo-publico",
    avatar: "EG", 
  }
];

export default function BlogsHeadline() {
  // Dividir los posts en dos filas de 3
  const firstRow = blogPosts.slice(0, 3);
  const secondRow = blogPosts.slice(3, 6);

  // Si hay más de 6 posts, los demás van en "otras notas"
  const otherPosts = blogPosts.slice(6);

  return (
    <section className="relative bg-gray-50 px-4 sm:px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold text-[#183852] text-center mb-2">
            Últimos artículos del blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-[#183852] sm:mt-4 mb-10">
            Explora nuestros artículos más recientes sobre derecho
          </p>
        </div>
        {/* Primera fila de 3 cards */}
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {firstRow.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex-shrink-0 relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 640px) 100vw, 400px"
                  priority={post.id === 0}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#cba240]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.category}</Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-[#183852]">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {post.avatar ? (
                      <div className="h-10 w-10 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold text-lg shadow">
                        {post.avatar}
                      </div>
                    ) : (
                      <span className="sr-only">{post.author}</span>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#183852]">
                      <span className="hover:underline">{post.author}</span>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Segunda fila de 3 cards */}
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {secondRow.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex-shrink-0 relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 640px) 100vw, 400px"
                  priority={false}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#cba240]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.category}</Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-[#183852]">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {post.avatar ? (
                      <div className="h-10 w-10 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold text-lg shadow">
                        {post.avatar}
                      </div>
                    ) : (
                      <span className="sr-only">{post.author}</span>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#183852]">
                      <span className="hover:underline">{post.author}</span>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Resto de las notas */}
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {otherPosts.map((post, idx) => (
              <div
                key={post.id}
                className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden min-h-[420px] sm:min-h-[440px] md:min-h-[470px] lg:min-h-[500px] w-full md:w-[520px] mx-auto"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-60 min-h-[192px] sm:min-h-[224px] md:min-h-[240px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    title={post.title}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 520px"
                    priority={false}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 sm:p-7 md:p-8 w-full">
                  <span className="text-xs text-[#183852] font-semibold mb-1">{post.category}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#183852] mb-2 leading-tight">{post.title}</h3>
                  <p className="text-[#183852] text-base sm:text-lg mb-4 flex-1">{post.description}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    {post.avatar && (
                      <div className="w-8 h-8 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold text-base shadow">
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
                      className="inline-block text-[#cba240] font-semibold text-base hover:underline transition"
                    >
                      Leer más &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
