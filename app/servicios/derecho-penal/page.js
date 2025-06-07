"use client";

import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";
import HeroServices from "../../components/HeroServices";

export default function DerechoPenal() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/asesoria-derecho-penal-en-buenos-aires.webp"
        alt="Derecho Penal en Buenos Aires"
        title=" Asesoría Especializada en Derecho Penal"
        description=" Defensa penal técnica y comprometida con más de 30 años de experiencia. Protegemos tus derechos en todas las instancias del proceso penal."
      />
      {/* Aquí puedes agregar los componentes específicos de derecho penal */}
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 