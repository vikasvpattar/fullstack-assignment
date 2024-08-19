import React from "react"; // Import React to create the component
import Abstract from "../assets/abstract.png"; // Import the logo image
import { Link } from "react-router-dom"; // Import Link for navigation within the app

const Header = () => {
  return (
    <header className="header">
      {/* Navigation bar */}
      <nav className="nav">
        {/* Wrapper for logo and help center link */}
        <div className="logoWrapper">
          {/* Link wrapping the logo image */}
          <Link to={"/"} className="logo">
            <img src={Abstract} width={"100%"} alt="Abstract Logo" />{" "}
            {/* Logo image */}
          </Link>
          {/* Link to the Help Center */}
          <Link to={"/"} className="help">
            Help Center
          </Link>
        </div>
        {/* Wrapper for the submit button */}
        <div>
          <button className="submit">Submit a request</button>{" "}
          {/* Submit request button */}
        </div>
      </nav>
    </header>
  );
};

export default Header; // Export the Header component
