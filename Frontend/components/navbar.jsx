import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-black flex gap-4 border-b-2 border-gray-300">
      <Link to="/">Home</Link>
      <Link to="/todolist">Todo List</Link>
    </nav>
  );
};

export default Navbar;
