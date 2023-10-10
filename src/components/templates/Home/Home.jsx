import React, { useState } from "react";
import "./Home.style.scss";
import DdebitCardMolecule from "../../molecules/DebitCardMolecule/DebitCardMolecule";
const Home = () => {

  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "150px", marginBottom: "150px" }}>Home</h1>
      </div>

      <div>
      <DdebitCardMolecule
        cardNumber="1234 5678 9012 3456"
        cardHolder="John Doe"
        expirationDate="12/23"
        cardType="Visa"
        backgroundColor="#f1f1f1"
      />
    </div>

    </>
  );
};
export default Home;
