import React from "react";

const MeetingItem = ({ meeting }) => {
  const { _id, studentId, teacherId, topic, status, timing } = meeting;
  const studentName = studentId ? studentId.name : "Unknown";
  // const teacherName = teacherId ? teacherId.name : "Unknown";
console.log(meeting,'student-namw')
  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold"> {studentName}</h3>
          {/* <p className="text-gray-600">Teacher: {teacherName}</p> */}
          <p className="text-gray-600">Topic: {topic}</p>
        </div>
        <div>
          <p className="text-gray-600">Status: {status}</p>
          <p className="text-gray-600">Timing: {timing}</p>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Meeting Completed
        </button>
      </div>
    </li>
  );
};

export default MeetingItem;
