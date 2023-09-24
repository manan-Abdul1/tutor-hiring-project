import React from "react";

const TeacherRequestItem = ({ request }) => {
  const { studentId, payment, topic, status, timing } = request;
  const studentName = studentId ? studentId.name : "Unknown"; 
  const handleAccept = () => {
    // Handle accept logic here
    console.log("Request accepted");
  };

  const handleReject = () => {
    // Handle reject logic here
    console.log("Request rejected");
  };

  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{studentName}</h3>
          <p className="text-gray-600">Topic {topic}</p>
          <p className="text-gray-600 font-bold">Payment {payment}</p>
        </div>
        <div>
          <p className="text-gray-600">Status: {status}</p>
          <p className="text-gray-600">Timing: {timing}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </li>
  );
};

export default TeacherRequestItem;
