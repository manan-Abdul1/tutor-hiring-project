import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Navigation
                </span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
              </div>
              <a
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href=""
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-white hover:text-black transition duration-300"
            >
              Sign Up
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
                  showMenu ? "hidden" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
                  showMenu ? "" : "hidden"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden mobile-menu p-7">
          <a
            href=""
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            Home
          </a>
          <a
            href=""
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            Services
          </a>
          <a
            href=""
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            About
          </a>
          <a
            href=""
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            Contact Us
          </a>
          <div className="py-3">
            <a
              href=""
              className="py-2 px-4 mr-4 bg-green-500 hover:bg-white text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Sign Up
            </a>
            <a
              href=""
              className="py-2 px-4 border border-green-500 text-green-500 font-semibold rounded-lg shadow-md transition duration-300"
            >
              Log In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;
