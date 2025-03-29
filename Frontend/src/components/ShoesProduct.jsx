import React from "react";

const ShoesProduct = () => {
  return (
    <>
      <div className="bg-gray-200  p-8 sm:p-16 dark:bg-gray-900">
        <div className="p-4 mb-4 text-3xl text-center leading-tight first-letter:capitalize font-bold dark:text-gray-100">
          <h3>Amazing Shoes to Explore !!!</h3>
        </div>
        <div className="mx-auto w-fit grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card */}
          <div className="relative group bg-gray-200 h-[400px] shadow-lg rounded-2xl overflow-hidden">
            <img
              className="w-full h-full group-hover:h-64 object-cover rounded-2xl transition-all delay-150 duration-300 ease"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png"
            />
            <div className="bg-gray-100 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease dark:bg-gray-700">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                      jordan spizike low
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
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png"
            />
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                      Air Jordan 6 Retro
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
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png"
            />
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 -mb-44 group-hover:mb-0 rounded-b-2xl transition-all delay-150 duration-300 ease">
              <div className="p-6">
                <div className="capitalize flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-red-600 text-lg font-bold">
                      Jumpman MVP
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
