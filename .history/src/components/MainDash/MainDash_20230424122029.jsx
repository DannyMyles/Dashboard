import React from "react";
import DashView from "../DashView/DashView";
import "./MainDash.css";
import Graph from "../Graph/Graph";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <DashView />
       <Graph />
    </div>
  );
};

export default MainDash;
