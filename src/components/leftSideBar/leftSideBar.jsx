import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../store/leftSideBarSlice";
import "./LeftSideBar.css";
import CIPLIQ from "../../images/cipl iq.svg";
import { leftSideBarTabs } from "./leftSideBar.helper";

function LeftSideBar() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.leftSideBar.activeTab); 
  return (
    <div className="sidebar">
      <img src={CIPLIQ} alt="Logo" className="sidebar-logo" />
      <p className="sidebar-title">Overview</p>

      <div className="sidebar-menu">
        {leftSideBarTabs.map((tab, index) => (
          <div
            key={index}
            className={`sidebar-item ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => dispatch(setActiveTab(tab.name))}  // Dispatch the action to set active tab
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
