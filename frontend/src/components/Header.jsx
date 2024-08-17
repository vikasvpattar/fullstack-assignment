import React from "react";
import Abstract from "../assets/abstract.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logoWrapper">
          <div className="logo">
            <img src={Abstract} width={"100%"} alt="Abstract Logo" />
          </div>
          <a className="help" href="#">
            Help Center
          </a>
        </div>
        <div>
          <button className="submit">Submit a request</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
