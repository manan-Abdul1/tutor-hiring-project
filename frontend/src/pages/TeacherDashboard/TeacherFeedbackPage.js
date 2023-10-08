import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeacherFeedbackPage = () => {
  const { id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/feedback/getTutorsFeedack?id=${id}`)
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teacher feedback:", error);
      });
  }, []);

  return (
    <div className="bg-white h-screen mt-36">
      <ul>
        {feedbacks?.map((feedback) => (
          <li key={feedback.id} className="mb-6 max-w-lg mx-auto">
            <div className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{feedback.studentName}</h3>
              <p className="text-gray-700 text-lg">{feedback.comment}</p>
              <p className="text-yellow-500 text-lg mt-2">Rating: {feedback.rating}/5</p>
            </div>
          </li>
        ))}
      </ul>
      {feedbacks.length === 0 && (
        <p className="text-gray-600 mt-4">No feedback available for this teacher.</p>
      )}
    </div>
  );
};

export default TeacherFeedbackPage;
