import React from "react";
import "./Header.css";
import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="logo" width={"80px"} height={"80px"} />
        <h1>Abstract | Help Center</h1>
      </div>
      <div className="header-right">
        <button className="submit-button">Submit Request</button>
      </div>
    </header>
  );
};

export default Header;
