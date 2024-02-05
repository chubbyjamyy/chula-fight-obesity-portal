import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, Box } from "@mui/material";
import InfoIcon from "../asset/InfoIcon.png";
import "./UserFiltering.css"; // Import a CSS file for styling

const UserFiltering = () => {
  // State for storing the values of the three filter fields
  const [textInput, setTextInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [muiDropdownValue, setMUIDropdownValue] = useState("");

  // Handle input text field change
  const handleTextInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextInput(event.target.value);
  };

  // Handle regular dropdown change
  const handleDropdownChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdownValue(event.target.value);
  };

  // Handle Material-UI dropdown change
  const handleMUIDropdownChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMUIDropdownValue(event.target.value);
  };

  return (
    <div>
      <Box p={3} bgcolor={"white"}>
        <div className="search-container">
          <div className="search-text">
            <p>ค้นหา</p>
          </div>
          <div className="info-icon">
            <img src={InfoIcon} alt="Info Icon" />
          </div>
        </div>
        <TextField
          label="-- ระบุคำที่ต้องการค้นหา --"
          variant="outlined"
          value={textInput}
          onChange={handleTextInputChange}
        />
        <div className="search-text">
            <p>สิทธิ์การใช้งาน</p>
          
        <FormControl variant="outlined">
          <Select
            label="Regular Dropdown"
            value={dropdownValue}
            onChange={handleDropdownChange}
          >
            <MenuItem value="">Select an option</MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Box>
    </div>
  );
};

export default UserFiltering;
