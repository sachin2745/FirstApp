import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../components/todoList";
import Navbar from "../components/navbar";
import Store from "../components/store";

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
        </Routes>
      </div>
    </div>
  );
};

export default App;
