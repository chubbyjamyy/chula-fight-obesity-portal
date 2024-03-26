import React, { useState } from "react";
import { Tabs, Tab, Box, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DashBoard from "../asset/Dashboard.png";
import UserPermission from "../asset/UserPermission.png";

enum Routes {
  USER_TAB = 'userTab',
  USER_PERMISSION = 'userPermission',
}

const VerticalTab = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event: any, newValue: number) => {
    console.log("value ==",newValue);
    setValue(newValue);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route?: Routes) => {
    setAnchorEl(null);
    if (route) {
      navigate(`/${route}`);
    }
  };

  const backgroundColor = {
    backgroundColor: "#F8E1EA",
    height: "105vh",
  };

  const tabStyles = {
    width: "100px",
  };

  const imageStyles = {
    width: "100px",
  };

  const menuItems = [
    { label: 'จัดการผู้ใช้งาน', route: Routes.USER_TAB },
    { label: 'อนุมัติผู้ใช้งาน' },
    { label: 'จัดการสิทธิ์การใช้งาน', route: Routes.USER_PERMISSION },
    { label: 'ประวัติการใช้งานในระบบ' },
  ];

  return (
    <Box display="flex" style={tabStyles}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={backgroundColor}
      >
        <Tab
          label={
            <div>
              <img src={DashBoard} alt="Dashboard" style={imageStyles} />
            </div>
          }
          component={Link}
          to="/dashboard"
        />
        <Tab
          label={
            <div>
              <img
                src={UserPermission}
                alt="UserAndPermission"
                style={imageStyles}
              />
            </div>
          }
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.label} onClick={() => handleClose(item.route)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Tabs>
    </Box>
  );
};

export default VerticalTab;