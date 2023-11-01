import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomeScreen from './Homepage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import CreateAccount from './CreateAccount';
import ListItemScreen from './ListItemScreen';
import  './GlobalStyle.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<><NavBar /><HomeScreen /></>} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/ListItemScreen" element={<><NavBar /><ListItemScreen /></>} />

        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
