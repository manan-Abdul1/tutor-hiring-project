import React, { useState } from "react";

const StepOne = ({ formData, setFormData, handleNextStep }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleNextStep();
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "Please enter your first name";
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Please enter your last name";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email address";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2">
          Step One: Personal Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              className={`${
                errors.firstName ? "border-red-500" : ""
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              className={`${
                errors.lastName ? "border-red-500" : ""
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={`${
                errors.email ? "border-red-500" : ""
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex items-center justify-between">
          <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
            Next
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};
export default StepOne;
