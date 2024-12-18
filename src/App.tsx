import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import HomePage from "./components/HomePage";
import Merch from "./components/Merch";
import BlogPage from "./components/BlogPage";

const App: React.FC = () => {

  const [isAdmin, setIsAdmin] = useState(false);

  // Handle Admin Login
  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsAdmin(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <Router>
      <nav style={{ zIndex: "10", top: "10px", left: "10px" }}>
        <Dropdown />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage onLogin={handleLogin} isAuthenticated={isAdmin}  />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Blog" element={<BlogPage isAdmin/>} />
      </Routes>
    </Router>
  );
};

export default App;
