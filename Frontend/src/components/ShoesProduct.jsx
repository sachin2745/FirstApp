import React from "react";

const ShoesProduct = () => {
  return (
    <>
      <div className="bg-gray-200  p-8 sm:p-16 dark:bg-gray-900">
        <div className="p-4 mb-4 text-3xl text-center leading-tight first-letter:capitalize font-bold dark:text-gray-100">
          <h3>Amazing Headset to Explore !!!</h3>
        </div>
        <div className="mx-auto w-fit grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card */}
          <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
            <img
              className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
              src="https://5.imimg.com/data5/SELLER/Default/2025/2/486590284/PP/CC/AN/134731459/wireless-p9-headphones-with-over-ear-design-premium-bluetooth-headphones-500x500.jpg"
            />
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                    Lenovo H100 Gaming Headset
                    </h2>
                    <p className="dark:text-gray-100">men's shoes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold dark:text-gray-100">
                      $200
                    </p>
                  </div>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-2 left-5">
                    <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
          {/* card */}
          <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
            <img
              className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/335782884/KT/HP/NK/132716594/h2d9469bbfeef46198e3a738c5fb3892b8-500x500.jpeg"
            />
            <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                    HP H100 Gaming Headset
                    </h2>
                    <p className="dark:text-gray-100">men's shoes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold dark:text-gray-100">
                      $160
                    </p>
                  </div>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-2 left-5">
                    <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}

          {/* card */}
          <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
            <img
              className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
              src="https://5.imimg.com/data5/SELLER/Default/2025/2/486590284/PP/CC/AN/134731459/wireless-p9-headphones-with-over-ear-design-premium-bluetooth-headphones-500x500.jpg"
            />
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                    IP9 H100 Gaming Headset
                    </h2>
                    <p className="dark:text-gray-100">men's shoes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold dark:text-gray-100">
                      $165
                    </p>
                  </div>
                </div>
                <div className="block mt-4">
                  <div className="absolute bottom-2 left-5">
                    <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </>
  );
};

export default ShoesProduct;
