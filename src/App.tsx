import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import HomePage from "./components/HomePage";
import Merch from "./components/Merch";
import BlogPage from "./components/BlogPage";

const App: React.FC = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation(); // Hook to get the current path

  // Handle Admin Login
  const handleLogin = async (username: string, password: string) => {
    console.log("username, password", username, password);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        // credentials: 'include',  
      });

      if (response.ok) {
        setIsAdmin(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log("error:", error)
      alert('Login failed');
    }
  };

  return (
      <div className={location.pathname === "/" ? "background" : "background transparent"}>
        {/* Transparent overlay for non-homepage pages */}
        {location.pathname !== "/" && <div className="page-overlay"></div>}

        <div className="page-container">
          <nav style={{ zIndex: "10", top: "10px", left: "10px" }}>
            <Dropdown />
          </nav>
          <Routes>
            <Route path="/" element={<HomePage onLogin={handleLogin} isAuthenticated={isAdmin} />} />
            <Route path="/Merch" element={<Merch />} />
            <Route path="/Blog" element={<BlogPage isAdmin={isAdmin} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
