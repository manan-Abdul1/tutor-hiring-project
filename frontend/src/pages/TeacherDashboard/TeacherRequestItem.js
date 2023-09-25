import axios from "axios";
import React from "react";

const TeacherRequestItem = ({ request, teacherId }) => {
  const { _id, studentId, payment, topic, status, timing } = request;
  const studentName = studentId ? studentId.name : "Unknown";

  const handleAccept = () => {
    // Make an API call to update the request status as "accepted" and provide teacherId
    // Updated API call to include request ID in the URL path
    axios
      .put(`http://localhost:5500/api/hiringRequest/acceptRequest?id=${_id}`, {
        status: 'accepted',
        teacherId: teacherId, 
      })
      .then((response) => {
        // Handle success, you can show a success message or take further actions
        console.log('Request accepted:', response.data);

        // Optionally, send a reply to the student
        // sendReplyToStudent(requestId, 'accepted');
      })
      .catch((error) => {
        // Handle errors, display an error message, or log the error
        console.error('Error accepting request:', error);
      });

  };

  const handleReject = () => {
    axios
    .put(`http://localhost:5500/api/hiringRequest/rejectRequest?id=${_id}`, {
      status: 'accepted',
      teacherId: teacherId, 
    })
    .then((response) => {
      // Handle success, you can show a success message or take further actions
      console.log('Request accepted:', response.data);

      // Optionally, send a reply to the student
      // sendReplyToStudent(requestId, 'accepted');
    })
    .catch((error) => {
      // Handle errors, display an error message, or log the error
      console.error('Error accepting request:', error);
    });
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
