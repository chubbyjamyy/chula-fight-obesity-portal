import React from "react";
import { useNavigate } from 'react-router-dom';
import MenuAppBar from "../shared/MenuAppBar";
import VerticalTab from "../shared/VerticalTab";
import UserFiltering from "../shared/UserFiltering";
import "./UserPermission.css"; // Import a CSS file for styling
import AddIcon from '@mui/icons-material/Add';
import UserPermissionFiltering from "../shared/UserPermissionFiltering";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserPermission = () => {
    const navigate = useNavigate();
    return (
    <div>
      <MenuAppBar />
      <div className="user-tab-content">
        <VerticalTab />
        <div className="user-filtering-container">
          <UserPermissionFiltering />
          <Box p={3} bgcolor={"white"} marginTop={2}>
            <Button
              variant="contained"
              className="grant-permission-button"
              style={{ backgroundColor: "#FF366B", float: "right"}}
              startIcon={<AddIcon style={{ color: 'white', padding:'0.5px' }} />}
              onClick={() => navigate('/grantUserPermission')}
              >
              เพิ่มสิทธิ์การใช้งาน
            </Button>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ลำดับ</TableCell>
                    <TableCell>ชื่อสิทธิ์การใช้งาน</TableCell>
                    <TableCell>ประเภทสิทธิ์</TableCell>
                    <TableCell>จำนวนผู้ใช้งาน</TableCell>
                    <TableCell>สถานะ</TableCell>
                    <TableCell>เครื่องมือ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>ผู้ดูแลระบบ</TableCell>
                    <TableCell>ผู้ดูแลระบบ</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>ใช้งานได้</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>ผู้ป่วย</TableCell>
                    <TableCell>ผู้ป่วย</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>ใช้งานได้</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>แพทย์ (ในสังกัด)</TableCell>
                    <TableCell>แพทย์ (ในสังกัด)</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>ใช้งานได้</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>แพทย์ (นอกสังกัด)</TableCell>
                    <TableCell>แพทย์ (นอกสังกัด)</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>ใช้งานได้</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  {/* Add more TableRow components for more rows */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserPermission;
