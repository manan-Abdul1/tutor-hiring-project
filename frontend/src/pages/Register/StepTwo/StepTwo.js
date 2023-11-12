// import React from 'react';

// const StepTwo = ({ formData, setFormData, navigation }) => {
//   const { previous, next } = navigation;

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="px-6 py-4">
//         <h2 className="text-2xl text-green-700 font-bold mb-3 text-center">About Teaching</h2>
//         <form>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="timing">
//                 Timing:
//               </label>
//               <select
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 name="timing"
//                 id="timing"
//                 value={formData.timing}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Timing</option>
//                 <option value="morning">Morning</option>
//                 <option value="afternoon">Afternoon</option>
//                 <option value="evening">Evening</option>
//                 <option value="night">Night</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
//                 Experience:
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="experience"
//                 id="experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="currentTeachInstitute">
//                 Current Institute (Teaching):
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="currentTeachInstitute"
//                 id="currentTeachInstitute"
//                 value={formData.currentTeachInstitute}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="currentStudyInstitute">
//                 Alumni:
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="alumni"
//                 id="alumni"
//                 value={formData.alumni}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
//                 Education:
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="education"
//                 id="education"
//                 value={formData.education}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
//                 City:
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="city"
//                 id="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
//               Details (Bio):
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="bio"
//               id="bio"
//               rows="5"
//               value={formData.bio}
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
//               onClick={previous}
//             >
//               Previous
//             </button>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//               onClick={next}
//             >
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StepTwo;



import React, { useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

const validationSchema = Yup.object({
  timing: Yup.string().required('Timing is required'),
  experience: Yup.string().required('Experience is required'),
  currentTeachInstitute: Yup.string().required('Current Teaching Institute is required'),
  alumni: Yup.string().required('Alumni is required'),
  education: Yup.string().required('Education is required'),
  city: Yup.string().required('City is required'),
  bio: Yup.string().required('Bio is required'),
});

const StepTwo = ({ formData, setFormData, navigation }) => {
  const { previous, next } = navigation;
  const [errors, setErrors] = useState({});

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((fieldError) => {
        newErrors[fieldError.path] = fieldError.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();

    if (isValid) {
      next();
    } else {
      // Display specific error messages for each field
      Object.keys(errors).forEach((fieldName) => {
        toast.error(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}: ${errors[fieldName]}`);
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl text-green-700 font-bold mb-3 text-center">About Teaching</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="timing">
                Timing:
              </label>
              <select
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors['timing'] ? 'border-red-500' : ''
                }`}
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
              {errors['timing'] && <p className="text-red-500 text-xs mt-1">{errors['timing']}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
                Experience:
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors['experience'] ? 'border-red-500' : ''
                }`}
                type="text"
                name="experience"
                id="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
              {errors['experience'] && <p className="text-red-500 text-xs mt-1">{errors['experience']}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
  <div>
    <label className="block text-gray-700 font-bold mb-2" htmlFor="currentTeachInstitute">
      Current Institute (Teaching):
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        errors['currentTeachInstitute'] ? 'border-red-500' : ''
      }`}
      type="text"
      name="currentTeachInstitute"
      id="currentTeachInstitute"
      value={formData.currentTeachInstitute}
      onChange={handleInputChange}
    />
    {errors['currentTeachInstitute'] && (
      <p className="text-red-500 text-xs mt-1">{errors['currentTeachInstitute']}</p>
    )}
  </div>
  <div>
    <label className="block text-gray-700 font-bold mb-2" htmlFor="alumni">
      Alumni:
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        errors['alumni'] ? 'border-red-500' : ''
      }`}
      type="text"
      name="alumni"
      id="alumni"
      value={formData.alumni}
      onChange={handleInputChange}
    />
    {errors['alumni'] && <p className="text-red-500 text-xs mt-1">{errors['alumni']}</p>}
  </div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
  <div>
    <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
      Education:
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        errors['education'] ? 'border-red-500' : ''
      }`}
      type="text"
      name="education"
      id="education"
      value={formData.education}
      onChange={handleInputChange}
    />
    {errors['education'] && <p className="text-red-500 text-xs mt-1">{errors['education']}</p>}
  </div>
  <div>
    <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
      City:
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        errors['city'] ? 'border-red-500' : ''
      }`}
      type="text"
      name="city"
      id="city"
      value={formData.city}
      onChange={handleInputChange}
    />
    {errors['city'] && <p className="text-red-500 text-xs mt-1">{errors['city']}</p>}
  </div>
</div>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
    Details (Bio):
  </label>
  <textarea
    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      errors['bio'] ? 'border-red-500' : ''
    }`}
    name="bio"
    id="bio"
    rows="5"
    value={formData.bio}
    onChange={handleInputChange}
  ></textarea>
  {errors['bio'] && <p className="text-red-500 text-xs mt-1">{errors['bio']}</p>}
</div>

          
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={previous}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleNext}
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
