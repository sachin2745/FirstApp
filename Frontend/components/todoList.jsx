import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/todos/getall`
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Calculate pagination
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const addTodo = async () => {
    //!newTodo.trim() checks if the trimmed string is empty (i.e., if the user entered only spaces or nothing at all).
    if (!newTodo.trim()) return;
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/todos/add`, {
        title: newTodo,
      });
      setNewTodo("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/todos/update/${id}`, {
        completed: !completed,
      });
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/todos/delete/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="p-6 w-[50%] mx-auto bg-white shadow-xl rounded-lg mt-10 border border-gray-200">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Todo List
      </h1>

      {/* Input and Add Button */}
      <div className="flex gap-3 mb-6">
        <input
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          required
          type="text"
        />
        <button
          className="bg-blue-800 hover:bg-blue-900  text-white px-10 py-0 rounded transition"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="p-4">
        <ul className="space-y-3">
          {currentTodos.length === 0 ? (
            <p className="text-gray-500 text-center">
              No todos found. Start adding some!
            </p>
          ) : (
            currentTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id, todo.completed)}
                    className="form-checkbox h-5 w-5 text-blue-800"
                  />
                  <span className="text-lg font-medium text-gray-800">
                    {todo.title}
                  </span>
                </label>
                <button
                  className="text-red-500 hover:text-red-700 transition text-md cursor-pointer hover:scale-110"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-1.5 border rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-1.5 border rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
