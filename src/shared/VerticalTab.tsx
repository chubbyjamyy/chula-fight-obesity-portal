import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashBoard from '../asset/Dashboard.png'
import UserPermission from '../asset/UserPermission.png'

// Import other icons as needed


const VerticalTab = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
      setValue(newValue);
    };

    const backgroundColor = {
        backgroundColor: '#098484',
        height: '100vh' // Set the background color to green
      };
  
    const tabStyles = {
        width: '100px',
      };
    
      const imageStyles = {
        width :'100px'// Adjust the margin as needed
      };
    
    return (
      <Box display="flex" style={tabStyles}>
        {/* Vertical Tab Menu */}
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
              <img src={UserPermission} alt="UserAndPermission" style={imageStyles} />
            </div>
          }
          component={Link}
          to="/userPermission"
        />
          {/* Add more tabs as needed */}
        </Tabs>
      </Box>
    );
  };
  
  export default VerticalTab;
  