import React from 'react';

const StepThree = ({ formData, setFormData, navigation }) => {
  const { firstName, lastName, email, phoneNumber, address, city, state, zipCode, bio, skills } = formData;

  const { previous, submit } = navigation;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to database
    alert('Form submitted successfully!');
  }

  const handlePrevious = () => {
    previous();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-8">Step Three</h1>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={bio}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills:</label>
        <textarea
          id="skills"
          name="skills"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={skills}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default StepThree;
