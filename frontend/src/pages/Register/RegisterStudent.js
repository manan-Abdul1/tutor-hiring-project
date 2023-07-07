import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!name || !email || !password || !confirmPassword) {
      // Display an error message or perform any other necessary actions
      toast.error('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      // Display an error message or perform any other necessary actions
      toast.error('Passwords do not match');
      return;
    }
    // if(password.length <= 8){
    //   toast.error("Enter 8 digits Passowrd");
    //   return;
    // } 

    // Create an object with the form data
    const formData = {
      name,
      email,
      password,
    };

    // Send the form data to the server for student registration
    axios
    .post('http://localhost:5500/api/users/register', formData)
    .then((response) => {
      console.log('Student registration successful:', response.data);
      toast.success('Registration successful. Please log in.');
    })
    .catch((error) => {
      console.error('Student registration error:', error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error occurred during student registration');
      }
    });
  };

  return (
    <>
      <ToastContainer />
     <div className="homepage min-h-screen bg-gray-100 flex items-center justify-center">
     <div className="max-w-md w-full bg-white mx-auto p-6 rounded shadow-2xl">
     <h2 className="text-3xl  font-bold mb-4">Register as Student</h2>
       <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name*
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" required>
            Email*
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password*
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Confirm Password*
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Enter your Confirm password"
            required
            autoComplete='off'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 ml-auto mt-2 text-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default RegisterStudent