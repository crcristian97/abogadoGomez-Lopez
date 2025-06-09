"use client";

import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import Team from "../../sobre-la-firma/components/Team";
import BeneftisDC from "./components/BeneftisDC";
import { benefitsOne, benefitsTwo, benefitsThree } from "../../mock/BenefitsDCOne";
import Stats from "../../ui/Stats";
import FAQHome from "../../components/FAQHome";
import { faqDC } from "../../mock/faqDC";
import { handleClickWhatsApp } from "../../utils/WhatsApp";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function DerechoCivil() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-civil-en-buenos-aires.webp"
        alt="Asesoría en Derecho Civil – Amparos, Familia y Sucesiones – Responsabilidad Civil. "
        title="Asesoría en Derecho Civil – Amparos, Familia y Sucesiones – Responsabilidad Civil. "
        description={<>Asesoría legal en Derecho Civil en Ciudad Autónoma de Buenos Aires y Provincia. Especialistas en sucesiones, divorcios, amparos y contratos. </>}
      />
      <Breadcrumbs />
      <Team
        image="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749392575/buenos-aires-derecho-civil.webp"
        title="Sobre el derecho civil"
        buttonLink="https://wa.me/5491161280168?text=Hola, quiero asesoramiento legal"
        buttonText="Quiero hablar con un abogado"
        onButtonClick={() => handleClickWhatsApp('Hola, quiero asesoramiento legal')}
        description={
          <>
           En nuestro estudio jurídico ubicado en Ciudad Autónoma de Buenos Aires y la provincia de Buenos Aires, ofrecemos <span className="font-bold text-[#CBA240]">asesoramiento integral en Derecho Civil</span>, con una atención personalizada y eficiente. Nuestra trayectoria y experiencia nos permiten brindar <span className="font-bold text-[#CBA240]">soluciones jurídicas claras y efectivas</span> para proteger tus derechos y defender tus intereses en una amplia variedad de situaciones legales civiles.
Nos especializamos en causas relacionadas con <span className="font-bold text-[#CBA240]">sucesiones, divorcios, contratos, amparos, daños y perjuicios, y responsabilidad civil</span>. Trabajamos con <span className="font-bold text-[#CBA240]">profesionalismo y compromiso</span> para lograr la mejor resolución para nuestros clientes, tanto en procesos judiciales como en gestiones extrajudiciales.

          </>
        }
        imagePosition="left"
        rounder={false}
      />
      <BeneftisDC  />
      <BeneftisDC  
        heading="Sucesiones: tramitamos tu herencia con profesionalismo"
        intro="Gestionamos sucesiones testamentarias e intestadas en la Ciudad y Provincia de Buenos Aires, incluyendo casos con herederos domiciliados en el extranjero. Nuestros servicios incluyen:"
        benefits={benefitsOne}
        outro="Nuestro objetivo es que el proceso sucesorio se desarrolle de forma ordenada, transparente y sin complicaciones innecesarias."
      />
      <BeneftisDC  
        heading="Derecho de familia y divorcios: acompañamiento en procesos delicados"
        intro="Sabemos que las cuestiones familiares requieren sensibilidad y profesionalismo. Brindamos asesoramiento y representación en:"
        benefits={benefitsTwo}
        outro="Buscamos soluciones que prioricen el bienestar de las familias y fomenten acuerdos duraderos, evitando litigios prolongados y desgastantes."
      />
      <BeneftisDC  
        heading="Contratos y responsabilidad civil: seguridad y defensa en tus relaciones jurídicas"
        intro="Ofrecemos la redacción, revisión y asesoramiento integral en contratos civiles y comerciales para proteger tus intereses. Además, gestionamos reclamos y acciones por daños y perjuicios, tanto de forma extrajudicial como judicial, incluyendo:"
        benefits={benefitsThree}
        outro="Si sufriste un perjuicio ocasionado por otra persona o empresa, te ayudamos a reclamar la indemnización correspondiente para resarcir los daños sufridos."
      />
      <Stats />
      <BannerProduct />
      <Ourblog />
      <FAQHome faqs={faqDC} />
    </div>
  );
} 