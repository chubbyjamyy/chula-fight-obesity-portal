import React from "react";
import MenuAppBar from "../shared/MenuAppBar";
import VerticalTab from "../shared/VerticalTab";
import Welcome from "../asset/Welcome.png"
import "./Dashboard.css"; // You can create a CSS file for Dashboard-specific styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <MenuAppBar />
      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <VerticalTab />
        </div>
        <div className="dashboard-main">
        <img src={Welcome} style={{ paddingLeft: "30px"}}alt="Dashboard"/>
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
