import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination'; 

const TeacherFeedbackPage = () => {
  const { id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); 

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/feedback/getTutorsFeedack?id=${id}`)
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teacher feedback:", error);
      });
  }, [id]);

  // Calculate the indexes of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white p-4 h-screen mt-28 ">
      {/* <h2 className="text-2xl font-semibold mb-4">Student Feedback</h2> */}
      <ul>
        {currentFeedbacks.map((feedback) => (
          <li key={feedback.id} className="mb-6 mx-auto max-w-lg">
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
      <div className="mt-4">
        {feedbacks.length >= itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={feedbacks.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default TeacherFeedbackPage;
