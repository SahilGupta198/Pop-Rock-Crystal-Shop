import React from "react";
import HeroWave from "./HeroWave";
import CardCarousel from "./CardCarousel";

function HeroSec() {
  return (
   <>
    <div className="w-full h-screen bg-hero-bg bg-cover bg-center flex items-center justify-between px-16 text-white">
      {/* Left Section */}
      <div className=" flex flex-col space-y-4 z-10">
        <div className="text-4xl 2xl:text-6xl pb-1">Welcome to</div>
        <h1 className="text-6xl 2xl:text-8xl font-bold leading-5">Pop Rock Crystal Shop!</h1>
        <p className="text-navyshade py-8 w-7/12 2xl:w-1/2 2xl:text-2xl">
          Here you will find unique phone accessories, crystals, jewelry and
          more. Free shipping inside the U.S. and our phone grips come with a
          limited warranty. Enjoy!
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-navyshade px-8 py-3 rounded-2xl transition duration-300 hover:scale-95 font-medium">
            SHOP NOW
          </button>
          <button className="text-navyshade px-6 py-3 transition duration-300 hover:underline">
            about us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-3/5 2xl:w-2/5 z-10 mt-20">
      <CardCarousel />
      </div>
    </div>

    {/* wave */}
    <HeroWave />
   </>
  );
}

export default HeroSec;
