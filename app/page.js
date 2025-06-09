import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import HowWork from "./components/HowWork";
import Testimonials from "./components/Testimonials";
import BannerCTA from "./components/BannerCTA";
import Contact from "./components/Contact";
import ContactMap from "./components/ContactMap";
import Ourblog from "./components/Ourblog";
import FAQHome from "./components/FAQHome";
import BannerProduct from "./components/BannerProduct";
import { faqs } from "./mock/faqs";

export default function Home() {
  return (
    <div>
      <HeroSection
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-especialistas-en-derechopenalycivil-en-buenos-aires.webp"
        alt="Abogados especialistas en temas Penales y Civiles"
        title="Abogados especialistas en temas Penales y Civiles"
        subtitle="Brindamos un asesoramiento personalizado para cada necesidad."
      />
      <AboutUs />
      <WhatWeDo />
      <HowWork />
      <Testimonials />
      <BannerCTA />
      <Contact />
      <ContactMap />
      <Ourblog />
      <BannerProduct />
      <FAQHome faqs={faqs} />
    </div>
  );
}
