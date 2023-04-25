import React from "react";
import DashView from "../DashView/DashView";
import Donut from "../Donut/Donut";
import Graph from "../Graph/Graph";
import "./MainDash.css";
const MainDash = () => {
  return (
    <>
    <div><h1>Dashboard</h1></div>
    <div className="MainDash"> 
      <DashView />
      {/* <Graph /> */}
      <Donut />
    </div>
    </>
    
  );
};

export default MainDash;
