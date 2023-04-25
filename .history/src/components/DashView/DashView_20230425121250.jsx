import React from "react";
import "./dash.css";
const DashView = () => {
  const days = ["1Day", "3Days", "7Days", "30Days", "All Time", "Custom Date"];
  return (
    <>
      <div className="main_usersview">
        <div clasName="main_usersview_span"><span > Good morning, Blessing ⛅️ </span></div> 
        <div className="users_intro">
          <div>
            <span>Check out your dashboard summary.</span>
          </div>
          <div className="view_span">
            <span>View analytics</span>
          </div>
        </div>
      </div>
      <div className="days-container">
  {days.map((day, index) => {
    return (
      <div key={index} className={day === 'All Time' ? 'all-time' : 'other-time'}>{day}</div>
    )
  })}
</div>
    </>
  );
};

export default DashView;
