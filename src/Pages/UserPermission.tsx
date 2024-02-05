import React from "react";
import MenuAppBar from "../shared/MenuAppBar";
import VerticalTab from "../shared/VerticalTab";
import UserFiltering from "../shared/UserFiltering";
import "./UserPermission.css"; // Import a CSS file for styling

const UserPermission = () => {
  return (
    <div>
      <MenuAppBar />
      <div className="user-permission-content">
        <VerticalTab />
        <div className="user-filtering-container">
          <UserFiltering />
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default UserPermission;
