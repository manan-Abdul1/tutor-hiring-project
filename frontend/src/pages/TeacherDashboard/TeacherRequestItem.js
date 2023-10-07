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

  const formatTiming = (timestamp) => {
    const dateTime = new Date(timestamp);
    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0'); 
    const year = dateTime.getFullYear();
    
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    const hours12 = hours % 12 || 12;

    return `${day}/${month}/${year} ${hours12}:${minutes} ${ampm}`;
  };
  let statusColorClass = "";

  if (status === "accepted") {
    statusColorClass = "text-green-500";
  } else if (status === "rejected") {
    statusColorClass = "text-red-500";
  } else if (status === "completed") {
    statusColorClass = "text-blue-500";
  }

  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <div>
        <p className="text-black mb-2">Name:
                <span className="text-gray-500 font-bold">
                  {" "}{studentName}
                </span>
              </p>
              <p className="text-black mb-2">Topic:
            <span className="text-gray-500 font-bold">
              {" "}{topic}
            </span>
          </p>
          <p className="text-black mb-2">Payment:
            <span className="text-black font-bold">
              {" "}{payment}
            </span>
          </p>
        </div>
        <div>
        <p className="text-black font-medium mb-2">Status:
            <span className={`${statusColorClass} font-bold`}>
              {" "}{status}
            </span>
          </p>
          <p className="text-black font-medium mb-2">Timing:
            <span className="text-gray-600 font-bold">
            {" "}{formatTiming(timing)}
            </span>
          </p>
        </div>
      </div>
      {
        status === "pending" && 
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
      }
    </li>
  );
};

export default TeacherRequestItem;
