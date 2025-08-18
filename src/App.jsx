import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import MessageSection from "./components/MessageSection";

gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <>
      <main className="relative">
        <Navbar model={(open) => <Model open={open} />} />
        <Hero />
        <MessageSection/>
        <div className="h-dvh bg-main-bg">hello</div>
      </main>
    </>
  );
}

export default App;
