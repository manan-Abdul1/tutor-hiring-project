import React from 'react';
import './Aboutus.css';
import aboutuspic from './about us img/about1.jpg'; 
const Aboutus = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center mb-5">
        <img src={aboutuspic} alt="faq" className="w-2/3 rounded-md shadow-gray-500 mt-6 shadow-2xl h-[350px]" />
          {/* https://media.istockphoto.com/id/1221847261/photo/school-girl-student-studying-with-online-teacher-on-computer-screen.jpg?s=612x612&w=0&k=20&c=HKxltreNEZtV9En2F-S9wVjS0YOe7GTH-cO-t4LN0x4= */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <div className="col-md-8 m-auto mt-5">
        <h1 className="heading"><b>INTRODUCTION</b></h1>
        <p className="mt-4">
          Thetutors.pk assumes that if someone invests in studies, he or she will get a better return on that investment. We help students search for the best tutor in their area. We want their bright future so that they can achieve their goals. Their dreams are our dreams. If a student wants to achieve higher grades in studies, then we are here to help them. We have set up this platform for parents who take care of their child's study. We believe all the students and tutors will benefit from our site.
        </p>
      </div>
      <div className="col-md-8 m-auto mt-4">
        <h1 className="heading">
          <b>OUR PURPOSE IS TO CONNECT TUTORS AND STUDENTS</b>
        </h1>
        <p className="mt-4">
          Our site creates opportunities for tutors who can serve their skills at thetutors.pk. We had started this site to overcome difficulties such as if someone had hired a home tutor and they had no trust in the tutor because the academy in which that tutor is registered doesn't exist. One more clause is that in the case of local academies, you don't have any option for selecting a tutor according to your requirements, so that's why we have set up this platform to give ease to students and parents so that they can find a home tutor which suits them best.
        </p>
      </div>
      <div className="col-md-8 m-auto mt-4">
        <h1 className="heading">
          <b>BENEFITS FOR TUTORS</b>
        </h1>
        <p className="mt-4">
          <ul className='list-disc '>
            <li className="text-green-600 mb-2 ml-4">
              <div className="text-black ">
                Local academies charge 70% commission from the first fee, but The tutors academy charges 50% commission from the first fee.
              </div>
            </li>
            <li className="text-green-600 mb-2 ml-4">
              <div className="text-black ">
                The tutors can find all tuitions according to their area of service in their (Tutor) panel.
              </div>
            </li>
            <li className="text-green-600 mb-2 ml-4">
              <div className="text-black ">
                If any student searches for tutors within your area, your profile will be shown on the search page.
              </div>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
