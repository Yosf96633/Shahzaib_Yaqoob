import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
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
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}