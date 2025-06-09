"use client";

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