import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white p-4 text-black flex gap-4 border-b-2 border-gray-300">
      <Link
        to="/"
        className={`px-3 py-2 rounded-md ${
          location.pathname === "/" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/todolist"
        className={`px-3 py-2 rounded-md ${
          location.pathname === "/todolist" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Todo List
      </Link>
    </nav>
  );
};

export default Navbar;
