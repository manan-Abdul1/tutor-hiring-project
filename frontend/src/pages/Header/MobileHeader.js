import React from 'react'
import { Link } from 'react-router-dom'

const MobileHeader = ({ currentUser, toggleMenu, showMenu, handleLogout }) => {
  return (
    <>
      <div className="md:hidden mobile-menu p-7">
        <Link to='/home'
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
        <div className="py-3 flex justify-between ">
          {currentUser.role !== 'tutor' && (
              <Link to='/tutors'
                className="py-2 px-4 border border-green-500 text-green-500 font-semibold rounded-lg shadow-md transition duration-300">
                Hire a Teacher
              </Link>
            )}
          {currentUser && (
            <div className="relative">
              <button
                className="py-2 px-3 font-medium"
                onClick={toggleMenu}
              >
                {currentUser.name}
                <i className="fa-solid fa-user ml-1"></i>
                <i className="fa-solid fa-caret-down mx-1"></i>
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
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
      </div>
    </>
  )
}

export default MobileHeader
