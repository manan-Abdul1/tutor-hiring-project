import React from "react";

const MeetingItem = ({ meeting }) => {
  const { _id, studentId, teacherId, topic, status, timing } = meeting;
  const studentName = studentId ? studentId.name : "Unknown";
  const teacherName = teacherId ? teacherId.name : "Unknown";

  return (
    <li className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">Student: {studentName}</h3>
          <p className="text-gray-600">Teacher: {teacherName}</p>
          <p className="text-gray-600">Topic: {topic}</p>
        </div>
        <div>
          <p className="text-gray-600">Status: {status}</p>
          <p className="text-gray-600">Timing: {timing}</p>
        </div>
      </div>
    </li>
  );
};

export default MeetingItem;
