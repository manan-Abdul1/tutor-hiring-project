import React, { useState } from "react";

const TeacherMessageList = ({ messages, setMessages }) => {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (messageId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [messageId]: response,
    }));
  };

  const handleSendMessage = (messageId) => {
    const response = responses[messageId];

    // Find the message in the list
    const messageIndex = messages.findIndex((message) => message.id === messageId);
    if (messageIndex !== -1) {
      // Update the message with the response
      const updatedMessage = { ...messages[messageIndex], response };
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, messageIndex),
        updatedMessage,
        ...prevMessages.slice(messageIndex + 1),
      ]);
    }

    // Clear the response input field
    setResponses((prevResponses) => ({ ...prevResponses, [messageId]: "" }));

    // Send the response to the server or perform any other action
    console.log(`Sending response "${response}" to message ${messageId}`);
  };

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
          <div className="mt-2">
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              placeholder="Enter your response..."
              value={responses[message.id] || ""}
              onChange={(e) => handleResponseChange(message.id, e.target.value)}
            ></textarea>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleSendMessage(message.id)}
            >
              Send
            </button>
          </div>
          {message.response && (
            <div className="mt-4">
              <p className="text-gray-600 font-bold">Your Reply:</p>
              <p>{message.response}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TeacherMessageList;
