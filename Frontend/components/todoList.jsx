import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [filterPriority, setFilterPriority] = useState("");

  const debounceRef = useRef(null);

  const fetchTodos = async (query) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/todos/getall`,
        {
          params: { query, priority: filterPriority },
        }
      );
      setTodos(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Debounce further API calls
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchTodos(value);
    }, 500);
  };

  useEffect(() => {
    fetchTodos(searchQuery);
  }, [filterPriority]);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/todos/add`, {
        title: newTodo,
        priority,
      });
      setNewTodo("");
      setTimeout(() => {
        toast.success("Todo added successfully");
      }, 1000);
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

  //PAGINATION
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  //UPLOAD BULK DATA
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warning("Please select an Excel file");
      return;
    }

    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = async (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);

      for (const row of data) {
        if (!row.title || !["HIGH", "MEDIUM", "LOW"].includes(row.priority)) {
          console.error("Invalid row", row);
          continue;
        }

        await fetch(`${import.meta.env.VITE_API_URL}/todos/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: row.title, priority: row.priority }),
        });
      }

      toast.success("Todo added successfully");
      setTimeout(() => {
        fetchTodos();

        setFile(null); // Clear the file state
        document.querySelector("input[type='file']").value = "";
      }, 1000);
    };
  };


  //SELECT ALL CHECKBOXES AND DELETE SELECTED TODOS
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTodos([]);
    } else {
      setSelectedTodos(todos.map((todo) => todo.id));
    }
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (id) => {
    setSelectedTodos((prev) =>
      prev.includes(id) ? prev.filter((todoId) => todoId !== id) : [...prev, id]
    );
  };

  const deleteSelectedTodos = async () => {
    if (selectedTodos.length === 0) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/todos/deleteAll`, {
        data: { ids: selectedTodos },
      });
      setTodos((prev) =>
        prev.filter((todo) => !selectedTodos.includes(todo.id))
      );
      setSelectedTodos([]);
      setSelectAll(false);
      toast.success("All todos deleted successfully");
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todos:", error);
    }
  };

  return (
    <div className="p-6 w-[50%] mx-auto bg-white shadow-xl rounded-lg mt-10 border border-b-2 border-gray-900">
      <h1 className="text-3xl font-bold text-black mb-6 text-center border-b-2 border-gray-200 pb-2">
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
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
          required
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value=""  disabled>
            Select Priority
          </option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        <button
          className="bg-blue-800 font-medium hover:bg-blue-900 text-white px-10 py-0 rounded cursor-pointer transition"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>
      <div className="p-4 border rounded-md shadow-md w-full border-b-2 mx-auto my-10">
        <h2 className="text-lg font-bold mb-4">Upload Excel File</h2>
        <div className="flex items-center  gap-2">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className=" w-full border-2  border-gray-200 px-4 py-2 rounded "
          />
          <button
            onClick={handleUpload}
            className="bg-blue-800 text-white t px-4 py-2 font-medium rounded hover:bg-blue-900 cursor-pointer transition"
          >
            UPLOAD
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="">All</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      {/* Todo List */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden my-5">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-6 text-left">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-800"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Priority</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-gray-500 text-center py-4">
                No todos found. Start adding some!
              </td>
            </tr>
          ) : (
            currentTodos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-800"
                    checked={selectedTodos.includes(todo.id)}
                    onChange={() => handleCheckboxChange(todo.id)}
                  />
                </td>
                <td className="py-3 px-6">{todo.title}</td>
                <td className="py-3 px-6">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20">
                    {todo.priority}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 transition text-md cursor-pointer hover:scale-110"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {currentTodos.length > 0 && (
        <button
          onClick={deleteSelectedTodos}
          className="border border-b-2 border-red-500 px-4 py-1.5 text-red-500 hover:bg-red-500 hover:text-white transition font-medium"
        >
          Delete Selected
        </button>
      )}
      {/* Pagination */}
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
  );
};

export default TodoList;
