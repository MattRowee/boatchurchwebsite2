import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(event.target.value);
  };

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <h1>BC,BABY</h1>
      </div>
      <div className="linksContainer">
        {/* <select onChange={handleNavigation} defaultValue="/"> */}
        <div>
          <a href="/">Home</a>
        </div>
        <div>

          <a href="/Merch">Merch</a>
        </div>
        <div>

          <a href="/Blog">Blog</a>
        </div>
        {/* </select> */}
      </div>
    </div>
  );
};

export default Nav;