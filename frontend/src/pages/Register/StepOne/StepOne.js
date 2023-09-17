import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalInformation = ({ formData, setFormData, navigation }) => {
  const { name, phone, email, cnic, password, confirmPassword, address, gender, age } = formData;
  const { next } = navigation;

  const handleNext = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    next();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'gender') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value === 'male' ? 'male' : 'female',
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  return (
    <>
      <ToastContainer />
      <form className="bg-white rounded-lg flex flex-col shadow-2xl max-w-2xl p-4 mx-auto items-center">
        <h1 className="text-2xl text-center text-green-700 font-bold mb-4">Personal Information</h1>
        <div className="grid w-full grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name: *</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete='off'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone: *</label>
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete='off'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email: *</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete='off'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="cnic" className="block text-gray-700 font-bold mb-2">CNIC: *</label>
            <input
              id="cnic"
              name="cnic"
              type="text"
              autoComplete='off'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cnic}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password: *</label>
            <input
              id="password"
              name="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password: *</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address: *</label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete='off'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-4 mb-4">
          <div className='flex items-center'>
            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2 mx-2">Gender: </label>
            <div className='pb-1'>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleInputChange}
              />
              <label htmlFor="male" className="ml-2 mr-4">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleInputChange}
              />
              <label htmlFor="female" className="ml-2">Female</label>
            </div>
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age: *</label>
            <input
              id="age"
              name="age"
              type="text"
              autoComplete='off'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={age}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 ml-auto mt-2 text-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          Next
        </button>
      </form>
    </>
  );
}

export default PersonalInformation;
