import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { SiSunrise } from "react-icons/si";
import './NavBar.css';
import humbergerIcon from "../../images/humbergerIcon.svg";
import UserIcon from "../../images/user icon.svg";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div>
                    <img src={humbergerIcon} alt="humbergerIcon" />
                </div>
                <p className="navbar-title">Consumption Intelligence</p>
            </div>
            <div className="navbar-right">
                <FaRegBell className="navbar-icon" />
                <div className="vertical-line"></div>
                <SiSunrise className="navbar-icon" />
                <div className="vertical-line"></div>
                <p className="navbar-text">Nishant Garg</p>
                <div className="vertical-line"></div>
                <img src={UserIcon} alt="UserIcon" style={{cursor:"pointer"}} />
            </div>
        </div>
    );
}

export default NavBar;
