import React from "react";
import Abstract from "../assets/abstract.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logoWrapper">
          <Link to={"/"} className="logo">
            <img src={Abstract} width={"100%"} alt="Abstract Logo" />
          </Link>
          <Link to={"/"} className="help" href="#">
            Help Center
          </Link>
        </div>
        <div>
          <button className="submit">Submit a request</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
