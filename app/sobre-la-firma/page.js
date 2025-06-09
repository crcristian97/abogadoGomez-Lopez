"use client";

import HeroSection from "../components/HeroSection";
import SobreFirma from "./components/SobreFirma";
import Team from "./components/Team";
import BannerProduct from "../components/BannerProduct";
import Ourblog from "../components/Ourblog";  
import { handleClickWhatsApp } from "../utils/WhatsApp";
import Breadcrumbs from "../components/Breadcrumbs";

export default function SobreLaFirma() {
  return (
    <div>
        <HeroSection
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/sobre-el-estudio-juridico-en-buenos-aires.webp"
            alt="Sobre el estudio juridico en buenos aires"
            title="Sobre la firma"
        />
        <Breadcrumbs />
        <SobreFirma />
        <Team 
            image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-en-buenos-aires-jose-luis-lopez.jpg"
            title="Dr. José Luis López"
            description="Abogado egresado de la Universidad de Buenos Aires (UBA), en ejercicio desde 1991, con más de tres décadas de experiencia en Derecho Penal y Civil.
Está matriculado en el Colegio Público de la Abogacía de la Capital Federal, con Matrícula Federal activa.
Se ha desempeñado como docente universitario en la Facultad de Derecho y Ciencias Sociales de la UBA, aportando su conocimiento a las nuevas generaciones de abogados.
Su enfoque ético, compromiso con el cliente y profundo conocimiento en materia Penal y Civil lo posicionan como un referente en la profesión"
            buttonText="Hablar con el Dr. José Luis López"
            imagePosition="right"
            rounder={true}
            onButtonClick={() => handleClickWhatsApp('Hola, Dr Luis López quiero asesoramiento legal', '5491154645620')}
        />
        <Team 
            image="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogada-especialista-caligrafia-derecho.webp"
            title="Dra. Estefanía Gómez"
            description="Abogada especializada en Derecho Sucesorio, Civil y Penal, con matrícula federal y egresada en 2019. Desde entonces, ejerce la profesión con compromiso y formación continua.
Además, es Calígrafo Público Nacional en ejercicio desde 2014, matriculada en el Colegio de Calígrafos Públicos de la Ciudad de Buenos Aires (CPCBA) y en la Suprema Corte de Justicia de la Provincia de Buenos Aires (SCJBA).
Actualmente, se desempeña como Secretaria del Colegio de Calígrafos de la Ciudad de Buenos Aires y como docente universitaria. También forma parte activa del Colegio Público de la Abogacía de la Capital Federal, con matrícula federal vigente."
            buttonText="Hablar con la Dra. Estefanía Gómez"
            imagePosition="right"
            rounder={true}
            onButtonClick={() => handleClickWhatsApp('Hola, Dra Estefanía Gómez quiero asesoramiento legal')}
        />
        <BannerProduct />
        <Ourblog />
    </div>
  );
} 