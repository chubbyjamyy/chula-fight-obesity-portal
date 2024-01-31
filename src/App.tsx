import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { LoginScreen } from './Pages/LoginScreen';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} /> {/* Set LoginScreen as the default route */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Define other routes as needed */}
    </Routes>
  );
}

export default App;
