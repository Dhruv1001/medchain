import './App.css';
import HomePage from './HomePage';
import LoginPage from './Login/LoginPage';
import SignupPage from './Sign Up/SignupPage';
import DashboardPage from './DashboardPage'; // New import
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate
import React, { useState } from 'react'; // Added useState

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // In a real app, you'd also clear tokens from localStorage/sessionStorage here
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/signup" element={<SignupPage onAuthSuccess={handleAuthSuccess} />} />
          {/* Protected Route */}
          <Route path="/dashboard" element={isLoggedIn ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
