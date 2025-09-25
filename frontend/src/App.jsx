import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FrontPage from './pages/FrontPage.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { ToastContainer } from "react-toastify";
import RiveHero from "./components/RiveHero/RiveHero.jsx";

// Main App component that sets up the router
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

// Component that handles the conditional rendering based on the route
const AppContent = () => {
  const [showRiveHero, setShowRiveHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is the home page ("/")
    if (location.pathname === '/') {
      setShowRiveHero(true);
    } else {
      setShowRiveHero(false);
    }
  }, [location]);

  return (
    <>
      {/* Conditionally render RiveHero only on the home page */}
      {showRiveHero ? (
        <RiveHero setstartnow={setShowRiveHero} />
      ) : (
        <>
          {/* Render the regular routes for all other pages */}
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<FrontPage />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default App;