import React from "react";
import scroll from '../assets/scroll-down.png'

const HeroWave = () => {
  return (
    <div className="relative h-screen bg-wave bg-cover bg-center -mt-[35vw]  flex items-end justify-center">
      <div className="mb-20 flex items-center justify-center space-x-1">
        <img src={scroll} alt="scroll" className="w-6" />
        <p className="text-tealshade">scroll down</p>
      </div>
    </div>
  );
};

export default HeroWave;
