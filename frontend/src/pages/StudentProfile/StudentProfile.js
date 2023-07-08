import React, { useState } from "react";
import axios from "axios";

function StudentProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentuser"));
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState(currentUser.id);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = {
      id: studentId,
      email: email,
      password: password,
      name: name,
    };

    // Send a PUT request to update the student using Axios
    axios
      .put(`http://localhost:5500/api/users/students/${studentId}`, updatedStudent)
      .then((response) => {
        console.log("Student updated:", response.data);
        // Handle any necessary actions after successful update
        // Example: localStorage.setItem("currentuser", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error updating student:", error);
        // Handle error case
      });
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded shadow">
      <h1 className="text-2xl text-center text-cyan-700  font-bold mb-4">Student Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default StudentProfile;
