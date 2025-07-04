import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 0,
    category: "Derecho civil",
    title: "BEATRIZ SARRLO Y EL DERECHO SUCESORIO: ¿PUEDE HEREDAR EL CÓNYUGE SEPARADO DE HECHO?",
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
    slug: "que-hace-un-caligrafo-publico",
    avatar: "EG", 
  }
];

export default function BlogsHeadline() {
  // Separamos la nota más importante (id:0) y el resto
  const mainPost = blogPosts.find(post => post.id === 0);
  const otherPosts = blogPosts.filter(post => post.id !== 0);

  return (
    <section className="w-full bg-[#cfd6df] py-12 px-2 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold text-[#183852] text-center mb-2">
          Últimos artículos del blog
        </h2>
        <p className="text-[#183852] text-center mb-10 text-base sm:text-lg">
          Explora nuestros artículos más recientes sobre derecho
        </p>
        {/* Nota principal destacada */}
        {mainPost && (
          <div className="mb-12">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden min-h-[480px] w-full">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[256px]">
                <Image
                  src={mainPost.image}
                  alt={mainPost.title}
                  fill
                  title={mainPost.title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-8 w-full">
                <span className="text-sm text-[#183852] font-semibold mb-2">{mainPost.category}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#183852] mb-4 leading-tight">{mainPost.title}</h3>
                <p className="text-[#183852] text-lg sm:text-xl mb-6 flex-1">{mainPost.description}</p>
                <div className="flex items-center gap-2 mt-auto">
                  {mainPost.avatar && (
                    <div className="w-10 h-10 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold text-lg shadow">
                      {mainPost.avatar}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm text-[#183852] font-semibold">{mainPost.author}</span>
                    <span className="text-xs text-[#183852]">{mainPost.date}</span>
                  </div>
                  <span className="text-xs text-[#183852] ml-3">{mainPost.time}</span>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/blog/${mainPost.slug}`}
                    prefetch={false}
                    className="inline-block text-[#cba240] font-semibold text-lg hover:underline transition"
                  >
                    Leer más &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Resto de las notas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
      </div>
    </section>
  );
}
