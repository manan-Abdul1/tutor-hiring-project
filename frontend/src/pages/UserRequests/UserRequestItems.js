import { useState } from "react";
import { useSelector } from "react-redux";
import FeedbackModel from "../Feedback/FeedbackModel";

const UserRequestItems = ({ request }) => {
  const userRole = useSelector((state) => state.auth.userData);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const { studentId, teacherId, topic, status, timing } = request;

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

  let statusColorClass = "";

  if (status === "accepted") {
    statusColorClass = "text-green-500";
  } else if (status === "rejected") {
    statusColorClass = "text-red-500";
  } else if (status === "completed") {
    statusColorClass = "text-blue-500";
  }
  const handleFeedbackButtonClick = () => {
    setShowFeedbackModal(true);
  };
  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex justify-between flex-wrap">
        <div>
          {userRole.role === "user" ? (
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
        </div>
        <div>
          <p className="text-black font-medium mb-2">
            Status:
            <span className={`${statusColorClass} font-bold`}> {status}</span>
          </p>
          <p className="text-black font-medium mb-2">
            Timing:
            <span className="text-gray-500 font-bold">
              {" "}
              {formatTiming(timing)}
            </span>
          </p>
        </div>
      </div>
      {status === "completed" && (
        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleFeedbackButtonClick}
          >
            Leave a Feedback
          </button>
        </div>
      )}
      {showFeedbackModal && (
        <FeedbackModel
          userId={userRole._id}
          teacherId={teacherId._id}
          onClose={() => setShowFeedbackModal(false)}
        />
      )}
    </li>
  );
};

export default UserRequestItems;
