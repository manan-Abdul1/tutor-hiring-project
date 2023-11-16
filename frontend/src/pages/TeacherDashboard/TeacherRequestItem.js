import axios from "axios";
import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAccepted,
  requestRejected,
} from "../../redux/features/requests/requestSlice";
import { v4 as uuidv4 } from "uuid";

const TeacherRequestItem = ({ request }) => {
  const {
    _id,
    studentId,
    topic,
    status,
    timing,
    payment,
    location,
    message,
    preferredLocation,
  } = request;
  const studentName = studentId ? studentId.name : "Unknown";
  const requestsData = useSelector((state) => state.requests.requests);
  const dispatch = useDispatch();
  const uuid = uuidv4();

  const [accepting, setAccepting] = useState(false);
  const [rejecting, setRejecting] = useState(false);

  const handleAccept = () => {
    setAccepting(true);

    axios
      .put(`http://localhost:5500/api/hiringRequest/acceptRequest?id=${_id}`, {
        videoId: uuid,
      })
      .then((response) => {
        console.log('Request accepted:', response.data);
        dispatch(requestAccepted(response.data.updatedRequest));
      })
      .catch((error) => {
        console.error('Error accepting request:', error);
      })
      .finally(() => {
        setAccepting(false);
      });
  };

  const handleReject = () => {
    setRejecting(true);

    axios
      .put(`http://localhost:5500/api/hiringRequest/rejectRequest?id=${_id}`)
      .then((response) => {
        console.log('Request rejected:', response.data);
        dispatch(requestRejected(response.data.updatedRequest));
      })
      .catch((error) => {
        console.error('Error rejecting request:', error);
      })
      .finally(() => {
        setRejecting(false);
      });
  };

  const formatTiming = (timestamp) => {
    const dateTime = new Date(timestamp);
    const day = String(dateTime.getDate()).padStart(2, "0");
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const year = dateTime.getFullYear();

    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

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
          <p className="text-black mb-2">
            Name:
            <span className="text-gray-500 font-bold"> {studentName}</span>
          </p>
          <p className="text-black mb-2">
            Topic:
            <span className="text-gray-500 font-bold"> {topic}</span>
          </p>
          <p className="text-black mb-2">
            Payment:
            <span className="text-black font-bold"> {payment}</span>
          </p>
        </div>
        <div>
          <p className="text-black font-medium mb-2">
            Status:
            <span className={`${statusColorClass} font-bold`}> {status}</span>
          </p>
          <p className="text-black font-medium mb-2">
            Timing:
            <span className="text-gray-600 font-bold">
              {" "}
              {formatTiming(timing)}
            </span>
          </p>
          <p className="text-black">
            Meeting:{" "}
            <span className="font-bold">{location?.toUpperCase()}</span>
          </p>
        </div>
      </div>
      {message && (
        <p className="text-black">
          Message: {' '} 
          <span className="font-bold"> {message}</span>
        </p>
      )}
      <div className="mt-1">
        {(location === "physical" || location === "both") && (
          <p className="text-black">Location: {' '} {preferredLocation}</p>
        )}
      </div>
      {status === 'pending' && (
        <div className="flex justify-end mt-4">
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 ${accepting && 'opacity-50 cursor-not-allowed'}`}
            onClick={handleAccept}
            disabled={accepting || rejecting}
          >
            {accepting ? 'Accepting...' : 'Accept'}
          </button>
          <button
            className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ${rejecting && 'opacity-50 cursor-not-allowed'}`}
            onClick={handleReject}
            disabled={accepting || rejecting}
          >
            {rejecting ? 'Rejecting...' : 'Reject'}
          </button>
        </div>
      )}
    </li>
  );
};

export default TeacherRequestItem;