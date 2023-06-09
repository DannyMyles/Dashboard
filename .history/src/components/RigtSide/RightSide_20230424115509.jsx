import React from "react";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>View analytics</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
