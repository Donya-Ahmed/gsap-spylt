import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./sections/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <>
      <main className="relative">
        <Navbar model={(open) => <Model open={open} />} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Hero />
            <MessageSection />
            <FlavorSection />
            <NutritionSection/>
            <BenefitSection/>
            <div className="h-dvh bg-main-bg">hello</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
