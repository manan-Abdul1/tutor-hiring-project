import React, { useState } from 'react';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import PersonalInformation from './StepOne/StepOne';

const RegisterTutor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    gender:'',
    bio: '',
    location:'',
    language:'',
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
    <div className="my-12">
      {currentStep === 1 && (
        <PersonalInformation
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          navigation={navigation}
          // handleNextStep={handleNextStep}
        />
      )}
      </div>
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
