import React from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import LogoImage from "../../img/l1.png"; // Import your logo image

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-logo">
          <img src={LogoImage} alt="Logo" />
        </div>
       
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About us
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
