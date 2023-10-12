import React from "react";
import "./DisplayReviewMolecule.style.scss";
import DisplayRating from "../../atoms/DisplayRating/DisplayRating";
import CrossButton from "../../atoms/CrossButton/CrossButton";
const Review = ({ userImage, userName, rating, comment, dateTime , }) => {
  const handleDeleteClice = () => {
    console.log("delete clicked");
  }
  return (
    <div className="review">
      <div className="user-info">
        <img src={userImage} alt={`User ${userName}`} className="user-image" />
        <div className="user-details">
          <p className="user-name">{userName}</p>
          <div className="rating">
            <DisplayRating rating={rating} />
          </div>
        </div>
        <div className="review-cross">
           <CrossButton onClick={handleDeleteClice}/>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <p className="date-time">{dateTime}</p>
    </div>
  );
};

export default Review;
