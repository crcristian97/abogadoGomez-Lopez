"use client";

import HeroSection from "../../components/HeroSection";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";

export default function DerechoCivil() {
  return (
    <div>
      <HeroSection
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-civil.webp"
        alt="Derecho Civil en Buenos Aires"
        title="Derecho Civil"
      />
      {/* Aquí puedes agregar los componentes específicos de derecho civil */}
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 