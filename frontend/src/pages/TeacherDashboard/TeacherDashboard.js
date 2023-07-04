import React, { useState, useEffect } from "react";
import TeacherRequestList from "./TeacherRequestList";
import TeacherFeedbackList from "./TeacherFeedbackList";
import TeacherMessageList from "./TeacherMessageList";

const TeacherDashboard = () => {
  const [requests, setRequests] = useState([
    {
        studentName: 'Abdul Manan',
        date: '17-07-2023',
        time: '6:00pm',
        subject: 'Math'
    }
  ]);
  const [feedbacks, setFeedbacks] = useState([
    {
        studentName: 'Abdul Manan',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus aspernatur cum obcaecati non sapiente rem est.' 
    },
    {
        studentName: 'Abdul Manan',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus aspernatur cum obcaecati non sapiente rem est.' 
    },
    {
        studentName: 'Abdul Manan',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus aspernatur cum obcaecati non sapiente rem est.' 
    },
  ]);
  const [messages, setMessages] = useState([
    {
        sennderName:'Abdul',
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus"
    },
    {
        sennderName:'Abdul',
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus"
    },
    {
        sennderName:'Abdul',
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed dicta minus"
    }

  ]);

  // Fetch requests, feedbacks, and messages from API or set them manually
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

//     // Fetch feedbacks from API and update the state
//     const fetchFeedbacks = async () => {
//       try {
//         const response = await fetch("/api/feedbacks");
//         const data = await response.json();
//         setFeedbacks(data);
//       } catch (error) {
//         console.log("Error fetching feedbacks:", error);
//       }
//     };

//     // Fetch messages from API and update the state
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch("/api/messages");
//         const data = await response.json();
//         setMessages(data);
//       } catch (error) {
//         console.log("Error fetching messages:", error);
//       }
//     };

//     fetchRequests();
//     fetchFeedbacks();
//     fetchMessages();
//   }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Requests</h2>
            <TeacherRequestList requests={requests} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Feedbacks</h2>
            <TeacherFeedbackList feedbacks={feedbacks} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <TeacherMessageList messages={messages} />
        </div>
        {/* Add other components and sections of the teacher dashboard */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
