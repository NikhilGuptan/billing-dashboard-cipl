import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { setActiveTab } from "../../store/leftSideBarSlice";
import "./LeftSideBar.css";
import CIPLIQ from "../../images/cipl iq.svg";
import { leftSideBarTabs } from "./leftSideBar.helper";

function LeftSideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const activeTab = useSelector((state) => state.leftSideBar.activeTab); 

  const handleTabClick = (tabName, path) => {
    dispatch(setActiveTab(tabName));  // Dispatch the action to update active tab
    navigate(path);  // Navigate to the selected route
  };

  return (
    <div className="sidebar">
      <img src={CIPLIQ} alt="Logo" className="sidebar-logo" />
      <p className="sidebar-title">Overview</p>

      <div className="sidebar-menu">
        {leftSideBarTabs.map((tab, index) => (
          <div
            key={index}
            className={`sidebar-item ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => handleTabClick(tab.name, tab.path)}  // Handle the click and navigate
          >
            {tab.icon}
            <p>{tab.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSideBar;
