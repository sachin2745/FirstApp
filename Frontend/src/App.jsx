import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../components/todoList";
import Navbar from "../components/navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-3xl min-h-screen mt-64 font-bold">Welcome to the App</h1>}
          />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
