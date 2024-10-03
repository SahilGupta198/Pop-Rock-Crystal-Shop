import React, { useState } from 'react';
import product from '../assets/product.png'

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 6;

  const cards = [
    { image: `${product}`, price: "$18.99", label: "New Lot", title: "Crystal Agete Phone Grip" },
    { image: `${product}`, price: "$24.99", label: "New Lot", title: "Gemstone Ring Phone Grip" },
    { image: `${product}`, price: "$20.99", label: "New Lot", title: "Quartz Bracelet Phone Grip" },
    { image: `${product}`, price: "$35.99", label: "New Lot", title: "Amethyst Pendant Phone Grip" },
    { image: `${product}`, price: "$28.99", label: "New Lot", title: "Ruby Earrings Phone Grip" },
    { image: `${product}`, price: "$15.99", label: "New Lot", title: "Sapphire Brooch Phone Grip" },
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      {/* Card Section */}
      <div className="relative w-[30vw] h-[30vw] bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center">
        <img
          src={cards[currentIndex].image}
          alt="product"
          className="w-2/3 object-cover rounded-t-lg mb-6"
        />
        {/* Label */}
        <div className="absolute top-12 left-0 bg-purpleshade text-white px-4 py-1.5 text-[10px] rounded-r-md shadow-md">
          {cards[currentIndex].label}
        </div>
        {/* Title and Price */}
        <div className="text-tealshade text-center flex items-center justify-center space-x-1 text-sm">
          <p className="text-gray-400 uppercase">{cards[currentIndex].title}</p>
          <span className='font-bold'>-</span>
          <p className="font-bold">{cards[currentIndex].price}</p>
        </div>
      </div>

      {/* Arrows and dots */}
      <div className="flex items-center space-x-4">
        {/* left */}
        <button
          onClick={prevCard}
          className="px-1 py-0.5 bg-purpleshade hover:bg-navyshade text-white rounded-sm text-sm focus:outline-none"
        >
          🡰
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {Array.from({ length: totalCards }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                currentIndex === idx ? 'bg-purpleshade' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* right */}
        <button
          onClick={nextCard}
          className="px-1 py-0.5 bg-purpleshade hover:bg-navyshade text-white rounded-sm text-sm focus:outline-none"
        >
          🡪
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
