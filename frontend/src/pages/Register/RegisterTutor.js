import React, { useState } from 'react';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import PersonalInformation from './StepOne/StepOne';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterTutor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    address: '',
    gender: '',
    age: '',
    timing: '',
    experience: '',
    currentTeachInstitute: '',
    alumni: '',
    education: '',
    city: '',
    bio: '',
    classes: [],
    subjects: [],
    allSubjectFee: '',
    perSubjectFee: '',
    location: '',
  });
  const [imageUrl, setImageUrl] = useState();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  console.log(imageUrl, 'imageUrl')
  const handleFormSubmit = async () => {
    // Create an object with the form data
    const requestData = imageUrl === undefined ? formData : { ...formData, profileImageUrl: imageUrl };

    try {
      // Send the form data to the server for student registration
      const response = await axios.post('http://localhost:5500/api/tutors/register', requestData);
      console.log('Student registration successful:', response.data);
      toast.success('Registration successful. Please log in.');
    } catch (error) {
      console.error('Student registration error:', error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error occurred during student registration');
      }
    }

    console.log(formData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit();
  };

  const navigation = {
    previous: handlePrevStep,
    next: handleNextStep,
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full">
          {currentStep === 1 && (
            <PersonalInformation
              formData={formData}
              setFormData={setFormData}
              navigation={navigation}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              formData={formData}
              setFormData={setFormData}
              navigation={navigation}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              formData={formData}
              setFormData={setFormData}
              navigation={navigation}
              handleSubmit={handleSubmit}
              setImageUrl={setImageUrl}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterTutor;