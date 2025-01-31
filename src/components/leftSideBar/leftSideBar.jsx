import React, { useState } from "react";
import "./LeftSideBar.css";
import CIPLIQ from "../../images/cipl iq.svg";
import { RiDashboardLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { LuReceiptIndianRupee } from "react-icons/lu";

const leftSideBarTabs = [
  { name: "Dashboard", icon: <RiDashboardLine /> },
  { name: "Projected Charges", icon: <RiDashboardLine /> },
  { name: "Reports", icon: <TbReport /> },
  { name: "Capacity", icon: <RiDashboardLine /> },
  { name: "Billing Estimates", icon: <LuReceiptIndianRupee /> },
];

function LeftSideBar() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="sidebar">
      <img src={CIPLIQ} alt="Logo" className="sidebar-logo" />
      <p className="sidebar-title">Overview</p>

      <div className="sidebar-menu">
        {leftSideBarTabs.map((tab, index) => (
          <div
            key={index}
            className={`sidebar-item ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => setActiveTab(tab.name)}
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
