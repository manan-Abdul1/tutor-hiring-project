import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggle = () => {
    setIsStudent(!isStudent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white rounded-xl shadow-2xl w-96 h-[550px] shadow-gray-500 mt-5">
        <div className='loginhead  rounded-t-xl'>
        <h1 className="font-bold text-4xl text-center text-white pt-[30px]">
          Login
        </h1>
        </div>
        
        <div className="flex mt-2 justify-center  p-8">
  <button
    className={` font-bold px-4 py-2 rounded-l-md ${isStudent ? 'button-green' : 'button-gray'}`}
    onClick={handleToggle}
  >
    Student
  </button>
  <button
    className={`font-bold px-4 py-2 rounded-r-md ${!isStudent ? 'button-green' : 'button-gray'}`}
    onClick={handleToggle}
  >
    Tutor
  </button>
</div>

        <form onSubmit={handleSubmit}>
          <div className={`mt-2 ${isStudent ? '' : 'hidden'} m-auto w-[250px]`}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            <i className="fa-solid fa-user pr-2" style={{color: "#000000",}} /> Student Email
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={`mt-2 ${isStudent ? '' : 'hidden'} m-auto w-[250px]`}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            <i className="fa-solid fa-lock pr-2" style={{color: "#000000",}} /> Password
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className={`mt-2 ${!isStudent ? '' : 'hidden'} m-auto w-[250px]`}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            <i className="fa-solid fa-user pr-2" style={{color: "#000000",}} />Tutor Email
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full"
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={`mt-2 ${!isStudent ? '' : 'hidden'}  m-auto w-[250px]`}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            <i className="fa-solid fa-lock pr-2" style={{color: "#000000",}} />Password
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
        <div className='m-auto w-[100px] mt-4'>
          <button
            className="submit  text-white text-xl font-bold py-2 px-4 rounded-md mt-4 w-[100px]"
            type="submit"
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
