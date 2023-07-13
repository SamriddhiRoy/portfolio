import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../img/l1.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="columnn">
      <img src={logo} alt="Logo" className="logo" />
        
        <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.</p>
        <p>@Lorem</p>
      </div>
      <div className="columnn">
        <h3 className="bold-headingt">About Us</h3>
        <p>Lorem</p>
        <p>Portfolio</p>
        <p>Careers</p>
        <p>Contact us</p>
      </div>
      <div className="columnn">
        <h3 className="bold-headingt">Contact Us</h3>
        <p>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry.</p>
        <p>+9089097890</p>
      </div>
      <div className="columnn">
        <h3>  </h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
