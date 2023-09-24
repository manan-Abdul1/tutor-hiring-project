import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/auth/authSlice";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
    dispatch(logOut());
  }
  console.log(isMobile, 'is Mobile')
  console.log(showMenu, 'showMenu')
  console.log(currentUser, 'current User')

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/home" className="flex items-center py-4 px-2">
                <i className="fa-solid fa-user-graduate fa-beat fa-3x text-green-500"></i>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {currentUser.role === 'tutor' && (
                <>
                  <Link
                    to="/teacher-home"
                    className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${location.pathname === "/teacher-home" ? "border-b-4 border-green-500" : ""
                      }`}
                  >
                    Dashboard
                  </Link>
                
                </>
              )}
              {currentUser.role !== 'tutor' && (
                <>
                  <Link
                    to="/home"
                    className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${location.pathname === "/home" ? "border-b-4 border-green-500" : ""
                      }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/tutors"
                    className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${location.pathname === "/tutors" ? "border-b-4 border-green-500" : ""
                      }`}
                  >
                    Tutors
                  </Link>
                </>

              )}
              <Link
                to="/about"
                className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${location.pathname === "/about" ? "border-b-4 border-green-500" : ""
                  }`}
              >
                About Us
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center ">
            {currentUser.role !== 'tutor' && (
              <Link to="/tutors" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-blue-400 transition duration-300">
                Hire a Tutor
              </Link>
            )}
            <Link to="/tutors" className="transition-bg hover:text-green-500 ml-5">
              <i className="fa-regular fa-bell fa-lg"></i>
            </Link>

            {currentUser && (
              <div className="relative">
                <button className="py-2 px-3 font-medium" onClick={toggleMenu}>
                  {currentUser.name}
                  <i className="fa-solid fa-user ml-1"></i>
                  <i className="fa-solid fa-caret-down mx-1"></i>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg" style={{ zIndex: 9999 }}>
                    <Link
                      to="/profile"
                      className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Profile
                    </Link>
                    <a
                      id="logout-link"
                      href="/login"
                      className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setMobileToggle(!mobileToggle)}
            >
              <svg
                className={`w-6 h-6 text-gray-500 hover:text-green-500 ${mobileToggle ? "hidden" : ""
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
                className={`w-6 h-6 text-gray-500 hover:text-green-500 ${mobileToggle ? "" : "hidden"
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
      {isMobile && mobileToggle && (
        <MobileHeader
          showMenu={showMenu}
          handleLogout={handleLogout}
          toggleMenu={toggleMenu}
          currentUser={currentUser}
        />
      )}
    </nav>
  );
}

export default Header;
