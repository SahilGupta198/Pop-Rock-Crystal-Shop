import React from "react";
import PriceWave from "./PriceWave";
import product from "../assets/product.png";

const Price = () => {
  return (
    <>
      <PriceWave />

      <div className="w-full h-[99vh] bg-gradient-to-br from-blue-400 from-50% via-blue-300 via-70% to-teal-100 to-90% flex">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-end justify-center space-y-4 z-10 pb-20">
          <p className="text-navyshade text-4xl 2xl:text-6xl">BEST PRICE</p>
          <h1 className="text-6xl 2xl:text-8xl leading-6 font-bold text-navyshade">
            Agate Phone Grip
          </h1>
          <p className="text-6xl 2xl:text-8xl font-bold text-redshade pt-8 flex items-center">
            <span className="text-xl 2xl:text-3xl mr-4 line-through text-blue-400">
              44.50%
            </span>
            19.50$
          </p>
          <p className="text-navyshade w-7/12 2xl:w-1/2 text-right text-sm 2xl:text-lg tracking-wide pb-4">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className="bg-gradient from-blue-300 to-blue-400 text-white rounded-lg hover:scale-95 transition duration-300 shadow-xl px-9 py-3">
            BUY NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center z-10
        pb-20">
          {/* first Circle */}
          <div
            className="w-[45.5vw] h-[45.5vw] bg-gradient-to-b from-[#ffffff10] via-[#ffffff30] to-[#ffffff30] rounded-full overflow-hidden relative flex items-center justify-center">
            {/* Second Circle */}
            <div className="w-[36vw] h-[36vw] bg-white rounded-full shadow-circle-shadow absolute flex items-center justify-center">
              {/* Third Circle */}
              <div className="w-[26.5vw] h-[26.5vw] bg-white rounded-full shadow-circle-shadow flex items-center justify-center">
                {/* product image */}
                <img
                  src={product}
                  alt="centered"
                  className="w-64 h-64 2xl:w-96 2xl:h-96 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
