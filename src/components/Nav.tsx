import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-gray-200 border-b border-gray-700 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold">andrewcwhy</p>
        <div className="space-x-4">
          <Link to="/" className="text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-400 hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-blue-400 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
