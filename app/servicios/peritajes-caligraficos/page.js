"use client";

import HeroSection from "../../components/HeroSection";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";

export default function PeritajesCaligraficos() {
  return (
    <div>
      <HeroSection
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/peritajes-caligraficos.webp"
        alt="Peritajes Caligráficos en Buenos Aires"
        title="Peritajes Caligráficos"
      />
      {/* Aquí puedes agregar los componentes específicos de peritajes caligráficos */}
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 