import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white p-4 text-black flex gap-4 border-b-2 border-gray-300">
      <Link
        to="/"
        className={`px-3 py-2 rounded-md ${
          location.pathname === "/" ? "border border-b-2 text-(--color-midnight) border-(--color-midnight) font-bold leading-relaxed" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/todolist"
        className={`px-3 py-2 rounded-md ${
          location.pathname === "/todolist" ? "border border-b-2 text-(--color-midnight) border-(--color-midnight) font-bold leading-relaxed" : ""
        }`}
      >
        Todo List
      </Link>
    </nav>
  );
};

export default Navbar;
