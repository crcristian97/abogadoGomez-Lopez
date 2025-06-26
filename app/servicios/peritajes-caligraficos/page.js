import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import StatsService from "./components/StatsService"; 
import BanneCTALaboral from "../derecho-laboral/components/BanneCTALaboral";
import WeDo from "./components/WeDo";
import WhoDo from "./components/WhoDo";
import HowWeDo from "./components/HowWeDo";
import Stats from "../../ui/Stats";
import FAQHome from "../../components/FAQHome"; 
import { analyses } from "../../mock/analysesPericia";  
import { caseSolicities } from "../../mock/caseSolicities";
import { faqPC } from "../../mock/faqPC";
import Breadcrumbs from "../../components/Breadcrumbs";


export const metadata = {
  title: "Pericias Caligráficas en la Ciudad de Buenos Aires",
  description: "Servicio profesional de pericias caligráficas con validez judicial en la Ciudad de Buenos Aires. Análisis técnico de firmas y documentos manuscritos para casos legales.",
  keywords: ["pericias caligráficas", "peritaje caligráfico", "análisis de firmas", "documentos manuscritos", "validez judicial", "ciudad de buenos aires"],
  openGraph: {
    title: "Pericias Caligráficas en la Ciudad de Buenos Aires",
    description: "Servicio profesional de pericias caligráficas con validez judicial en la Ciudad de Buenos Aires. Análisis técnico de firmas y documentos manuscritos para casos legales.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/peritajes-caligraficos',
    type: 'article',
  },
  twitter: {
    title: "Pericias Caligráficas en la Ciudad de Buenos Aires",
    description: "Servicio profesional de pericias caligráficas con validez judicial en la Ciudad de Buenos Aires. Análisis técnico de firmas y documentos manuscritos para casos legales.",
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
            'name': 'Pericias Caligráficas en la Ciudad de Buenos Aires',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/servicios/peritajes-caligraficos'
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqPC.map(faq => ({
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

export default function PeritajesCaligraficos() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/pericias-caligraficas-abogados-en-buenos-aires.webp"
        alt="Peritajes Caligráficos en Buenos Aires"
        title="Pericias caligráficas profesionales con validez judicial"
        description={<>
        Ofrecemos pericias caligráficas confiables para causas judiciales y asesorías privadas. 
Determinamos la autenticidad de firmas y documentos con rigor técnico y experiencia avalada por años de trabajo y formación especializada.

        </>}
      />
      <Breadcrumbs />
      <StatsService />
      <BanneCTALaboral 
        title='¿Qué es una pericia caligráfica?' 
        description='Una pericia caligráfica es un análisis técnico que determina la autenticidad de una firma o documento escrito a mano. Se utiliza en casos de sucesiones, contratos, escritos de testamento, escritos de divorcio, escritos de poderes, entre otros. La pericia caligráfica es un servicio que se ofrece en el estudio jurídico de la firma de abogados en Buenos Aires.'
      />
      <WeDo items={analyses} />
      <WhoDo />
      <HowWeDo />
      <Stats />  
      <WeDo heading="¿Para qué casos se solicitan?" items={caseSolicities} />
      <BannerProduct />
      <Ourblog />
      <FAQHome faqs={faqPC} /> 
    </div>
  );
} 