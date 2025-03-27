import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product Listing</h1>
      <div className="text-right mb-4">
        <button className="hover:scale-110 transition duration-300 ease-in-out">
          <Link
            to="/add-product"
            className="border border-b-2 border-(--color-midnight) text-(--color-midnight) px-4 py-2 rounded"
          >
            Add Product
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 animate-pulse"
          >
            <div className="relative w-full h-96 bg-gray-300 rounded-md"></div>
            <h2 className="w-3/4 h-5 bg-gray-300 rounded mt-5"></h2>
            <h2 className="w-1/2 h-4 bg-gray-300 rounded mt-2"></h2>
            <p className="w-1/3 h-4 bg-gray-300 rounded mt-2"></p>
            <p className="w-2/3 h-3 bg-gray-300 rounded mt-2"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
