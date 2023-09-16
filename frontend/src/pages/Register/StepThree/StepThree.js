import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const StepThree = ({ formData, setFormData, navigation, handleSubmit, setImageUrl }) => {
  const { previous } = navigation;
  const [subjects, setSubjects] = useState(formData.subjects || []);
  const [classes, setClasses] = useState(formData.classes || []);
  const [newSubject, setNewSubject] = useState('');
  const [newClass, setNewClass] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddSubject = () => {
    if (newSubject.trim() !== '') {
      setSubjects((prevSubjects) => {
        const updatedSubjects = [...prevSubjects, newSubject];
        setFormData((prevState) => ({
          ...prevState,
          subjects: updatedSubjects,
        }));
        return updatedSubjects;
      });
      setNewSubject('');
    }
  };

  const handleRemoveSubject = (index) => {
    setSubjects((prevSubjects) => {
      const updatedSubjects = prevSubjects.filter((_, i) => i !== index);
      setFormData((prevState) => ({
        ...prevState,
        subjects: updatedSubjects,
      }));
      return updatedSubjects;
    });
  };

  const handleAddClass = () => {
    if (newClass.trim() !== '') {
      setClasses((prevClasses) => {
        const updatedClasses = [...prevClasses, newClass];
        setFormData((prevState) => ({
          ...prevState,
          classes: updatedClasses,
        }));
        return updatedClasses;
      });
      setNewClass('');
    }
  };

  const handleRemoveClass = (index) => {
    setClasses((prevClasses) => {
      const updatedClasses = prevClasses.filter((_, i) => i !== index);
      setFormData((prevState) => ({
        ...prevState,
        classes: updatedClasses,
      }));
      return updatedClasses;
    });
  };
  const handleImageUpload = async (selectedImage) => {
    if (selectedImage) {
      const usersImageUrl = new FormData();
      usersImageUrl.append('file', selectedImage);
      usersImageUrl.append('upload_preset', 'ymnrcjst');

      try {
        const uploadResponse = await axios.post('https://api.cloudinary.com/v1_1/dipdjdhic/image/upload', usersImageUrl);
        const imageUrl = uploadResponse.data.secure_url;
        setImageUrl(imageUrl)
      } catch (error) {
        toast.error('Error uploading image. Please try again.');
      }
    }
  };

  // const handleSubmitForm = (event)=>{
  //   event.preventDefault();
  //   handleSubmit();
  // }
  return (
    <div className="mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mb-4 w-[700px]">
      <h1 className="text-2xl text-center text-green-600 font-bold mb-8">Areas & Subjects</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="class" className="block text-gray-700 font-bold mb-2">
              Select Class*
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="class"
                id="class"
                className="w-full p-2 rounded border outline-none border-gray-400"
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={handleAddClass}
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="subjects" className="block text-gray-700 font-bold mb-2">
              Select Subjects*
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full p-2 rounded border outline-none border-gray-400"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={handleAddSubject}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {/* Classes */}
        {classes.length > 0 && (
          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2">Selected Classes:</label>
            <div className="flex flex-wrap">
              {classes.map((classItem, index) => (
                <div key={index} className="mx-2 mb-4">
                  <div className="border rounded-md border-gray-600 p-2 flex items-center">
                    <span className="mr-2">{classItem}</span>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-1 px-2 rounded"
                      onClick={() => handleRemoveClass(index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Subjects */}
        {subjects.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Selected Subjects:</label>
            <div className="flex flex-wrap">
              {subjects.map((subject, index) => (
                <div key={index} className="mx-2 mb-4">
                  <div className="border rounded-md border-gray-600 p-2 flex items-center">
                    <span className="mr-2">{subject}</span>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-1 px-2 rounded"
                      onClick={() => handleRemoveSubject(index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* All Subject Fee && Per Subject Fee  */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="allSubjectFee" className="block text-gray-700 font-bold mb-2">
              All Subject Fee*
            </label>
            <input
              type="text"
              name="allSubjectFee"
              id="allSubjectFee"
              className="w-full p-2 rounded border border-gray-400"
              value={formData.allSubjectFee}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="perSubjectFee" className="block text-gray-700 font-bold mb-2">
              Per Subject Fee
            </label>
            <input
              type="text"
              name="perSubjectFee"
              id="perSubjectFee"
              className="w-full p-2 rounded border border-gray-400"
              value={formData.perSubjectFee}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Preferred Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Select Preferred Location*
          </label>
          <select
            name="location"
            id="location"
            className="w-full p-2 rounded border border-gray-400"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="">Select Preferred Location</option>
            <option value="physical">Physical</option>
            <option value="online">Online</option>
            <option value="both">Both</option>
          </select>
        </div>
        {/* Uplaod Image */}
        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-gray-700 font-bold mb-2">
            Profile Image (Optional)
          </label>
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            accept="image/*"
            onChange={(e) => {
              const selectedImage = e.target.files[0];
              // Handle the selected image here without adding it to formData
              handleImageUpload(selectedImage);
            }}
          />
        </div>


        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={previous}
          >
            Previous
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          // onClick={handleSubmitForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
