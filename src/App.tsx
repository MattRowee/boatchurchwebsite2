import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/Home/HomePage";
import Merch from "./components/Merch/Merch";
import BlogPage from "./components/Blog/BlogPage";
import "./App.css";

const App: React.FC = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation(); // Hook to get the current path
  const navigate = useNavigate();
  // Handle Admin Login
  const handleLogin = async (username: string, password: string) => {
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

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <div className="background">
      {/* Transparent overlay for non-homepage pages */}
        <Nav />
      {location.pathname !== "/" && <div className="page-overlay"></div>}
      <div className="page-container">
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
