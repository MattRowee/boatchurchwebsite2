import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import HomePage from "./components/HomePage";
import Merch from "./components/Merch";
import Blog from "./components/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ zIndex: "10", top: "10px", left: "10px" }}>
        <Dropdown />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;