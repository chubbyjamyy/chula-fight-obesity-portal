import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { LoginScreen } from './Pages/LoginScreen';
import Dashboard from './Pages/Dashboard';
import UserTab from './Pages/UserTab';
import UserPermission from './Pages/UserPermission';
import GrantUserPermission from './Pages/GrantUserPermission';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} /> {/* Set LoginScreen as the default route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/userTab" element={<UserTab />} />
      <Route path="/userPermission" element={<UserPermission />} />
      <Route path="/grantUserPermission" element={<GrantUserPermission />} />
      {/* Define other routes as needed */}
    </Routes>
  );
}

export default App;
