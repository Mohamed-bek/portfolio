import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div id="Home" className=" w-full h-[100dvh] overflow-hidden">
      <div className="w-[90%] mx-auto min-h-[100vh] flex justify-between items-center">
        <Hero />
        <div className="imageSection w-2/5 h-[100vh] relative">
          <div className="h-[120vh] overflow-hidden w-0 ImageAnimation origin-right bg-secondary absolute top-1/2 right-[0%] -translate-y-1/2 rotate-[4deg]">
            <div className="h-full w-full absolute top-0 right-0 translate-x-full ImageBgAnimation bg-primary"></div>
            <div className="h-full w-full absolute top-0 right-0 translate-x-[100%] ImgAnimation bg-secondary">
              <img
                className="w-full absolute left-1/2 bottom-0 -translate-x-[calc(50%-30px)] -translate-y-[20%] scale-125 rotate-[-11deg]"
                src="/images/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
