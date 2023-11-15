import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markMeetingAsCompleted } from "../../redux/features/requests/requestSlice";
import { useNavigate } from "react-router-dom";

const MeetingItem = ({ meeting }) => {
  const userRole = useSelector((state) => state.auth.userData.role);
  const {
    _id,
    studentId,
    teacherId,
    topic,
    status,
    timing,
    payment,
    videoId,
    isVideoEnded,
    location,
    message,
    preferredLocation,
  } = meeting;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(true);
  const [markingCompleted, setMarkingCompleted] = useState(false);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    // Check if the meeting timing is now
    const currentTimestamp = new Date().getTime();
    const meetingTimestamp = new Date(timing).getTime();

    // Set the join button state based on the comparison
    setIsJoinButtonDisabled(currentTimestamp < meetingTimestamp);
  }, [timing]);

  const studentName = studentId ? studentId.name : "Unknown";
  const teacherName = teacherId ? teacherId.name : "Unknown";

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

  const handleCompleteMeeting = () => {
    setMarkingCompleted(true);

    if (userRole === "user") {
      axios
        .put(
          `http://localhost:5500/api/hiringRequest/updateRequestStatusForUser?id=${_id}`
        )
        .then((response) => dispatch(markMeetingAsCompleted(_id)))
        .catch((error) => console.log(error))
        .finally(() => setMarkingCompleted(false));
    } else {
      axios
        .put(
          `http://localhost:5500/api/hiringRequest/updateRequestStatusForTutor?id=${_id}`
        )
        .then((response) => dispatch(markMeetingAsCompleted(_id)))
        .catch((error) => console.log(error))
        .finally(() => setMarkingCompleted(false));
    }
  };

  const joinMeeting = () => {
    setJoining(true);
    navigate(`/video/${videoId}`);
  };

  return (
    <>
      <li className="bg-white p-4 rounded shadow">
        <div className="flex justify-between flex-wrap">
          <div>
            {userRole === "user" ? (
              <p className="text-black mb-2">
                Name:
                <span className="text-gray-500 font-bold"> {teacherName}</span>
              </p>
            ) : (
              <p className="text-black mb-2">
                Name:
                <span className="text-gray-500 font-bold"> {studentName}</span>
              </p>
            )}
            <p className="text-black mb-2">
              Topic:
              <span className="text-gray-500 font-bold"> {topic}</span>
            </p>
            <p className="text-black">
              Payment: <span className="font-bold"> {payment} </span>
            </p>
          </div>
          <div>
            <p className="text-black font-medium mb-2">
              Status:
              <span className="text-green-500 font-bold"> {status}</span>
            </p>
            <p className="text-black font-medium mb-2">
              Timing:
              <span className="text-gray-500 font-bold">
                {" "}
                {formatTiming(timing)}
              </span>
            </p>
            <p className="text-black">
              Meeting: {' '}
              <span className="font-bold">
                {location.toUpperCase()}
              </span>
            </p>
          </div>
          
        </div>

        <div className="mt-2">
          {message && (
            <p className="text-black">
              Message:
              <span className="font-bold"> {message}</span>
            </p>
          )}
        </div>
        <div className="mt-2">
          {(location === "physical" || location === "both") && (
            <p className="text-black">
              Location: {preferredLocation}
            </p>
          )}
        </div>
        <div className="flex justify-between mt-2 flex-wrap">
          {status === "accepted" &&
            (location === "online" || location === "both") &&
            videoId &&
            !isVideoEnded && (
              <button
                className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${
                  isJoinButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={joinMeeting}
                disabled={isJoinButtonDisabled || markingCompleted}
              >
                {joining
                  ? "Joining..."
                  : isJoinButtonDisabled
                  ? "Meeting not started yet"
                  : "Join the Meeting"}
              </button>
            )}
          {status === "accepted" && isVideoEnded && (
            <button
              className={`bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 ${
                isVideoEnded ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isVideoEnded}
            >
              Meeting has ended
            </button>
          )}
          <button
            className={`text-white bg-green-500 py-2 px-4 rounded-md hover:bg-green-600 ${
              markingCompleted ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleCompleteMeeting}
            disabled={markingCompleted}
          >
            {markingCompleted ? "Marking as Completed..." : "Mark as completed"}
          </button>
        </div>
      </li>
    </>
  );
};

export default MeetingItem;