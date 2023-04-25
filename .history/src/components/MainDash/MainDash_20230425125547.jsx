import React from "react";
import DashView from "../DashView/DashView";
import Donut from "../Donut/Donut";
import Graph from "../Graph/Graph";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="main_dash">
    <div className="dash_name"><h1>Dashboard</h1></div>
    <div> 
      <DashView />
      {/* <Graph /> */}
      <Donut />
    </div>
    </div>
    
  );
};

export default MainDash;
