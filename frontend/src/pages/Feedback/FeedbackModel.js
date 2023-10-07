import React, { useState } from 'react';

const FeedbackModel = ({ onSubmit, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if rating is valid (between 1 and 5)
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }

    // Check if comment is not empty
    if (comment.trim() === '') {
      alert('Please enter a comment.');
      return;
    }

    // Call the onSubmit function with the feedback data
    onSubmit({ rating, comment });

    // Reset the form
    setRating(0);
    setComment('');

    onClose();

  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className='flex'>
      <h2 className="text-lg font-bold mb-4 text-center ">Feedback Section</h2>
        <span
          className="feedback-close-button "
          onClick={onClose}
        >
          &times;
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
            Rating (1-5):
          </label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
            Comment:
          </label>
          <textarea
            id="comment"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackModel;
