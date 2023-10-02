import React from 'react';
import FeedbackForm from './FeedbackForm';

const FeedbackPage = () => {
  const handleFeedbackSubmit = (feedbackData) => {
    // You can send the feedbackData to your API or dispatch it to Redux here
    console.log('Feedback submitted:', feedbackData);
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
    </div>
  );
};

export default FeedbackPage;
