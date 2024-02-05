import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./asset/Logo.png";
import "./HeaderMenuBar.css";

const HeaderMenuBar: React.FC = () => {
  return (
    <div className="header-menu-bar">
      <AppBar
        position="static"
        sx={{ backgroundColor: "#098484", minHeight: "50px" }}
      >
        <Toolbar>
          <img
            src={Logo}
            style={{
              marginRight: "10px",
              top: "0px",
              width: "90px",
              height: "100px",
              position: "absolute",
            }}
          />
          <h3 style={{ marginLeft: "130px", position: "absolute" }}>
            Chula Fight Obesity System
          </h3>
          {/* Add your menu items or navigation links here */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderMenuBar;
