import React from "react";

const Rating = ({ value }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starStyle = {
        color: i <= value ? "#FFD700" : "#C4C4C4", 
        fontSize: "1.25rem",
        marginRight: "0.1rem", 
      };
      stars.push(
        <span key={i} style={starStyle}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Rating;
