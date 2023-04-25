import React from "react";

const Donut = () => {

  const countries = [
    {
      flag : "red",
      name : "Nigeria",
      percentage: "50% ",
      color : "#599EEA"
    },
    {
      flag : "red",
      name : "United states",
      percentage: "50% ",
      color : "#844FF6"
    },
    {
      flag : "red",
      name : "Netherlands",
      percentage: "50% ",
      color : "#0FB77A"
    },
    {
      flag : "red",
      name : "Andorra",
      percentage: "50% ",
      color : "#FAB70A"
    },
    {
      name : "Others",
      percentage: "50% ",
      color : "#F09468"
    }
  ]
  return (
    <>
      <div className="donut_container">
        <div className="top_location">

        </div>
        <div className="top_refferal"></div>
      </div>
    </>
  );
};

export default Donut;
