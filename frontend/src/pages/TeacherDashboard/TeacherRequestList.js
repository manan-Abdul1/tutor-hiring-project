import React, { useEffect, useState } from "react";
import TeacherRequestItem from "./TeacherRequestItem";
import axios from "axios";
import { useSelector } from "react-redux";

const TeacherRequestList = () => {
  const [requests, setRequests] = useState([]);
  const teacherId = useSelector((state) => state.auth.userData._id);
  console.log(teacherId,'teacherId')

  useEffect(() => {
    // Make an API request to get teacher-specific requests
    axios
      .get(`http://localhost:5500/api/hiringRequest/getTeacherRequestsById?id=${teacherId}`)
      .then((response) => {
        console.log(response.data.requests,'response')
        setRequests(response.data.requests);
      })
      .catch((error) => {
        console.error("Error fetching teacher requests:", error);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center mt-36">
      {requests.length > 0 ? (
        <ul className="space-y-4 w-[50%]">
          {requests.map((request) => (
            <TeacherRequestItem key={request._id} request={request} />
          ))}
        </ul>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
};

export default TeacherRequestList;
