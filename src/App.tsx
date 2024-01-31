import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { LoginScreen } from './Pages/LoginScreen';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
