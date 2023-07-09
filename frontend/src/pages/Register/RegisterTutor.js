import React, { useState } from 'react';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import PersonalInformation from './StepOne/StepOne';


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
    gender:'',
    age: '',
    timing:'',
    experience: '',
    currentTeachInstitute:'',
    alumni:'',
    education: '',
    city: '',
    bio: '',
    language:'',
    classes:[],
    subjects:[],
    allSubjectFee: '',
    perSubjectFee:'',
    location:'',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = () => {
    // Send form data to backend for storage
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
      <div className="my-12">
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
            handleSubmit={handleFormSubmit}
          />
        )}
      </div>
  );
};

export default RegisterTutor;