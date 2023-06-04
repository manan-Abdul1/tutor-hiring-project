import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsRegistered}) => {
  const [isStudent, setIsStudent] = useState(true);
  const navigate = useNavigate();


  const handleToggle = () => {
    setIsStudent(!isStudent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    setIsRegistered(true);
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white rounded-xl shadow-2xl w-96 h-[550px] shadow-gray-500 mt-5">
        <div className='loginhead bg-green-500 width-full h-[120px] rounded-t-xl'>
        <h1 className="font-bold text-4xl text-center text-white pt-[30px]">
          Login
        </h1>
        </div>
        
        <div className="flex mt-2 justify-center  p-8">
          <button
            className={` font-bold px-4 py-2 rounded-l-md ${isStudent ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
            onClick={handleToggle}
          >
            Student
          </button>
          <button
            className={`font-bold px-4 py-2 rounded-r-md ${!isStudent ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
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
              autoComplete='off'
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
              autoComplete='off'
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
              autoComplete='off'
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
              autoComplete='off'
            />
          </div>
        <div className='m-auto w-[100px] mt-4'>
          <button
            className="submit bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded-md mt-4 w-[100px]"
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
