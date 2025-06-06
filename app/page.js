import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
    </div>
  );
}
