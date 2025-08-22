import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Cabs from "./components/Cabs";
import Servicios from "./components/Servicios";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cabs />
      <Servicios />
      <About />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
