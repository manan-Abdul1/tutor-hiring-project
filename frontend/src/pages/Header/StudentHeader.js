// StudentHeader.js
import React from "react";
import { Link } from "react-router-dom";

const StudentHeader = ({ location }) => {
  return (
    <>
      <Link
        to="/home"
        className={`py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300 ${
          location.pathname === "/home"
            ? "border-b-4 border-green-500"
            : ""
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
    </>
  );
};

export default StudentHeader;
