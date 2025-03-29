import React, { useState } from "react";

const ProductsForYou = () => {
  const [selectedOption, setSelectedOption] = useState("Relevance");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High)",
    "Ratings",
    "Discount",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [openGender, setOpenGender] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openDialShape, setOpenDialShape] = useState(false);
  const [selectedGender, setSelectedGender] = useState(false);

  const genders = ["Boys", "Girls", "Men", "Women"];

  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer ">
          <h2 className="text-2xl font-medium">Products For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4 my-5">
            <div className="col-12 md:col-span-3  w-full h-full  rounded-xl ">
              <div className="relative inline-block text-left w-full">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700    focus:outline-none"
                    id="sort-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    Sort by: {selectedOption}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="sort-menu"
                  >
                    <div className="py-1" role="none">
                      {options.map((option) => (
                        <button
                          key={option}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedOption === option
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                          role="menuitem"
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="border rounded-xl mt-5 p-5">
                <div className="border-b-2 pb-4">
                  <h3 className="text-black font-medium">FILTERS</h3>
                  <h2 className="text-xs">1000+ Products</h2>
                </div>

                {/* Search Box */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium mb-2">Category</h4>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search filters..."
                      className="w-full p-2 pl-10 border rounded-md"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="women-tshirts"
                        className="mr-2"
                      />
                      <label htmlFor="women-tshirts">Women T-shirts</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="women-tops" className="mr-2" />
                      <label htmlFor="women-tops">Women Tops And Tunics</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="watches" className="mr-2" />
                      <label htmlFor="watches">Analog Watches</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="bangles" className="mr-2" />
                      <label htmlFor="bangles">Bangles & Bracelets</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="bedsheets" className="mr-2" />
                      <label htmlFor="bedsheets">Bedsheets</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="bike-covers"
                        className="mr-2"
                      />
                      <label htmlFor="bike-covers">Bike Covers</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="blouses" className="mr-2" />
                      <label htmlFor="blouses">Blouses</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="boxes" className="mr-2" />
                      <label htmlFor="boxes">Boxes, Baskets & Bins</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="dresses" className="mr-2" />
                      <label htmlFor="dresses">Dresses</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="dupatta" className="mr-2" />
                      <label htmlFor="dupatta">Dupatta Sets</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="earrings" className="mr-2" />
                      <label htmlFor="earrings">Earrings & Studs</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="flipflops" className="mr-2" />
                      <label htmlFor="flipflops">Flipflops & Slippers</label>
                    </div>
                  </div>
                  <button className="text-purple-500 font-semibold mt-2 ml-6 text-sm">
                    Show More
                  </button>
                </div>

                <div className="w-full md:w-64 mt-4 bg-white   sticky top-0">
                  {/* Gender Dropdown */}
                  <div className="mb-4 border-b-2 border-gray-300">
                    <button
                      onClick={() => setOpenGender(!openGender)}
                      className="flex justify-between items-center w-full p-2 text-left font-medium  rounded-md"
                    >
                      <span>Gender</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openGender ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openGender && (
                      <div className="mt-2 pl-2 space-y-1 pb-5">
                        <div className="flex flex-wrap items-center gap-3">
                          {genders.map((gender) => (
                            <div key={gender} className="flex  items-center">
                              <button className="border-2 text-sm border-300 px-2 py-1 rounded-xl font-medium">
                                {gender}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Color Dropdown */}
                  <div className="mb-4 border-b-2 border-gray-300">
                    <button
                      onClick={() => setOpenAge(!openAge)}
                      className="flex justify-between items-center w-full p-2 text-left font-medium  rounded-md"
                    >
                      <span>Color</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openAge ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openAge && (
                      <div className="mt-2  space-y-1">
                        <div className="flex flex-wrap items-center gap-3">
                          {[
                            "Black",
                            "Brown",
                            "Beige",
                            "Combo Of Different Color",
                            "Combo Of Maroon Shade",
                            "Combo Of Maroon Shade",
                            "Gold",
                            "Gray",
                            "Khaki",
                          ].map((age) => (
                            <div key={age} className="flex items-center">
                              <button className="border-2 text-sm border-300 px-2 py-1 rounded-xl font-medium">
                                {age}
                              </button>
                            </div>
                          ))}
                        </div>
                        <button className="text-purple-500 font-semibold py-4 ml-2 text-sm">
                          Show More
                        </button>
                      </div>
                    )}
                  </div>

                  {/* DialShape Dropdown */}
                  <div className="mb-4 border-b-2 border-gray-300">
                    <button
                      onClick={() => setOpenDialShape(!openDialShape)}
                      className="flex justify-between items-center w-full p-2 text-left font-medium  rounded-md"
                    >
                      <span>Dial Shape</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDialShape ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openDialShape && (
                      <div className="mt-2 pl-2 space-y-1">
                        {["Round"].map((DialShape) => (
                          <div
                            key={DialShape}
                            className="flex items-center pb-4"
                          >
                            <input
                              type="checkbox"
                              id={`DialShape-${DialShape}`}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`DialShape-${DialShape}`}
                              className="ml-2 text-sm font-medium text-gray-700"
                            >
                              {DialShape}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-span-9 w-full h-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Product Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/product1.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Trendy Retro Men Shirts


                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹172</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       17836 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product2.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Feminine Beautiful Jewellery 
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹250</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       3796 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product3.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +13 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Lycra Sarees
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹286</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">3.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       144593 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product4.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    POCO C51 Cases & Covers
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹158</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.0</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       846 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 1 */}
                 <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/product1.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Trendy Retro Men Shirts


                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹172</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       17836 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product2.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Feminine Beautiful Jewellery 
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹250</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       3796 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product3.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +13 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Lycra Sarees
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹286</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">3.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       144593 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product4.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    POCO C51 Cases & Covers
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹158</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.0</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       846 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 1 */}
                 <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/product1.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Trendy Retro Men Shirts


                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹172</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       17836 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product2.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Feminine Beautiful Jewellery 
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹250</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       3796 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product3.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +13 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Lycra Sarees
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹286</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">3.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       144593 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product4.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    POCO C51 Cases & Covers
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹158</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.0</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       846 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 1 */}
                 <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/product1.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Trendy Retro Men Shirts


                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹172</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       17836 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product2.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +7 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Feminine Beautiful Jewellery 
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹250</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       3796 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product3.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-t-lg z-10">
                      +13 More
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    Lycra Sarees
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹286</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">3.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       144593 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                 {/* Product Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 bg-white flex items-center justify-center">
                    <img
                      src="/Product4.webp"
                      alt="Feminine Beautiful Jewellery Sets"
                      className="h-full object-contain"
                    />
                    
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">
                    POCO C51 Cases & Covers
                    </h3>
                    <p className="text-gray-900 font-bold text-lg mb-2">₹158</p>

                    <div className="flex items-center text-xs text-gray-900 font-medium mb-2 ">
                      <span className="mr-2 bg-gray-200 rounded-full px-2 py-1">
                        Free Delivery
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center gap-2  bg-green-800 rounded-full px-2 py-1 text-xs font-medium">
                        <span className="text-white text-sm ml-1">4.0</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-500 font-semibold text-xs ml-2">
                       846 Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsForYou;
