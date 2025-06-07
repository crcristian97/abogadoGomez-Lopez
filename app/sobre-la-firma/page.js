"use client";

import HeroSection from "../components/HeroSection";
import SobreFirma from "./components/SobreFirma";
export default function SobreLaFirma() {
  return (
    <div>
        <HeroSection
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/sobre-el-estudio-juridico-en-buenos-aires.webp"
            alt="Sobre el estudio juridico en buenos aires"
            title="Sobre la firma"
        />
        <SobreFirma />
    </div>
  );
} 