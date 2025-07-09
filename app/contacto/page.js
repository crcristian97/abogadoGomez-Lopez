import ContactMap from "../components/ContactMap";
import Contact from "../components/Contact";
import Breadcrumbs from "../components/Breadcrumbs";
import SchemaMarkup from "../components/SchemaMarkup";

export const metadata = {
  title: "Contacto",
  description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
  openGraph: {
    title: "Contacto | Estudio López & Gómez",
    description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/contacto',
  },
  twitter: {
    title: "Contacto | Estudio López & Gómez",
    description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
  },
};

export default function Contacto() {
  // Schemas para la página de contacto
  const contactSchemas = [
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
          'name': 'Contacto',
          'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/contacto'
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto - Estudio López & Gómez",
      "description": "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
      "url": "https://www.estudiodeabogadosgomezlopez.com.ar/contacto",
      "mainEntity": {
        "@type": "Organization",
        "name": "Estudio López & Gómez",
        "url": "https://www.estudiodeabogadosgomezlopez.com.ar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.estudiodeabogadosgomezlopez.com.ar/logo.png"
        },
        "description": "Estudio jurídico especializado en derecho penal y civil en Buenos Aires Capital Federal. Más de 30 años de experiencia defendiendo los derechos de nuestros clientes.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Carlos Pellegrini 465, Piso 9°, Oficina 71",
          "addressLocality": "Buenos Aires",
          "addressRegion": "CABA",
          "postalCode": "C1009",
          "addressCountry": "AR"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+5491154645620",
            "availableLanguage": "Spanish",
            "areaServed": "AR"
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+5491161280168",
            "availableLanguage": "Spanish",
            "areaServed": "AR"
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.602891443771604,
          "longitude": -58.380898389976615
        },
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
        ]
      }
    }
  ];

  return (
    <div>
      <SchemaMarkup schemas={contactSchemas} />
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-[#CBA240] mb-14 text-center mt-10">Nuestro estudio jurídico en Buenos Aires a su disposición</h1>
      <Contact />
      <ContactMap />
    </div>
  );
}   