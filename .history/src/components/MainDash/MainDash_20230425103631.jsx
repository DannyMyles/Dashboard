import React from "react";
import DashView from "../DashView/DashView";
import Donut from "../Donut/Donut";
import Graph from "../Graph/Graph";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <DashView />
      {/* <Graph /> */}
      <Donut />
    </div>
  );
};

export default MainDash;
