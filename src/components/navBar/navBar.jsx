import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { SiSunrise } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import './NavBar.css';  // Import the CSS file

function NavBar() {
  return (
    <div className="navbar">
      {/* Left side - Hamburger menu and title */}
      <div className="navbar-left">
        <div className="hamburger-icon">
          <GiHamburgerMenu className="hamburger-menu" />
        </div>
        <p className="navbar-title">Consumption Intelligence</p>
      </div>

      {/* Right side - Icons and Avatar */}
      <div className="navbar-right">
        <FaRegBell className="navbar-icon" />
        <div className="vertical-line"></div>
        <SiSunrise className="navbar-icon" />
        <div className="vertical-line"></div>
        <p className="navbar-text">Nishant Garg</p>
        <div className="vertical-line"></div>
        <RxAvatar className="navbar-icon" />
      </div>
    </div>
  );
}

export default NavBar;
