import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import HowWork from "./components/HowWork";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <HowWork />
      <Testimonials />
    </div>
  );
}
