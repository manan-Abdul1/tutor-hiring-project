import React, { useState } from "react";
import RegisterTutor from "./RegisterTutor"; // Import your RegisterTutor component
import Login from "../Login/Login";
import RegisterStudent from "./RegisterStudent";

function Form({setIsRegistered}) {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [registerType, setRegisterType] = useState(null);

  const handleRegisterClick = (type) => {
    setShowRegistration(true);
    setShowSignIn(false);
    setRegisterType(type);
  };

  const handleSignInClick = () => {
    setShowRegistration(false);
    setShowSignIn(true);
  };

  return (
    <>
      {(!showRegistration && !showSignIn) && (
        <div className="homepage min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-md w-full bg-white mx-auto p-6 rounded shadow-md">
            <h1 className="text-3xl text-center mb-7">Welcome to Our Website</h1>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRegisterClick("student")}
              >
                Register as Student
              </button>
              <button
                className="bg-green-500 font-bold hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={() => handleRegisterClick("tutor")}
              >
                Register as Tutor
              </button>
              <button
                className="bg-gray-500 font-bold hover:bg-gray-600 text-white py-2 px-4 rounded"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
      {showRegistration && registerType === "tutor" && (
            <RegisterTutor />
      )}
      {showRegistration && registerType !== "tutor" && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-6 rounded shadow-2xl">
            <RegisterStudent/>
          </div>
        </div>
      )}
      {showSignIn && (
          <Login setIsRegistered={setIsRegistered} />
      )}
    </>
  );
}

export default Form;
