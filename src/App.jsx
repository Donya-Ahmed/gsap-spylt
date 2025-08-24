import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./sections/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";

gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <>
      <main className="relative">
        <Navbar model={(open) => <Model open={open} />} />
        <Hero />
        <MessageSection/>
        <FlavorSection/>
        <div className="h-dvh bg-main-bg">hello</div>
      </main>
    </>
  );
}

export default App;
