import React from "react";
import { Link } from "react-router-dom";
import AbstractSvg from "../assets/svgexport-3.svg";
const footerContent = {
  Resources: ["Blog", "Help Center", "Release Notes", "Status"],
  Community: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
  Company: ["About Us", "Careers", "Legal"],
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-column">
          <h3>Abstract</h3>
          <Link to={"/"}>Branches</Link>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          {footerContent.Resources.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          {footerContent.Community.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          {footerContent.Company.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link>
          ))}
          <h4>Contact Us</h4>
          <Link to={"/"}>info@abstract.com</Link>
        </div>
        <div className="footer-copyright">
          <img src={AbstractSvg} alt="logo" />
          <p>@copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
