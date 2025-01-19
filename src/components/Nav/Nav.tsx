import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => {
  // const navigate = useNavigate();


  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <h1>BC,BABY</h1>
      </div>
      <div className="linksContainer">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Merch">Merch</Link>
        </div>
        <div>
          <Link to="/Blog">Blog</Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;