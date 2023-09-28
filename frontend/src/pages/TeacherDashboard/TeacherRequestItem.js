import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAccepted, requestRejected } from "../../redux/features/requests/requestSlice";

const TeacherRequestItem = ({ request }) => {
  const { _id, studentId, payment, topic, status, timing } = request;
  const studentName = studentId ? studentId.name : "Unknown";
  const requestsData = useSelector(state=>state.requests.requests);
  const dispatch =useDispatch();

  console.log(requestsData,'requestdata')

  const handleAccept = () => {
    axios
      .put(`http://localhost:5500/api/hiringRequest/acceptRequest?id=${_id}`)
      .then((response) => {
        console.log('Request accepted:', response.data);
        dispatch(requestAccepted(response.data.updatedRequest))

      })
      .catch((error) => {
        // Handle errors, display an error message, or log the error
        console.error('Error accepting request:', error);
      });

  };

  const handleReject = () => {
    axios
    .put(`http://localhost:5500/api/hiringRequest/rejectRequest?id=${_id}`)
    .then((response) => {
      console.log('Request accepted:', response.data);
      dispatch(requestRejected(response.data.updatedRequest))

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
