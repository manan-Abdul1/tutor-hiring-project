import React from 'react';

const StepTwo = ({ formData, setFormData, navigation }) => {
  const { previous, next } = navigation;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl text-green-600 font-bold mb-3 text-center">About Teaching</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="timing">
                Timing:
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="timing"
                id="timing"
                value={formData.timing}
                onChange={handleInputChange}
              >
                <option value="">Select Timing</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
                Experience:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="experience"
                id="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="currentTeachInstitute">
                Current Institute (Teaching):
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="currentTeachInstitute"
                id="currentTeachInstitute"
                value={formData.currentTeachInstitute}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="currentStudyInstitute">
                Alumni:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="alumni"
                id="alumni"
                value={formData.alumni}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
                Education:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="education"
                id="education"
                value={formData.education}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                City:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
              Details (Bio):
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="bio"
              id="bio"
              rows="5"
              value={formData.bio}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={previous}
            >
              Previous
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={next}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
