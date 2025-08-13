import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar model={<Model/>}/>
      </main>
    </>
  );
}

export default App;
