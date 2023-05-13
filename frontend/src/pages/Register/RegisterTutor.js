import React, { useState } from 'react';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';

const RegisterTutor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend for storage
  };
  const navigation = {
    previous: handlePrevStep,
    next: handleNextStep
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          navigation={navigation}
        //   handleNextStep={handleNextStep}
        //   handlePrevStep={handlePrevStep}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          navigation={navigation}
        //   handlePrevStep={handlePrevStep}
        />
      )}
    </form>
  );
};

export default RegisterTutor;
