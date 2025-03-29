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

const App = () => {
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
    </div>
  );
};

export default App;
