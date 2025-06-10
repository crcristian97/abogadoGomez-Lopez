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
import { faqs } from "./mock/faqs";

export const metadata = {
  title: "Estudio López & Gómez - Abogados en Buenos Aires Capital Federal",
  description: "Estudio jurídico especializado en derecho penal y civil en Buenos Aires Capital Federal. Más de 30 años de experiencia defendiendo los derechos de nuestros clientes.",
  other: {
    'application/ld+json': [
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "image": [
          "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
        ],
        "name": "Estudio López & Gómez",
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
        "url": "https://estudiolopezgomez.com",
        "telephone": "+5491161280168",
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
        }
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
  return (
    <div>
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
