import React from "react";
import "./dash.css";
const DashView = () => {
  const days = ["1Day", "3Days", "7Days", "30Days", "All Time", "Custom Date"];
  return (
    <>
      <div className="main_usersview">
        <span> Good morning, Blessing ⛅️ </span>
        <div className="users_intro">
          <div>
            <span>Check out your dashboard summary.</span>
          </div>
          <div className="view_span">
            <span>View analytics</span>
          </div>
        </div>
      </div>
      <div>
        {days.map((day, index) => {
          return <button key={index}>{day}</button>;
        })}
      </div>
    </>
  );
};

export default DashView;
