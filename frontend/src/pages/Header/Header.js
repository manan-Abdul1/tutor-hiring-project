import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();


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
              <Link to="/" className="flex items-center py-4 px-2">
<i class="fa-solid fa-user-graduate fa-beat fa-3x text-green-500" ></i>
                {/* <img src="https://wallpaper.dog/large/20591261.jpg" width={30 }/> */}
                {/* <img src="/assets/home-logo.png" alt="home-logo" width={30}/> */}
                {/* <span className="font-semibold text-gray-500 text-lg"> */}
                  {/* Navigation */}
                {/* </span> */}
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${
                  location.pathname === "/" ? "border-b-4 border-green-500" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/tutors"
                className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${
                  location.pathname === "/tutors"
                    ? "border-b-4 border-green-500"
                    : ""
                }`}
              >
                Tutors
              </Link>
              <Link
                to="/about"
                className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${
                  location.pathname === "/about"
                    ? "border-b-4 border-green-500"
                    : ""
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to='/login'
              className="py-2 px-2 font-medium text-gray-500 rounded hover:text-green-500 transition duration-300"
            >
            <i className="fa-solid fa-user mr-1"></i>
              Login
            </Link>
            <Link to='/registertutor'
              href=""
              className="py-2 px-2 font-medium bg-blue-500 text-white rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Register As Tutor
            </Link>
            <Link to='/tutors'
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-blue-400 transition duration-300"
            >
              Hire a Tutor
            </Link>
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
          <Link to='/'
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            Home
          </Link>
          <Link to='/tutors'
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            Tutors
          </Link>
          <Link to='/aboutus'
            className="block py-2 font-medium text-gray-500 hover:text-green-500 transition duration-300"
          >
            About Us
          </Link>
          <div className="py-3">
            <Link to='/registertutor'
              className="py-2 px-4 mr-4 bg-green-500 hover:bg-white hover:text-gray-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Register As Tutor
            </Link>
            <Link to='/tutors'
              className="py-2 px-4 border border-green-500 text-green-500 font-semibold rounded-lg shadow-md transition duration-300"
            >
              Hire a Teacher
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;
