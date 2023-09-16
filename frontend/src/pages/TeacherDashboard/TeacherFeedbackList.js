import React from "react";

const TeacherFeedbackList = ({ feedbacks }) => {
  return (
    <ul className="bg-white p-4 rounded shadow">
      {feedbacks.map((feedback) => (
        <li key={feedback.id} className="mb-4">
          <div>
            <h3 className="text-lg font-bold">{feedback.studentName}</h3>
            <p className="text-gray-600">{feedback.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeacherFeedbackList;
