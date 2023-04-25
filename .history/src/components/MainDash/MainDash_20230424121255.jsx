import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
       <CustomerReview />
    </div>
  );
};

export default MainDash;
