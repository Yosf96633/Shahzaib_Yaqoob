import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  )
}