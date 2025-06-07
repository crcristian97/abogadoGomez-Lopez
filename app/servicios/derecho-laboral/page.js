"use client";

import HeroSection from "../../components/HeroSection";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";

export default function DerechoLaboral() {
  return (
    <div>
      <HeroSection
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-laboral.webp"
        alt="Derecho Laboral en Buenos Aires"
        title="Derecho Laboral"
      />
      {/* Aquí puedes agregar los componentes específicos de derecho laboral */}
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 