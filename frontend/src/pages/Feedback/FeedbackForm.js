import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
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
  };

  return (
    <div>
      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating (1-5):</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
