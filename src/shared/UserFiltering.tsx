import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  Box,
  InputLabel,
  Button,
} from "@mui/material";
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
      <p>ผู้ใช้งานและสิทธิ์ / รายการผู้ใช้งาน</p>
      <Box p={3} bgcolor={"white"}>
        <div className="two-column-container">
          <div className="column-filter-field">
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
          </div>
          <div className="column-filter-field">
            <div className="search-text">
              <p>สิทธิ์การใช้งาน</p>
            </div>
            <FormControl variant="outlined">
              <InputLabel>-- เลือกสิทธิ์การใช้งาน --</InputLabel>
              <Select
                label="Regular Dropdown"
                value={dropdownValue}
                onChange={handleDropdownChange}
              >
                <MenuItem value="option1">แพทย์ (จุฬา)</MenuItem>
                <MenuItem value="option2">แพทย์ (สังกัดอื่น)</MenuItem>
                <MenuItem value="option3">เจ้าหน้าที่</MenuItem>
                <MenuItem value="option4">ผู้ดูแลระบบ</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="column-filter-field">
            <div className="search-text">
              <p>สังกัด</p>
            </div>
            <FormControl variant="outlined">
              <InputLabel>-- เลือกสังกัด --</InputLabel>
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
          <div className="column-filter-field">
            <div className="search-text">
              <p>สถานะ</p>
            </div>
            <FormControl variant="outlined">
              <InputLabel>-- เลือกสถานะ --</InputLabel>
              <Select
                label="Regular Dropdown"
                value={dropdownValue}
                onChange={handleDropdownChange}
              >
                <MenuItem value="">ใช้งานได้</MenuItem>
                <MenuItem value="option1">ปิดการใช้งาน</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="row">
            <div className="column-button">
              <br />
              <Button
                variant="contained"
                className="button-search-clear"
                style={{ backgroundColor: "#DF5C8E", marginRight: "20px" }}
              >
                ค้นหา
              </Button>
              <Button
                variant="outlined"
                className="button-search-clear"
                style={{ backgroundColor: "#7A8688", color: "white" }}
              >
                ล้างการค้นหา
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UserFiltering;
