import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/store";
import ProductDetail from "./components/productDetails";
import ProductForm from "./components/addProduct";
import TodoList from "./components/todoList";
import Test from "./components/test";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center">
                <h1 className="text-3xl min-h-screen mt-64 font-bold">
                  Welcome to the App
                </h1>
              </div>
            }
          />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/store" element={<Store />} />
          <Route path="/test" element={<Test />} />
          <Route path="/store/:id" element={<ProductDetail />} /> 
          <Route path="/add-product" element={<ProductForm />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
