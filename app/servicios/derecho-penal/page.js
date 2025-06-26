import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import Team from "../../sobre-la-firma/components/Team";
import Service from "./components/Service";
import BenefitsSevices from "./components/BenefitsSevices";
import InfoService from "./components/InfoService";
import Stats from "../../ui/Stats";
import FAQHome from "../../components/FAQHome";
import { faqsDP } from "../../mock/faqsDP";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Derecho Penal en la Ciudad de Buenos Aires",
  description: "Especialistas en derecho penal con amplia experiencia en defensa criminal, asesoramiento legal y representación en juicios penales.",
  keywords: ["derecho penal", "abogados penales", "defensa criminal", "juicios penales", "asesoramiento legal penal"],
  openGraph: {
    title: "Derecho Penal en la Ciudad de Buenos Aires",
    description: "Especialistas en derecho penal con amplia experiencia en defensa criminal, asesoramiento legal y representación en juicios penales.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-penal',
    type: 'article',
  },
  twitter: {
    title: "Derecho Penal en la Ciudad de Buenos Aires",
    description: "Especialistas en derecho penal con amplia experiencia en defensa criminal, asesoramiento legal y representación en juicios penales.",
  },
  other: {
    'application/ld+json': [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Servicios',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Derecho Penal en la Ciudad de Buenos Aires',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-penal'
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsDP.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }
};

export default function DerechoPenal() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/asesoria-derecho-penal-en-buenos-aires.webp"
        alt="Derecho Penal en Buenos Aires"
        title="Asesoría en Derecho Penal – Defensa Técnica"
        description="Defensa penal técnica y comprometida con más de 30 años de experiencia. Protegemos tus derechos en todas las instancias del proceso penal."
      />
      <Breadcrumbs />
      <Team
        image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-penal-en-buenos-aires.webp"
        title="Abogado penal urgente en la Ciudad Autónoma de Buenos Aires"
        buttonLink="https://wa.me/5491154645620?text=Hola, quiero asesoramiento legal"
        buttonText="Quiero hablar con un abogado"
        description={
          <>
            En nuestro estudio jurídico brindamos{" "}
            <span className="font-bold text-[#CBA240]">defensa penal técnica y comprometida</span> en todas las instancias del proceso penal. <br />
            Contamos con <span className="font-bold text-[#CBA240]">más de 30 años de experiencia</span> en la representación de imputados y víctimas en causas penales tanto en el fuero ordinario como en el fuero federal.<br />
            Nuestro compromiso es acompañarte en cada etapa del procedimiento, ofreciendo{" "}
            <span className="font-bold text-[#CBA240]">asesoría personalizada</span> y estrategias legales efectivas para defender tus derechos y garantizar un proceso justo. Nos destacamos por la{" "}
            <span className="font-bold text-[#CBA240]">ética profesional</span>, la{" "}
            <span className="font-bold text-[#CBA240]">confidencialidad</span> y la{" "}
            <span className="font-bold text-[#CBA240]">actualización constante en legislación penal</span>.
          </>
        }
        imagePosition="right"
        rounder={false}
      />
      <Service />
      <BenefitsSevices />
      <InfoService />
      <Stats />
      <BannerProduct />
      <Ourblog />
      <FAQHome faqs={faqsDP} />
    </div>
  );
}