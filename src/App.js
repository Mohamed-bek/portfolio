import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import GalleryProjects from "./components/GalleryProjects";
import Header from "./components/Header";
import Techs from "./components/Techs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="App w-full min-h-[100dvh] overflow-hidden">
      {loading ? (
        <div className="w-full h-[100dvh] flex justify-between">
          <div className="w-1/2 bg-secondary h-full width-shring"></div>
          <div className="w-1/2 bg-secondary h-full width-shring"></div>
        </div>
      ) : (
        <>
          <div id="layerFilter" className="layerFilter"></div>
          <Header />
          <div id="Container" className="Container w-full h-full origin-center">
            <Home />
            <div className="w-[95%] mx-auto h-[1px]  bg-secondary mt-20"> </div>
            <GalleryProjects />
            <div className="w-[95%] mx-auto h-[1px]  bg-secondary mt-20"> </div>
            <Projects />
            <div className="w-[95%] mx-auto h-[1px]  bg-secondary mt-20"> </div>
            <Techs />
            <div className="w-[95%] mx-auto h-[1px]  bg-secondary my-10"> </div>
            <About />
            <div className="w-[95%] mx-auto h-[1px]  bg-secondary mt-20"> </div>
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
