import React from "react";
import BooksOrganism from "../../organisms/BooksOrganism/BooksOrganism";
import FeaturesBanner from "../../organisms/FeaturesBannerOrganism/FeaturesBanner";
import "./Books.style.scss";

const Books = () => {
  return (
    <>
    <div className="book-page-container">
      <div className="books-left">
      </div>
      <div className="books-right">
        <BooksOrganism />
      </div>
    </div>
    <FeaturesBanner />
    </>
    
  );
};

export default Books;
