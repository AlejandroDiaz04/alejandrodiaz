import "./App.css";
import Navbar from "./components/navbar/navbar";
import Fondo from "./ui-components/Fondo";
import Inicio from "./components/inicio/inicio";
import About from "./components/about/About";
import Titles from "./components/titles/Titles";
import Proyectos from "./components/proyectos/Proyectos";

function App() {
  return (
    <>
      <Fondo />
      <Navbar />
      <Inicio />
      <About />
      <Titles />
      <Proyectos />
    </>
  );
}

export default App;
