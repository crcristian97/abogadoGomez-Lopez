import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import HowWork from "./components/HowWork";
import Testimonials from "./components/Testimonials";
import BannerCTA from "./components/BannerCTA";
import Contact from "./components/Contact";
import ContactMap from "./components/ContactMap";
import Ourblog from "./components/Ourblog";
import FAQHome from "./components/FAQHome";
import BannerProduct from "./components/BannerProduct";
import SchemaMarkup from "./components/SchemaMarkup";
import { faqs } from "./mock/faqs";

export const metadata = {
  title: "Estudio López & Gómez - Abogados en Buenos Aires Capital Federal",
  description: "Estudio jurídico especializado en derecho penal y civil en Buenos Aires Capital Federal. Más de 30 años de experiencia defendiendo los derechos de nuestros clientes.",
  other: {
    'application/ld+json': [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Estudio Gómez & López - Abogados en Buenos Aires", 
        "speakable": {
          "@type": "SpeakableSpecification",
          "xPath": [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content",
            "//div[contains(@class, 'HeroSection')]//h1",
            "//div[contains(@class, 'HeroSection')]//p"
          ]
        },
        "url": "https://www.estudiodeabogadosgomezlopez.com.ar/"  //cambiar
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.estudiodeabogadosgomezlopez.com.ar/",  //cambiar
        "logo": "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp",  //cambiar
        "name": "Estudio Gómez & López",
        "description": "Estudio jurídico especializado en derecho penal y civil en Buenos Aires Capital Federal. Más de 30 años de experiencia defendiendo los derechos de nuestros clientes.",
        "email": "jllopez!269@gmail.com", 
        "telephone": "+5491154645620",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Carlos Pellegrini 465, Piso 9°, Oficina 71",
          "addressLocality": "Buenos Aires",
          "addressRegion": "CABA",
          "postalCode": "C1009",
          "addressCountry": "AR"
        },
        "vatID": "AR-30-12345678-9", //cambiar
        "iso6523Code": "0199:724500PMK2A2M1SQQ228"
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "image": [
          "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
        ],
        "name": "Estudio Gómez & López",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Carlos Pellegrini 465, Piso 9°, Oficina 71",
          "addressLocality": "Buenos Aires",
          "addressRegion": "CABA",
          "postalCode": "C1009",
          "addressCountry": "AR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.602891443771604,
          "longitude": -58.380898389976615
        },
        "url": "https://www.estudiodeabogadosgomezlopez.com.ar/", //cambiar
        "telephone": "+5491154645620",
        "priceRange": "$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "areaServed": {
          "@type": "City",
          "name": "Buenos Aires"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios Jurídicos",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Derecho Penal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Derecho Civil"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Derecho Laboral"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Peritajes Caligráficos"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 5,
          "bestRating": 5,
          "worstRating": 1,
          "ratingCount": 127,
          "reviewCount": 127
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": "Margaryta Gatchenko"
            },
            "datePublished": "2025-06-10",
            "reviewBody": "Resolví mi caso con ellos y, además, me brindaron tranquilidad en un momento muy estresante. Son serios, responsables y muy eficientes. Gracias por hacer simple lo que me parecía difícil."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": "Blas Amado Báez"
            },
            "datePublished": "2025-06-10",
            "reviewBody": "Agradezco profundamente la dedicación y profesionalismo del Dr. José Luis López y a su equipo durante mi caso con resultado exitoso. Recomendado su servicio."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": "Nancy Brazil"
            },
            "datePublished": "2025-06-10",
            "reviewBody": "Agradezco su profesionalismo, el cual me brindo tranquilidad y confianza. Su equipo demostró un gran compromiso."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": "Laura Farrán"
            },
            "datePublished": "2025-06-10",
            "reviewBody": "No encuentro palabras para expresar lo agradecida que estoy con este equipo de profesionales, que lucharon conmigo desde el momento cero para que la Obra Social se hiciera cargo de un tratamiento médico súper costoso. Además de lograrlo, sentando un precedente, hicieron suyas cada palabra y sentimientos que me atravesaban en ese momento. Gracias por defender mis derechos con tanta humanidad y convicción!."
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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

export default function Home() {
  // Schemas para la página principal
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Estudio Gómez & López - Abogados en Buenos Aires", 
      "speakable": {
        "@type": "SpeakableSpecification",
        "xPath": [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content",
          "//div[contains(@class, 'HeroSection')]//h1",
          "//div[contains(@class, 'HeroSection')]//p"
        ]
      },
      "url": "https://www.estudiodeabogadosgomezlopez.com.ar/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.estudiodeabogadosgomezlopez.com.ar/",
      "logo": "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp",
      "name": "Estudio Gómez & López",
      "description": "Estudio jurídico especializado en derecho penal y civil en Buenos Aires Capital Federal. Más de 30 años de experiencia defendiendo los derechos de nuestros clientes.",
      "email": "jllopez!269@gmail.com", 
      "telephone": "+5491154645620",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Carlos Pellegrini 465, Piso 9°, Oficina 71",
        "addressLocality": "Buenos Aires",
        "addressRegion": "CABA",
        "postalCode": "C1009",
        "addressCountry": "AR"
      },
      "vatID": "AR-30-12345678-9",
      "iso6523Code": "0199:724500PMK2A2M1SQQ228"
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "image": [
        "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
      ],
      "name": "Estudio Gómez & López",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Carlos Pellegrini 465, Piso 9°, Oficina 71",
        "addressLocality": "Buenos Aires",
        "addressRegion": "CABA",
        "postalCode": "C1009",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.602891443771604,
        "longitude": -58.380898389976615
      },
      "url": "https://www.estudiodeabogadosgomezlopez.com.ar/",
      "telephone": "+5491154645620",
      "priceRange": "$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Buenos Aires"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Jurídicos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Derecho Penal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Derecho Civil"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Derecho Laboral"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Peritajes Caligráficos"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1,
        "ratingCount": 127,
        "reviewCount": 127
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": "Margaryta Gatchenko"
          },
          "datePublished": "2025-06-10",
          "reviewBody": "Resolví mi caso con ellos y, además, me brindaron tranquilidad en un momento muy estresante. Son serios, responsables y muy eficientes. Gracias por hacer simple lo que me parecía difícil."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": "Blas Amado Báez"
          },
          "datePublished": "2025-06-10",
          "reviewBody": "Agradezco profundamente la dedicación y profesionalismo del Dr. José Luis López y a su equipo durante mi caso con resultado exitoso. Recomendado su servicio."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": "Nancy Brazil"
          },
          "datePublished": "2025-06-10",
          "reviewBody": "Agradezco su profesionalismo, el cual me brindo tranquilidad y confianza. Su equipo demostró un gran compromiso."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": "Laura Farrán"
          },
          "datePublished": "2025-06-10",
          "reviewBody": "No encuentro palabras para expresar lo agradecida que estoy con este equipo de profesionales, que lucharon conmigo desde el momento cero para que la Obra Social se hiciera cargo de un tratamiento médico súper costoso. Además de lograrlo, sentando un precedente, hicieron suyas cada palabra y sentimientos que me atravesaban en ese momento. Gracias por defender mis derechos con tanta humanidad y convicción!."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
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
      <SchemaMarkup schemas={homeSchemas} />
      <HeroSection
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
        alt="Abogados especialistas en temas Penales y Civiles"
        title="Abogados especialistas en temas Penales y Civiles"
        subtitle="Brindamos un asesoramiento personalizado para cada necesidad."
      />
     
      <AboutUs />
      <WhatWeDo />
      <HowWork />
      <Testimonials />
      <BannerCTA />
      <Contact />
      <ContactMap />
      <Ourblog />
      <BannerProduct />
      <FAQHome faqs={faqs} />
    </div>
  );
}
