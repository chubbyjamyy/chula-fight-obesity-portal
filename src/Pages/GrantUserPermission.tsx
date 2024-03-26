import {
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Paper,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router";
import MenuAppBar from "../shared/MenuAppBar";
import VerticalTab from "../shared/VerticalTab";
import { useState } from "react";
import "./GrantUserPermission.css";

const GrantUserPermission = () => {
  const navigate = useNavigate();
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

  const PinkCheckbox = styled(Checkbox)({
    "&.MuiCheckbox-root": {
      color: "#D8D8D8",
    },
    "&.Mui-checked": {
      color: "#DF5C8E",
    },
  });
  return (
    <div>
      <MenuAppBar />
      <div className="user-tab-content">
        <VerticalTab />
        <div className="user-filtering-container">
          <div>
            <p style={{ paddingTop: "0px" }}>
              จัดการสิทธิ์การใช้งาน / รายการสิทธิ์การใช้งาน /
              เพิ่มสิทธิ์การใช้งาน
            </p>
            <Box p={3} bgcolor={"white"}>
              <p style={{ borderBottom: "1px solid grey" }}>
                <span style={{ borderBottom: "5px solid #DF5C8E" }}>
                  เพิ่มสิทธิ์การใช้งาน
                </span>
              </p>
              <div className="grant-user-two-column-container">
                <div className="grant-user-column-filter-field">
                  <div className="search-container">
                    <div className="search-text">
                      <p>ชื่อสิทธิ์การใช้งาน</p>
                    </div>
                  </div>
                  <TextField
                    label="-- ระบุคำที่ต้องการค้นหา --"
                    variant="outlined"
                    value={textInput}
                    onChange={handleTextInputChange}
                  />
                </div>
                <div className="grant-user-column-filter-field">
                  <div className="search-text">
                    <p>ประเภทสิทธิ์การใช้งาน</p>
                  </div>
                  <FormControl variant="outlined">
                    <InputLabel>-- เลือกประเภทสิทธิ์การใช้งาน --</InputLabel>
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
              </div>
              <br />
              <p>สิทธิ์การใช้งานเมนู</p>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          paddingLeft: "30px",
                          width: "60%",
                          borderBottom: "none",
                        }}
                      >
                        เมนู
                      </TableCell>
                      <TableCell
                        colSpan={6}
                        style={{ width: "40%", borderBottom: "none", textAlign: 'center' }}
                      >
                        ชื่อสิทธิ์การใช้งาน
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell />
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        แสดง
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        เพิ่ม
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        แก้ไข
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        ลบ
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        Import
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                        <br />
                        Export
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "30px" }}
                      >
                        DashBoard
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "60px" }}
                      >
                        DashBoard สำหรับผู้บริหาร จากระบบ
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 5px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "60px" }}
                      >
                        DashBoard สำหรับผู้บริหาร (เพิ่มเติม)
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 5px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "30px" }}
                      >
                        การจัดการข้อมูล
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}></TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "60px" }}
                      >
                        ข้อมูลหลัก
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 5px" }}></TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "30px" }}
                      >
                        ข้อมูลผู้ป่วย
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 5px" }}></TableCell>{" "}
                      {/* Blank space */}
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ padding: "4px 8px", paddingLeft: "30px" }}
                      >
                        รายการผู้ป่วย
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 5px" }}></TableCell>{" "}
                      {/* Blank space */}
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                      <TableCell style={{ padding: "4px 8px" }}>
                        <PinkCheckbox style={{ transform: "scale(1.5)" }} />
                      </TableCell>
                    </TableRow>
                    {/* Add more TableRow components for more rows */}
                  </TableBody>
                </Table>
              </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }}>
              <br />
              <Button
                variant="outlined"
                className="grant-user-button-search-clear"
                style={{ backgroundColor: "#7A8688", color: "white",  marginRight: "10px" }}
              >
                ยกเลิก
              </Button>
              <Button
                variant="contained"
                className="grant-user-button-search-clear"
                style={{ backgroundColor: "#DF5C8E", marginRight: "20px" }}
              >
                บันทึก
              </Button>
            </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GrantUserPermission;
