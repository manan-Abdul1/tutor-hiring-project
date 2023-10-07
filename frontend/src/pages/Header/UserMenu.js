// UserMenu.js
import React from "react";
import { Link } from "react-router-dom";

const UserMenu = ({ currentUser, toggleMenu, handleLogout, showMenu }) => {
  return (
    <div className="relative">
      <button className="py-2 px-3 font-medium" onClick={toggleMenu}>
        {currentUser.name}
        <i className="fa-solid fa-user ml-1"></i>
        <i className="fa-solid fa-caret-down mx-1"></i>
      </button>
      {showMenu && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
          style={{ zIndex: 9999 }}
        >
          <Link
            to="/profile"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Profile
          </Link>
          <Link
            to={`${currentUser.role !== "tutor" ? "/student-scheduled-meetings" : "/teacher-scheduled-meetings"} `}
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Meetings
          </Link>
          <Link
            id="logout-link"
            href="/login"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
