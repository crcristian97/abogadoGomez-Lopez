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
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <HowWork />
      <Testimonials />
      <BannerCTA />
      <Contact />
      <ContactMap />
      <Ourblog />
      <FAQHome />
    </div>
  );
}
