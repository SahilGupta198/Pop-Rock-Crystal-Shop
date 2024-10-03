import React from "react";
import logo from "../assets/logo.png";
import shop from "../assets/shop.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center px-8 py-10 2xl:py-16 text-white bg-transparent absolute">
        {/* left scetion */}
      <div className="w-1/2 flex items-center justify-start">
        <img src={logo} alt="logo" className="w-6 2xl:w-10 mr-2 hover:scale-110 transition duration-300 cursor-pointer" />
        <p className="cursor-pointer 2xl:text-xl">Pop Rocket Crystal</p>
      </div>

      {/* right section */}
      <div className="w-1/2 flex items-center justify-between">
        <ul className="flex ml-16 space-x-10 2xl:space-x-16 2xl:text-xl">
            <li className="hover:text-navyshade hover:scale-105 transform transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-navyshade hover:scale-105 transform transition duration-300 cursor-pointer">Shop</li>
            <li className="hover:text-navyshade hover:scale-105 transform transition duration-300 cursor-pointer">About us</li>
            <li className="hover:text-navyshade hover:scale-105 transform transition duration-300 cursor-pointer">Help</li>
          </ul>
        <div className="flex items-center space-x-1">
          <div className="bg-pinkshade rounded-full py-0.5 px-1 text-[0.5rem] 2xl:text-[0.8rem]">00</div>
          <img src={shop} alt="shop" className="w-8 2xl:w-12  cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
