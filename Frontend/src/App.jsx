import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./components/store";
import ProductDetail from "./components/productDetails";
import ProductForm from "./components/addProduct";
import TodoList from "./components/todoList";
import Test from "./components/test";
import BulkUpload from "./components/addBlukProduct";
import CartPage from "./components/cart";
import { MegaMenuWithHover } from "./components/navbar";
import Home from "./pages/home";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const App = () => {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <MegaMenuWithHover />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/store" element={<Store />} />
          <Route path="/test" element={<Test />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/store/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/add-bulk-product" element={<BulkUpload />} />
        </Routes>
      </div>
      <div className="z-10">
        <div className="fixed bottom-6 right-6">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform group-hover:rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <div className="max-w-screen-md h-full w-full mx-auto px-4 z-50 sm:px-6 lg:px-8 cursor-pointer">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="p-4 bg-blue-600 text-xl text-white font-bold rounded-t-lg">
                    Latest Offers
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-4 hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                      <img
                        src="/logo.jpg"
                        alt="Offer"
                        className="h-20 w-20 object-cover rounded-lg border-2 border-gray-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Grand Festive Days
                          </h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            SALE LIVE 🟢
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">4 hrs ago</p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                          <span className="font-medium">View Details</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Add more offers with similar structure */}
                    <div className="mt-4 border-t border-gray-200"></div>
                    <div className="flex items-start gap-4 hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                      <img
                        src="/logo.jpg"
                        alt="Offer"
                        className="h-20 w-20 object-cover rounded-lg border-2 border-gray-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Grand Festive Days
                          </h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            SALE LIVE 🟢
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">4 hrs ago</p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                          <span className="font-medium">View Details</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Add more offers with similar structure */}
                    <div className="mt-4 border-t border-gray-200"></div>
                    <div className="flex items-start gap-4 hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200">
                      <img
                        src="/logo.jpg"
                        alt="Offer"
                        className="h-20 w-20 object-cover rounded-lg border-2 border-gray-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Grand Festive Days
                          </h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            SALE LIVE 🟢
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">4 hrs ago</p>
                        <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                          <span className="font-medium">View Details</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Add more offers with similar structure */}
                    <div className="mt-4 border-t border-gray-200"></div>
                  </div>
                  <div className=" text-center text-xs border-t-2 pb-0.5 ">
                    <div className="bg-red-50 m-2 mb-2 p-4 rounded text-gray-900">
                      <span className="font-normal flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                            fill="black"
                            fill-opacity="0.7"
                          ></path>
                        </svg>
                        Unblock notifications to start receiving real time
                        updates. <span className="underline">Know More</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    </div>
  );
};

export default App;
