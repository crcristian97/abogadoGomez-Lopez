import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import Team from "../../sobre-la-firma/components/Team";
import Service from "./components/Service";
import BenefitsSevices from "./components/BenefitsSevices";
import InfoService from "./components/InfoService";
import Stats from "../../ui/Stats";

export default function DerechoPenal() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/asesoria-derecho-penal-en-buenos-aires.webp"
        alt="Derecho Penal en Buenos Aires"
        title="Asesoría Especializada en Derecho Penal"
        description="Defensa penal técnica y comprometida con más de 30 años de experiencia. Protegemos tus derechos en todas las instancias del proceso penal."
      />
      <Team
        image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-penal-en-buenos-aires.webp"
        title="Abogados penales en Buenos Aires"
        buttonLink="https://wa.me/5491133333333"
        buttonText="Quiero hablar con un abogado"
        description={
          <>
            En nuestro estudio jurídico brindamos{" "}
            <span className="font-bold text-[#CBA240]">defensa penal técnica y comprometida</span> en todas las instancias del proceso penal. <br />
            Contamos con <span className="font-bold text-[#CBA240]">más de 30 años de experiencia</span> en la representación de imputados y víctimas en causas penales tanto en el fuero ordinario como en el fuero federal.<br />
            Nuestro compromiso es acompañarte en cada etapa del procedimiento, ofreciendo{" "}
            <span className="font-bold text-[#CBA240]">asesoría personalizada</span> y estrategias legales efectivas para defender tus derechos y garantizar un proceso justo. Nos destacamos por la{" "}
            <span className="font-bold text-[#CBA240]">ética profesional</span>, la{" "}
            <span className="font-bold text-[#CBA240]">confidencialidad</span> y la{" "}
            <span className="font-bold text-[#CBA240]">actualización constante en legislación penal</span>.
          </>
        }
        imagePosition="right"
        rounder={false}
      />
      <Service />
      <BenefitsSevices />
      <InfoService />
      <Stats />
      <BannerProduct />
      <Ourblog />
    </div>
  );
}