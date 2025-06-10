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

export const metadata = {
  title: "Derecho Laboral",
  description: "Especialistas en derecho laboral, asesorando en despidos, indemnizaciones, acoso laboral y conflictos laborales.",
  keywords: ["derecho laboral", "abogados laborales", "despidos", "indemnizaciones", "acoso laboral"],
  openGraph: {
    title: "Derecho Laboral | Estudio López & Gómez",
    description: "Especialistas en derecho laboral, asesorando en despidos, indemnizaciones, acoso laboral y conflictos laborales.",
    url: 'https://estudiolopezgomez.com/servicios/derecho-laboral',
    type: 'article',
  },
  twitter: {
    title: "Derecho Laboral | Estudio López & Gómez",
    description: "Especialistas en derecho laboral, asesorando en despidos, indemnizaciones, acoso laboral y conflictos laborales.",
  },
  other: {
    'application/ld+json': {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Inicio',
          'item': 'https://estudiolopezgomez.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Servicios',
          'item': 'https://estudiolopezgomez.com/servicios'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Derecho Laboral',
          'item': 'https://estudiolopezgomez.com/servicios/derecho-laboral'
        }
      ]
    }
  }
}; 

export default function DerechoLaboral() {
  return (
    <div>
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