import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markMeetingAsCompleted } from "../../redux/features/requests/requestSlice";

const MeetingItem = ({ meeting }) => {
  const userRole = useSelector((state) => state.auth.userData.role);
  const { _id, studentId, teacherId, topic, status, timing, payment } = meeting;
  const dispatch = useDispatch();

  const studentName = studentId ? studentId.name : "Unknown";
  const teacherName = teacherId ? teacherId.name : "Unknown";
  
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
  const handleCompleteMeeting = () => {
    if (userRole === "user") {
      axios
        .put(
          `http://localhost:5500/api/hiringRequest/updateRequestStatusForUser?id=${_id}`
        )
        .then((response) =>
          dispatch(markMeetingAsCompleted(_id))
        )
        .catch((error) => console.log(error));
    } else {
      axios
        .put(
          `http://localhost:5500/api/hiringRequest/updateRequestStatusForTutor?id=${_id}`
        )
        .then((response) =>
          dispatch(markMeetingAsCompleted(_id))
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex justify-between flex-wrap">
        <div>

          {
            userRole === 'user' ?
              <p className="text-black mb-2">Name:
                <span className="text-gray-500 font-bold">
                  {" "}{teacherName}
                </span>
              </p> :
              <p className="text-black mb-2">Name:
                <span className="text-gray-500 font-bold">
                  {" "}{studentName}
                </span>
              </p>
          }
          <p className="text-black mb-2">Topic:
            <span className="text-gray-500 font-bold">
              {" "}{topic}
            </span>
          </p>
        </div>
        <div>
          <p className="text-black font-medium mb-2">Status:
            <span className="text-green-500 font-bold">
              {" "}{status}
            </span>
          </p>
          <p className="text-black font-medium mb-2">Timing:
            <span className="text-gray-500 font-bold">
            {" "}{formatTiming(timing)}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-2 flex-wrap">
        <p className="text-black">Payment: <span className="font-bold"> {payment} </span></p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
          onClick={handleCompleteMeeting}
        >
          Meeting Completed
        </button>
      </div>
    </li>
  );
};

export default MeetingItem;
