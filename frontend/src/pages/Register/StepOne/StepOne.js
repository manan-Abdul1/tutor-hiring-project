import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalInformation = ({ formData, setFormData, navigation }) => {
  const { name, emailAddress, password, confirmPassword, } = formData;
  const { next } = navigation;
  const [passwordError, setPasswordError] = useState('');
  // const [isFormValid, setIsFormValid] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();

      // Check if all required fields are filled
      // if (!name || !emailAddress || !password || !confirmPassword) {
      //   return;
      // }
  
     // Check if password meets the minimum length requirement
    //  if (password.length < 8) {
    //   toast.error('Password must be at least 8 characters long');
    //   return;
    // }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setPasswordError('');
    next();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
    // Check if all required fields are filled
    // const isFormFilled =
    //   formData.name !== '' &&
    //   formData.emailAddress !== '' &&
    //   formData.password !== '' &&
    //   formData.confirmPassword !== '';
  
    // setIsFormValid(isFormFilled);
  }
  
  

  return (
    <>
      <ToastContainer />
    <form className="flex flex-col shadow-2xl max-w-xl p-4 mx-auto items-center">
      <h1 className="text-2xl text-center text-green-700 font-bold mb-4">General Information</h1>
      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name: *</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete='off'
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={handleInputChange}
          //required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="emailAddress" className="block text-gray-700 font-bold mb-2">Email Address: *</label>
        <input
          autoComplete='off'
          id="emailAddress"
          name="emailAddress"
          type="email"
          className="shadow appearance-none border rounded w-full h-10 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={emailAddress}
          onChange={handleInputChange}
          //required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password: *</label>
        <input
          id="password"
          name="password"
          type="password"
          className="
          shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={handleInputChange}
          //required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password: *</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={confirmPassword}
          onChange={handleInputChange}
          //required
        />
      </div>
      {passwordError && (
        <p className="text-red-500 text-sm mb-4">{passwordError}</p>
      )}
      {/* { */}
        {/* isFormValid && ( */}
        <button
          className="bg-blue-500 ml-auto mt-2 text-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
              Next
        </button>

        {/* ) */}
      {/* } */}
        </form>
    </>
  );
}
export default PersonalInformation;