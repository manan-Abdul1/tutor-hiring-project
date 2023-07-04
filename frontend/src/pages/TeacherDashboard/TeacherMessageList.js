import React from "react";

const TeacherMessageList = ({ messages }) => {
  return (
    <ul className="bg-white p-4 rounded shadow">
      {messages.map((message) => (
        <li key={message.id} className="mb-4">
          <div className="flex items-center">
            <div className="bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center mr-4">
              <span className="text-gray-600 text-2xl">M</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">{message.senderName}</h3>
              <p className="text-gray-600">{message.content}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeacherMessageList;
