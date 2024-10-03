import React, { useState } from "react";
import productImg from "../assets/product.png";

const Products = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const product = {
    title: "CRYSTAL AGETE PHONE GRIP",
    price: "$18.99",
    imageUrl: `${productImg}`,
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="w-full px-8 py-10">
      <h1 className="text-4xl font-bold text-navyshade flex items-center justify-center mb-10">
        All product
      </h1>

      {/* filter and sort */}
      <div className="flex justify-start space-x-36 mb-6">

        {/* filter */}
        <div className="flex items-center space-x-1">
          <label htmlFor="filter" className="text-[#9ab0c0] font-semibold">
            Filter:
          </label>
          <select
            id="filter"
            className="bg-white text-navyshade border-none focus:outline-none rounded-md font-semibold"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">All Products</option>
            <option value="crystals">Crystals</option>
            <option value="jewelry">Jewelry</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* sort */}
        <div className="flex items-center space-x-1">
          <label htmlFor="sort" className="text-[#9ab0c0] font-semibold">
            Sort:
          </label>
          <select
            id="sort"
            className="bg-white text-navyshade border-none focus:outline-none rounded-md font-semibold"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="none">Best Selling</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
            <option value="name-asc">A to Z</option>
            <option value="name-desc">Z to A</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Render the same card 8 times */}
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-300 hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-56 object-cover rounded"
              />

              <p className=" text-sm text-gray-500">{product.title}</p>

              <p className="text-tealshade text-sm font-bold mb-3">
                {product.price}
              </p>

              <button className="bg-gradient from-blue-300 to-blue-400 rounded-xl hover:scale-95 transition duration-300 shadow-xl p-[3px]">
                <div class=" w-full rounded-lg bg-white text-blue-400 text-xs px-9 py-3 hover:bg-transparent hover:text-white">
                  BUY NOW
                </div>
              </button>
            </div>
          ))}
      </div>

      {/* view all button */}
      <div className="w-full flex items-center justify-center mt-20">
      <button className="bg-gradient from-blue-300 to-blue-400 rounded-xl hover:scale-95 transition duration-300 shadow-xl p-[3px]">
        <div class=" w-full rounded-lg bg-white text-blue-400 text-xs font-semibold px-8 py-2 hover:bg-transparent hover:text-white">
          View All
        </div>
      </button>
      </div>
    </div>
  );
};

export default Products;
