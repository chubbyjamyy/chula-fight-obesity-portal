import React from "react";
import MenuAppBar from "../shared/MenuAppBar";
import VerticalTab from "../shared/VerticalTab";
import UserFiltering from "../shared/UserFiltering";
import "./UserTab.css"; // Import a CSS file for styling
import UserPermissionFiltering from "../shared/UserPermissionFiltering";

const UserTab = () => {
  return (
    <div>
      <MenuAppBar />
      <div className="user-tab-content">
        <VerticalTab />
        <div className="user-filtering-container">
        <UserFiltering />
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default UserTab;
