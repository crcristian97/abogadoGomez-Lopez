import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const BlogPost = ({ 
  title,
  introduction,
  pregunta1,
  respuesta1,
  lista1,
  blockquote,
  titleText1,
  text1,
  text1lista1,
  content,
  image,
  author,
  date,
  category,
  readingTime,
  slug
}) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Meta Information */}
      <div className="flex items-center gap-4 mb-6">
        <span className="px-3 py-1 bg-[#cba240] text-white rounded-full text-sm">
          {category}
        </span>
        <span className="text-gray-600">{date}</span>
        <span className="text-gray-600">{readingTime} min read</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-[#183852] mb-6">
        {title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-[#cba240] flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[#183852]">{author}</p>
          <p className="text-sm text-gray-600">Abogado Especialista</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-[#183852] mb-4">
          Introducción
        </h2>
        <p className="mb-6 text-[#183852] ">
          {introduction}
        </p>

        <h2 className="text-2xl font-bold text-[#183852] mb-4">
          {pregunta1}
        </h2>
        <p className="mb-6 text-[#183852]">
          {respuesta1}
        </p>

        <ol className="list-decimal pl-6 mb-6">
          {lista1.map((item, index) => (
            <li key={index} className="text-[#183852]">{item}</li>
          ))}
        </ol>

        <blockquote className="border-l-4 border-[#cba240] pl-4 py-2 my-6 italic">
          <p className="text-[#183852]">
            {blockquote}
          </p>
        </blockquote>

        <h2 className="text-2xl font-bold text-[#183852] mb-4">
          {titleText1}
        </h2>
        <p className="mb-4 text-[#183852]">
          {text1}
        </p>
        <ul className="list-disc pl-6 mb-6">
          {text1lista1.map((item, index) => (
            <li key={index} className="text-[#183852]">{item}</li>
          ))}
        </ul>

      
        <h2 className="text-2xl font-bold text-[#183852] mb-4">
          {introduction}
        </h2>

        {content}

        {/* CTA Banner */}
        <div className="bg-[#183852] text-white p-8 rounded-xl my-8">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas asesoramiento legal?</h3>
          <p className="mb-6">Nuestro equipo de abogados especialistas está listo para ayudarte con tu caso.</p>
          <Link 
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#cba240] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b38f36] transition-colors"
          >
            Consulta Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 