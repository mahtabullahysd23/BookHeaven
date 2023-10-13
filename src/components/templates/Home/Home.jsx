import React, { useState } from "react";
import "./Home.style.scss";
import DisplayReviewMolecule from "../../molecules/DisplayReviewMolecule/DisplayReviewMolecule";
import RatingStatsMolecule from "../../molecules/RatingStatesMolecule/RatingStatsMolecule";
import User from "../Users/User";
const Home = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "150px", marginBottom: "150px" }}>Home</h1>
      </div>

      <User 
          
      />
    </>
  );
};
export default Home;
