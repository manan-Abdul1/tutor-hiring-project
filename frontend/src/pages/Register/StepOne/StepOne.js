import React from 'react';

const PersonalInformation = ({ formData, setFormData, navigation }) => {
  const { name, address, emailAddress, password,
  confirmPassword,  phoneNumber, dateOfBirth, cnic } = formData;
  const { next } = navigation;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleNext = (e) => {
    e.preventDefault();
    next();
  }

  return (
    <form className="flex flex-col shadow-2xl max-w-xl p-4 mx-auto items-center">
      <h1 className="text-2xl mr-auto text-white px-5 rounded-xl bg-green-700 font-bold mb-8  p-3">General</h1>
      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name: *</label>
        <input
          id="name"
          name="name"
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="emailAddress" className="block text-gray-700 font-bold mb-2">Email Address:</label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={emailAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {/* <div className="w-full mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="cnic" className="block text-gray-700 font-bold mb-2">CNIC:</label>
        <input
          id="cnic"
          name="cnic"
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cnic}
          onChange={handleChange}
          required
          />
        </div> */}
        <button
          className="bg-blue-500 ml-auto text-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
              Next
        </button>
        </form>
  );
}
export default PersonalInformation;