import React, { useState, useEffect } from "react";
import TeacherRequestList from "./TeacherRequestList";

const TeacherDashboard = () => {
  const [requests, setRequests] = useState([
    {
        studentName:'Abdul Manan',
        date: '2-8-12',
        subject: 'math',
        time: '6:00pm'
    },
    {
        studentName:'Abdul Manan',
        date: '2-8-12',
        subject: 'math',
        time: '6:00pm'
    },
    {
        studentName:'Abdul Manan',
        date: '2-8-12',
        subject: 'math',
        time: '6:00pm'
    }
  ]);

  // Fetch requests from API or set them manually
//   useEffect(() => {
//     // Fetch requests from API and update the state
//     const fetchRequests = async () => {
//       try {
//         const response = await fetch("/api/requests");
//         const data = await response.json();
//         setRequests(data);
//       } catch (error) {
//         console.log("Error fetching requests:", error);
//       }
//     };

//     fetchRequests();
//   }, []);

  return (
    <div className="bg-gray-100 pb-20 ">
      <div className="container px-20 py-20">
        <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
        <TeacherRequestList requests={requests} />
        {/* Add other components and sections of the teacher dashboard */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
