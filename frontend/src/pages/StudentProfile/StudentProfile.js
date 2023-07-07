import React, { useState } from "react";

function StudentProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentuser"));
  const [name, setName] = useState(currentUser.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name updated successfully!");
    // Update the student's name, e.g., send a request to the server or update the local storage
    // You can use the name state value here
    // Example: localStorage.setItem("currentuser", JSON.stringify({ ...currentUser, name }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
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
