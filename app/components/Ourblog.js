"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Agregamos un campo slug para cada blog
const blogPosts = [
  {
    id: 1,
    title: "EL DERECHO A LA SALUD — EL AMPARO COMO REMEDIO.",
    excerpt:
      "Saber más sobre el remedio del que disponemos los abogados para proteger al afiliado a las obras sociales y/o sistemas de medicina prepaga cuando se les niegan medicamentos o prestaciones médicas.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/derecho-a-la-salud-en-buenos-aires.webp",
    highlight: true,
    slug: "el-derecho-a-la-salud-el-amparo-como-remedio",
  },
  {
    id: 2,
    title:
      "EL TRABAJO FREELANCE — DISTINCIÓN ENTRE EMPLEADO Y CONTRATISTA PRIVADO.",
    excerpt:
      "Ley N° 27.742 y el Decreto N° 847/24 dispuesta por la AFIP (ahora denominada ARCA) en cuanto se introduce un cambio crucial para los trabajadores independientes en Argentina.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/trabajo-freelancer-abogado-buenos-aires.webp",
    highlight: false,
    slug: "trabajo-freelance-en-argentina",
  },
  {
    id: 3,
    title: "SOBRE EL DELITO DE ENCUBRIMIENTO DE CONTRABANDO",
    excerpt:
      "Se trata de una figura prevista en el artículo 874 del Código Aduanero (Ley 22.415) que se configura básicamente en dos supuestos: 1) Que exista un delito de contrabando, sin importar si es en grado de tentativa o consumado; 2) Que quien oficie de encubridor, lo haga sin necesidad de responder a una promesa previa en ese sentido.",
    image:
      "https://res.cloudinary.com/dgzi8i2ji/image/upload/delito-contrabando-en-buenos-aires.webp",
    highlight: false,
    slug: "delito-encubrimiento-contrabando",
  },
];

// Mejor efecto: fade in + slight upward motion, staggered
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.18,
      duration: 1.1,
      ease: "easeOut",
    },
  }),
};

function BlogCard({ post, custom, large = false }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
      className={large ? "md:row-span-2" : ""}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`group relative flex flex-col justify-end overflow-hidden shadow-lg transition-transform duration-200 focus:outline-none ${
          large
            ? "rounded-2xl bg-[#f7f8fa] min-h-[320px] md:min-h-[400px] border border-[#e2e6ea] hover:scale-[1.025]"
            : "rounded-xl bg-[#8E98A3]/90 min-h-[180px] hover:scale-[1.03]"
        }`}
        aria-label={post.title}
        prefetch={false}
        tabIndex={0}
      >
        {post.image && (
          <>
            <Image
              src={post.image}
              alt={post.title}
              title={post.title}
              width={large ? 900 : 500}
              height={large ? 500 : 300}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-65 z-0"
              sizes={large ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
              priority={large}
            />
            <div
              className={`absolute inset-0 z-0 transition-opacity duration-200 ${
                large
                  ? "bg-gradient-to-t from-[#183852]/90 via-[#183852]/60 to-transparent opacity-80 group-hover:opacity-90"
                  : "bg-[#183852]/70 group-hover:bg-[#183852]/80 opacity-70"
              }`}
            />
          </>
        )}
        <div
          className={`relative z-10 ${
            large
              ? "px-10 py-8 md:py-10 flex flex-col gap-3"
              : "p-5"
          }`}
        >
          <h3
            className={`font-bold leading-tight group-hover:underline ${
              large
                ? "text-[#CBA240] text-2xl md:text-3xl mb-2 font-merriweather"
                : "text-[#CBA240] text-lg md:text-xl mb-1"
            }`}
          >
            {post.title}
          </h3>
          <p
            className={`${
              large
                ? "text-[#f7f7f7] text-base md:text-lg font-medium"
                : "text-[#ededed] text-sm md:text-base"
            }`}
          >
            {post.excerpt}
          </p>
        </div>
        <span
          className={`absolute top-5 right-5 z-20 transition-all duration-200 ${
            large
              ? "opacity-0 group-hover:opacity-100 bg-[#CBA240] text-[#183852] px-4 py-1 rounded-full text-xs font-bold shadow-md"
              : "hidden"
          }`}
        >
          Leer nota
        </span>
      </Link>
    </motion.div>
  );
}

export default function Ourblog() {
  return (
    <section
      id="ourblog"
      className="w-full py-12 px-2 md:px-0 bg-gradient-to-b from-[#B0B9C2] via-[#e6e8ea] to-[#B0B9C2] flex flex-col items-center"
    >
      <motion.h2
        className="text-[#183852] text-2xl md:text-3xl font-merriweather font-bold text-center mb-10 tracking-tight"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Conocé nuestro blog
      </motion.h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left big card */}
        <BlogCard post={blogPosts[0]} custom={0} large />
        {/* Top right card */}
        <BlogCard post={blogPosts[1]} custom={1} />
        {/* Bottom right card */}
        <BlogCard post={blogPosts[2]} custom={2} />
      </div>
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>
    </section>
  );
}
