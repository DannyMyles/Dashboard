import React from "react";
import DashView from "../DashView/DashView";
import "./MainDash.css";
import Graph from "../Graph/Graph";
import Test from "../Test";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <DashView />
       <Graph />
       <Test />
    </div>
  );
};

export default MainDash;
