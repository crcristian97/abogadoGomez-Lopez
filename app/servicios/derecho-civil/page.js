"use client";

import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import Team from "../../sobre-la-firma/components/Team";

export default function DerechoCivil() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-civil-en-buenos-aires.webp"
        alt="Derecho Civil en Buenos Aires"
        title="Estudio jurídico de derecho civil en CABA y Provincia"
        description={<>Asesoría legal en Derecho Civil en Ciudad Autónoma de Buenos Aires y Provincia. Especialistas en sucesiones, divorcios, amparos y contratos. </>}
      />
      <Team
        image="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749392575/buenos-aires-derecho-civil.webp"
        title="Sobre el derecho civil"
        buttonLink="https://wa.me/5491133333333"
        buttonText="Quiero hablar con un abogado"
        description={
          <>
           En nuestro estudio jurídico ubicado en Ciudad Autónoma de Buenos Aires y la provincia de Buenos Aires, ofrecemos <span className="font-bold text-[#CBA240]">asesoramiento integral en Derecho Civil</span>, con una atención personalizada y eficiente. Nuestra trayectoria y experiencia nos permiten brindar <span className="font-bold text-[#CBA240]">soluciones jurídicas claras y efectivas</span> para proteger tus derechos y defender tus intereses en una amplia variedad de situaciones legales civiles.
Nos especializamos en causas relacionadas con <span className="font-bold text-[#CBA240]">sucesiones, divorcios, contratos, amparos, daños y perjuicios, y responsabilidad civil</span>. Trabajamos con <span className="font-bold text-[#CBA240]">profesionalismo y compromiso</span> para lograr la mejor resolución para nuestros clientes, tanto en procesos judiciales como en gestiones extrajudiciales.

          </>
        }
        imagePosition="left"
        rounder={false}
      />
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 