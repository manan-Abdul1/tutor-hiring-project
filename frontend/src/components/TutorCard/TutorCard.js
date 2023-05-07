import React from 'react';

export default function TutorCard({ name, image, qualification, experience, classes, subjects, rating, age, verified, gender }) {
  const MAX_LENGTH = 20;

  const shortenText = (text) => {
    if (text.length <= MAX_LENGTH) {
      return text;
    }
    return text.slice(0, MAX_LENGTH) + '...';
  }
  
  return (
    <>
        
    <div className="relative mb-4 inline-block bg-white overflow-hidden rounded-md shadow-md hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <img className="object-cover absolute rounded-full top-1 left-20" src={image} alt={name} loading="lazy" />
      <div className="relative pt-32">
        {verified && <div className="absolute top-0 right-0 p-2 bg-green-500 rounded-bl-md">{verified ? 'Verified' : 'Not verified'}</div>}
      </div>
      <div className="px-4 py-2 bg-white">
        <h6 className="text-xl font-bold text-center">{name}</h6>
        <div className="flex justify-between">
            <div>
            {[...Array(5)].map((_, i) => (
                <i
                key={i}
                className={`fa fa-star${rating >= i + 1 ? '' : '-o'}`}
                style={{ color: rating >= i + 1 ? '#ffc107' : '' }}
                ></i>
            ))}
            </div>
            <span className=' font-bold'>{age}yr, {gender}</span>
        </div>
        <div className="mt-3">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left pr-4">Qualif:</th>
                <td className="text-right text-gray-600 ">{shortenText(qualification)}</td>
              </tr>
              <tr>
                <th className="text-left pr-4">Experience:</th>
                <td className="text-right text-gray-600 ">{experience}</td>
              </tr>
              <tr>
                <th className="text-left pr-4">Classes:</th>
                <td className="text-right text-gray-600 ">{shortenText(classes)}</td>
              </tr>
              <tr>
                <th className="text-left pr-4">Subjects:</th>
                <td className="text-right text-gray-600 ">{shortenText(subjects)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              View profile
            </button>
        {/* <a href="https://thetutors.pk/tutor/muneeb-ur-rehman-3043" className="px-4 py-2 text-white bg-blue-600 mr-2 rounded-md hover:bg-blue-700">View Profile</a> */}
        <button className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600" data-toggle="modal" data-target="#send-request-popup" data-tutor="NDQw" data-tutorname={name}>Hire Now</button>
        </div>
      </div>
    </div>
    </>
  );
}
