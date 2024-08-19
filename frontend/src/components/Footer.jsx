import React from "react"; // Import React to create the component
import { Link } from "react-router-dom"; // Import Link for navigation within the app
import AbstractSvg from "../assets/svgexport-3.svg"; // Import the SVG logo

// Define an object to hold the content for different sections of the footer
const footerContent = {
  Resources: ["Blog", "Help Center", "Release Notes", "Status"], // List of resource links
  Community: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"], // List of community links
  Company: ["About Us", "Careers", "Legal"], // List of company-related links
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Column for Abstract section with a logo link */}
        <div className="footer-column">
          <h3>Abstract</h3>
          <Link to={"/"}>Branches</Link> {/* Link to the homepage */}
        </div>

        {/* Column for Resources section */}
        <div className="footer-column">
          <h3>Resources</h3>
          {footerContent.Resources.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link> // Map over the resources array to create links
          ))}
        </div>

        {/* Column for Community section */}
        <div className="footer-column">
          <h3>Community</h3>
          {footerContent.Community.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link> // Map over the community array to create links
          ))}
        </div>

        {/* Column for Company section */}
        <div className="footer-column">
          <h3>Company</h3>
          {footerContent.Company.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link> // Map over the company array to create links
          ))}
          <h4>Contact Us</h4> {/* Additional contact section */}
          <Link to={"/"}>info@abstract.com</Link> {/* Contact email link */}
        </div>

        {/* Footer copyright and logo section */}
        <div className="footer-copyright">
          <img src={AbstractSvg} alt="logo" /> {/* Company logo */}
          <p>@copyright 2022</p> {/* Copyright information */}
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
