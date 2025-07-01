"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuthorBox from "./AuthorBox";

const BlogPost = ({ 
  title,
  introduction,
  pregunta1,
  respuesta1,
  lista1 = [],
  blockquote,
  titleText1,
  text1,
  text1lista1 = [],
  content,
  image,
  author,
  date,
  category,
  readingTime,
  slug,
  imageAuthor
}) => {
  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate table of contents items
  const tocItems = [
    { id: 'introduccion', title: 'Introducción', show: !!introduction },
    { id: 'pregunta1', title: pregunta1, show: !!pregunta1 },
    { id: 'titleText1', title: titleText1, show: !!titleText1 },
    { id: 'content', title: 'Contenido Principal', show: !!content }
  ].filter(item => item.show);

  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Main Content */}
      <article className="flex-1 max-w-4xl">
        {/* Introducción */}
        <h1 className="text-4xl font-bold text-[#183852] mb-6">
          {title}
        </h1>

        {introduction && (
          <>
           
            <p id="introduccion" className="mb-6 text-[#183852]">
              {introduction}
            </p>
          </>
        )}

        <div className="flex items-center gap-4 mb-2">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#cba240] text-white rounded-full text-xs sm:text-sm whitespace-nowrap">
            {category}
          </span>
          <span className="text-gray-600">{date}</span>
          <span className="text-gray-600">{readingTime} min read</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold">
            {author?.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-[#183852]">{author}</p>
            <p className="text-sm text-gray-600">Abogados Especialistas</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#183852] opacity-65 z-10 pointer-events-none" />
          <Image
            src={image}
            alt={title}
            width={1200}
            height={630}
            className="object-cover opacity-70 z-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw "
            priority={false}
            title={title}
          />
        </div>
        <div className="prose prose-lg max-w-none">
          {pregunta1 && (
            <>
              <h2 id="pregunta1" className="text-2xl font-bold text-[#183852] mb-4">
                {pregunta1}
              </h2>
              <p className="mb-6 text-[#183852]">
                {respuesta1}
              </p>
            </>
          )}

          {lista1 && lista1.length > 0 && (
            <ol className="list-decimal pl-6 mb-6">
              {lista1.map((item, index) => (
                <li key={index} className="text-[#183852]">{item}</li>
              ))}
            </ol>
          )}

          {blockquote && (
            <blockquote className="border-l-4 border-[#cba240] pl-4 py-2 my-6 italic">
              <p className="text-[#183852]">
                {blockquote}
              </p>
            </blockquote>
          )}

          {titleText1 && (
            <>
              <h2 id="titleText1" className="text-sm font-bold text-[#183852] mb-3">
                {titleText1}
              </h2>
              <p className="mb-3 text-sm text-[#183852]">
                {text1}
              </p>
            </>
          )}

          {text1lista1 && text1lista1.length > 0 && (
            <ul className="list-disc pl-6 mb-6">
              {text1lista1.map((item, index) => (
                <li key={index} className="text-[#183852]">{item}</li>
              ))}
            </ul>
          )}

          {content && (
            <div id="content" className="mt-8">
              {content}
            </div>
          )}

          {/* CTA Banner */}
          <div className="bg-[#183852] text-white p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoramiento legal?</h3>
            <p className="mb-6">Nuestro equipo de abogados especialistas está listo para ayudarte con tu caso.</p>
            <Link 
              href={`https://wa.me/5491154645620?text=${encodeURIComponent('Hola, me comunico porque quisiera asesoramiento legal')}`}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#cba240] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b38f36] transition-colors"
            >
              Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Author Box */}
          <AuthorBox
            image={imageAuthor || "/avatar-placeholder.png"}
            name={author || "Autor/a"}
            description={
              author === "Dr. José Luis López"
                ? "Abogado egresado de la Universidad de Buenos Aires (UBA), en ejercicio desde 1991, con más de tres décadas de experiencia en Derecho Penal y Civil en la Ciudad Autónoma de Buenos Aires (CABA). Está matriculado en el Colegio Público de la Abogacía de la Capital Federal, con Matrícula Federal activa. Se ha desempeñado como docente universitario en la Facultad de Derecho y Ciencias Sociales de la UBA, aportando su conocimiento a las nuevas generaciones de abogados. Su enfoque ético, compromiso con el cliente y profundo conocimiento en materia Penal y Civil lo posicionan como un referente en la profesión en Buenos Aires, Capital Federal."
                : author === "Dra. Estefanía Gómez"
                ? "Abogada especializada en Derecho Sucesorio, Civil y Penal, con matrícula federal y egresada en 2019. Desde entonces, ejerce la profesión con compromiso y formación continua en la Ciudad Autónoma de Buenos Aires (CABA). Además, es Calígrafo Público Nacional en ejercicio desde 2014, matriculada en el Colegio de Calígrafos Públicos de la Ciudad de Buenos Aires (CPCBA) y en la Suprema Corte de Justicia de la Provincia de Buenos Aires (SCJBA). Actualmente, se desempeña como Secretaria del Colegio de Calígrafos de la Ciudad de Buenos Aires y como docente universitaria. También forma parte activa del Colegio Público de la Abogacía de la Capital Federal, con matrícula federal vigente.."
                : "Abogado/a especialista en la materia, parte del equipo de Estudio López Gómez."
            }
          />
        </div>
      </article>

      {/* Table of Contents */}
      <div className="hidden lg:block w-72">
        <div className="sticky top-8">
          <div className="bg-gradient-to-br from-[#f7f5ef] via-[#f9f6f1] to-[#e9e3d0] rounded-2xl shadow-lg p-7 border border-[#e5d7b8]">
            <h3 className="text-xl font-extrabold text-[#183852] mb-5 tracking-tight flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-[#cba240] rounded-sm mr-2"></span>
              Contenido
            </h3>
            <nav>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="group text-[#183852] hover:text-[#cba240] text-left w-full transition-colors font-medium px-3 py-2 rounded-lg hover:bg-[#f7f0d8] focus:outline-none focus:ring-2 focus:ring-[#cba240] flex items-center gap-2"
                    >
                      <span className="inline-block w-2 h-2 bg-[#cba240] rounded-full group-hover:scale-125 transition-transform"></span>
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 