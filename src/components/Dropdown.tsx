import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(event.target.value);
  };

  return (
    <select onChange={handleNavigation} defaultValue="/">
      <option value="/">Home</option>
      <option value="/Merch">Merch</option>
      <option value="/Blog">Blog</option>
    </select>
  );
};

export default Dropdown;