import React from 'react';

const StepThree = ({ formData, setFormData, navigation }) => {
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
    <form className="max-w-fit mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center text-green-600 font-bold mb-8">Areas & Subjects</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="class" className="block text-gray-700 font-bold mb-2">Select Class*</label>
          <select name="class" id="class" className="w-full p-2 rounded border border-gray-400">
            <option value="">Select Class</option>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="science">Science</option>
          </select>
        </div>

        <div>
          <label htmlFor="subjects" className="block text-gray-700 font-bold mb-2">Select Subjects*</label>
          <select name="subjects" id="subjects" className="w-full p-2 rounded border border-gray-400">
            <option value="">Select Subjects </option>
            <option value="algebra">Algebra</option>
            <option value="calculus">Calculus</option>
            <option value="grammar">Grammar</option>
            <option value="literature">Literature</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="allSubjectFee" className="block text-gray-700 font-bold mb-2">All Subject Fee*</label>
          <input type="text" name="allSubjectFee" id="allSubjectFee" className="w-full p-2 rounded border border-gray-400" />
        </div>

        <div>
          <label htmlFor="perSubjectFee" className="block text-gray-700 font-bold mb-2">Per Subject Fee</label>
          <input type="text" name="perSubjectFee" id="perSubjectFee" className="w-full p-2 rounded border border-gray-400" />
        </div>
      </div>

      <h1 className="text-lg font-bold mb-2">Preferred Location</h1>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Enter Location*</label>
        <input type="text" name="location" id="location" className="w-full p-2 rounded border border-gray-400" />
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
}
export default StepThree;