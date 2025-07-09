import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import ReclamoLaboral from "./components/ReclamoLaboral";
import BanneCTALaboral from "./components/BanneCTALaboral";
import ListLaboral from "./components/ListLaboral";
import Stats from "../../ui/Stats";
import FAQHome from "../../components/FAQHome";
import { faqDL } from "../../mock/faqDL";
import Breadcrumbs from "../../components/Breadcrumbs";
import SchemaMarkup from "../../components/SchemaMarkup";

export const metadata = {
  title: "Especialistas en derecho laboral en Buenos Aires Capital Federal",
  description: "Especialistas en derecho laboral en Buenos Aires Capital. Asesoramos en despidos, indemnizaciones, acoso laboral, trabajo en negro y todo tipo de conflictos laborales. Más de 30 años de experiencia defendiendo los derechos de trabajadores y empresas en la Ciudad Autónoma de Buenos Aires.",
  keywords: [
    "derecho laboral",
    "abogados laborales",
    "despidos",
    "indemnizaciones",
    "acoso laboral",
    "Buenos Aires Capital",
    "trabajo en negro",
    "conflictos laborales"
  ],
  openGraph: {
    title: "Especialistas en derecho laboral en Buenos Aires Capital Federal",
    description: "Especialistas en derecho laboral en Buenos Aires Capital. Asesoramos en despidos, indemnizaciones, acoso laboral, trabajo en negro y todo tipo de conflictos laborales. Más de 30 años de experiencia defendiendo los derechos de trabajadores y empresas en la Ciudad Autónoma de Buenos Aires.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-laboral',
    type: 'article',
  },
  twitter: {
    title: "Especialistas en derecho laboral en Buenos Aires Capital Federal",
    description: "Especialistas en derecho laboral en Buenos Aires Capital. Asesoramos en despidos, indemnizaciones, acoso laboral, trabajo en negro y todo tipo de conflictos laborales. Más de 30 años de experiencia defendiendo los derechos de trabajadores y empresas en la Ciudad Autónoma de Buenos Aires.",
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
            'name': 'Especialistas en derecho laboral en Buenos Aires Capital Federal',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-laboral'
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDL.map(faq => ({
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

export default function DerechoLaboral() {
  // Schemas para la página de derecho laboral
  const laboralSchemas = [
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
          'name': 'Especialistas en derecho laboral en Buenos Aires Capital Federal',
          'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-laboral'
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Derecho Laboral - Estudio López & Gómez",
      "description": "Especialistas en derecho laboral en Buenos Aires Capital. Asesoramos en despidos, indemnizaciones, acoso laboral, trabajo en negro y todo tipo de conflictos laborales.",
      "url": "https://www.estudiodeabogadosgomezlopez.com.ar/servicios/derecho-laboral",
      "provider": {
        "@type": "Organization",
        "name": "Estudio López & Gómez",
        "url": "https://www.estudiodeabogadosgomezlopez.com.ar"
      },
      "areaServed": {
        "@type": "City",
        "name": "Buenos Aires"
      },
      "serviceType": "Derecho Laboral",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Derecho Laboral",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Despidos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Indemnizaciones"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acoso Laboral"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Trabajo en Negro"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conflictos Laborales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Reclamos Laborales"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqDL.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div>
      <SchemaMarkup schemas={laboralSchemas} />
      <HeroServices 
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-derecho-laboral-en-buenos-aires.webp"
        alt=" Especialistas en derecho laboral que defienden tus derechos"
        title=" Especialistas en derecho laboral que defienden tus derechos"
        description={<>
          En nuestro estudio jurídico somos especialistas en derecho laboral. Representamos a trabajadores y empresas con más de 30 años de experiencia en conflictos laborales. 
          Si sufriste un despido injustificado, estás en un contexto de trabajo en negro o necesitás asesoría para evitar juicios, estamos acá para ayudarte.
        </>}
      />  
      <Breadcrumbs />
      <ReclamoLaboral />
      <BanneCTALaboral  title="¿Cómo iniciar un reclamo laboral?" description="Los reclamos laborales se inician ante la SECLO (Servicio de Conciliación Laboral Obligatoria). Esta instancia permite llegar a un acuerdo previo al inicio de un juicio, con la posibilidad de resolver el conflicto de manera ágil y sin desgaste. Si no se logra un acuerdo, te asesoramos para continuar con la demanda laboral de forma segura y eficiente."/>
      <ListLaboral />
      <Stats />
      <BannerProduct />
      <Ourblog />
      <FAQHome faqs={faqDL} />
    </div>
  );
} 