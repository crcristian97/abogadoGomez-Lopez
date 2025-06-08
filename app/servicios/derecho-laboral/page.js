"use client";
import HeroServices from "../../components/HeroServices";
import BannerProduct from "../../components/BannerProduct";
import Ourblog from "../../components/Ourblog";

export default function DerechoLaboral() {
  return (
    <div>
      <HeroServices 
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogado-derecho-laboral-en-buenos-aires.webp"
        alt=" Especialistas en derecho laboral que defienden tus derechos"
        title=" Especialistas en derecho laboral que defienden tus derechos"
description={<>
En nuestro estudio jurídico somos especialistas en derecho laboral. Representamos a trabajadores y empresas con más de 30 años de experiencia en conflictos laborales. 
Si sufriste un despido injustificado, estás en un contexto de trabajo en negro o necesitás asesoría para evitar juicios, estamos acá para ayudarte.
</>}
      />
      <BannerProduct />
      <Ourblog />
    </div>
  );
} 