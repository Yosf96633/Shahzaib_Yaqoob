import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Marquee />
            <Projects />
            <About />
            <Contact />
          </>
        }
      />
    </>
  )
);
const App = () => {
  return (
    <main className=" font-light antialiased selection:bg-lime-300 selection:text-black">
      <RouterProvider router={route}/>
    </main>
  );
};

export default App;
