// TeacherHeader.js
import React from "react";
import { Link } from "react-router-dom";

const TeacherHeader = ({ location, currentUser, toggleNotifications, showNotifications, handleLogout }) => {
  return (
    <div>
      {/* Your teacher-specific header content */}
      <Link
        to="/teacher-home"
        className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${
          location.pathname === "/teacher-home"
            ? "border-b-4 border-green-500"
            : ""
        }`}
      >
        Dashboard
      </Link>
      {/* Add other teacher-specific links here */}
    </div>
  );
};

export default TeacherHeader;
