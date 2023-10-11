import React, { useState } from "react";
import "./Home.style.scss";
import DisplayReviewMolecule from "../../molecules/DisplayReviewMolecule/DisplayReviewMolecule";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import RatingStatsMolecule from "../../molecules/RatingStatesMolecule/RatingStatsMolecule";
import StarRadio from "../../atoms/StarRadio/StarRadio";
const Home = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "150px", marginBottom: "150px" }}>Home</h1>
      </div>

      <DisplayReviewMolecule
        userImage="/public/myimg.png"
        userName="John Doe"
        rating={4}
        comment="This product is excellent. I would highly recommend it!"
        dateTime="2023-10-11 15:30"
      />
  <RatingStatsMolecule
    one={1}
    two={2}
    three={3}
    four={4}
    five={5}
    total={15}
  />

    </>
  );
};
export default Home;
