import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import DashView from "../DashView/DashView";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <DashView />
       <CustomerReview />
    </div>
  );
};

export default MainDash;
