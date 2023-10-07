import React, { useState } from 'react';
import FeedbackModel from './FeedbackModel';
import "./Feedback.css"
const FeedbackPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFeedbackSubmit = (feedbackData) => {
    // You can send the feedbackData to your API or dispatch it to Redux here
    console.log('Feedback submitted:', feedbackData);
    // Close the modal after submission
    setModalVisible(false);
  };

  return (
    <div>
      <button className='bg-green-500 text-white text-center mt-20 ml-20 rounded-md px-2 py-2' onClick={() => setModalVisible(true)}>Leave Feedback</button>
      {modalVisible && (
        <div className="feedback-modal active">
          <div className="feedback-modal-content">
            {/* <span
              className="close-button text-blue-500"
              onClick={() => setModalVisible(false)}
            >
              &times;
            </span> */}
            <FeedbackModel onSubmit={handleFeedbackSubmit} onClose={()=>setModalVisible(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
