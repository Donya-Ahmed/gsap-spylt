import Hero from "./components/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>  
        <Navbar model={(open) => <Model open={open} />}/>
        <Hero/>
      </main>
    </>
  );
}

export default App;
