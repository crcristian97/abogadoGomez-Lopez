import HeroSection from "../components/HeroSection";
import SobreFirma from "./components/SobreFirma";
import Team from "./components/Team";
import BannerProduct from "../components/BannerProduct";
import Ourblog from "../components/Ourblog";  
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Estudio jurídico en Buenos Aires, Capital Federal",
  description: "Conozca nuestro estudio jurídico en Buenos Aires, Capital Federal: nuestra historia, valores y el equipo de abogados especialistas en derecho penal y civil en CABA.",
  keywords: [
    "estudio jurídico Buenos Aires",
    "abogados en Capital Federal",
    "abogados penalistas CABA",
    "abogados civilistas Buenos Aires",
    "estudio jurídico en CABA",
    "abogados derecho penal capital federal",
    "abogados derecho civil capital federal"
  ],
  openGraph: {
    title: "Estudio jurídico en Buenos Aires, Capital Federal",
    description: "Conozca nuestro estudio jurídico en Buenos Aires, Capital Federal: nuestra historia, valores y el equipo de abogados especialistas en derecho penal y civil en CABA.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/sobre-la-firma',
  },
  twitter: {
    title: "Estudio jurídico en Buenos Aires, Capital Federal",
    description: "Conozca nuestro estudio jurídico en Buenos Aires, Capital Federal: nuestra historia, valores y el equipo de abogados especialistas en derecho penal y civil en CABA.",
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
            'name': 'Sobre la Firma',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/sobre-la-firma'
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Dr. José Luis López",
          "jobTitle": "Abogado Penalista y Civilista",
          "description": "Abogado egresado de la Universidad de Buenos Aires (UBA), en ejercicio desde 1991, con más de tres décadas de experiencia en Derecho Penal y Civil en la Ciudad Autónoma de Buenos Aires (CABA).",
          "image": "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-en-buenos-aires-jose-luis-lopez.jpg",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidad de Buenos Aires",
            "department": "Facultad de Derecho y Ciencias Sociales"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Estudio Gómez & López "
          },
          "telephone": "+5491154645620",
          "url": "https://www.estudiodeabogadosgomezlopez.com.ar/sobre-la-firma"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Dra. Estefanía Gómez",
          "jobTitle": "Abogada y Calígrafo Público Nacional",
          "description": "Abogada especializada en Derecho Sucesorio, Civil y Penal, con matrícula federal y egresada en 2019. Calígrafo Público Nacional en ejercicio desde 2014.",
          "image": "https://res.cloudinary.com/dgzi8i2ji/image/upload/abogada-especialista-caligrafia-derecho.webp",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidad de Buenos Aires",
            "department": "Facultad de Derecho"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Estudio Gómez & López"
          },
          "telephone": "+5491161280168",
          "url": "https://www.estudiodeabogadosgomezlopez.com.ar/sobre-la-firma"
        }
      }
    ]
  }
}; 

export default function SobreLaFirma() {
  return (
    <div>
        <HeroSection
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/sobre-el-estudio-juridico-en-buenos-aires.webp"
            alt="Sobre el estudio jurídico en Buenos Aires, Capital Federal"
            title="Sobre la firma de abogados en Buenos Aires, Capital Federal"
        />
        <Breadcrumbs />
        <SobreFirma />
        <Team 
            image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-en-buenos-aires-jose-luis-lopez.jpg"
            title="Dr. José Luis López"
            description="Abogado egresado de la Universidad de Buenos Aires (UBA), en ejercicio desde 1991, con más de tres décadas de experiencia en Derecho Penal y Civil en la Ciudad Autónoma de Buenos Aires (CABA).
Está matriculado en el Colegio Público de la Abogacía de la Capital Federal, con Matrícula Federal activa.
Se ha desempeñado como docente universitario en la Facultad de Derecho y Ciencias Sociales de la UBA, aportando su conocimiento a las nuevas generaciones de abogados.
Su enfoque ético, compromiso con el cliente y profundo conocimiento en materia Penal y Civil lo posicionan como un referente en la profesión en Buenos Aires, Capital Federal."
            buttonText="Hablar con el Dr. José Luis López"
            imagePosition="right"
            rounder={true}
            number="5491154645620"
        />
        <Team 
            image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogada-especialista-caligrafia-derecho.webp"
            title="Dra. Estefanía Gómez"
            description="Abogada especializada en Derecho Sucesorio, Civil y Penal, con matrícula federal y egresada en 2019. Desde entonces, ejerce la profesión con compromiso y formación continua en la Ciudad Autónoma de Buenos Aires (CABA).
Además, es Calígrafo Público Nacional en ejercicio desde 2014, matriculada en el Colegio de Calígrafos Públicos de la Ciudad de Buenos Aires (CPCBA) y en la Suprema Corte de Justicia de la Provincia de Buenos Aires (SCJBA).
Actualmente, se desempeña como Secretaria del Colegio de Calígrafos de la Ciudad de Buenos Aires y como docente universitaria. También forma parte activa del Colegio Público de la Abogacía de la Capital Federal, con matrícula federal vigente."
            buttonText="Hablar con la Dra. Estefanía Gómez"
            imagePosition="right"
            rounder={true}
            number="5491154645620"
        />
        <BannerProduct />
        <Ourblog />
    </div>
  );
} 