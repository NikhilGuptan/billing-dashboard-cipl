import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import DashboardComponent from "./components/dashboard/dashboardComponent";

function App() {
  return (
    <Router>
      <div className="body">
        <LeftSideBar />
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<DashboardComponent />} />
            {/* <Route path="/reports" element={<ReportsComponent />} />
            <Route path="/billing" element={<BillingComponent />} />
            <Route path="/projected-charges" element={<ProjectedChargesComponent />} />
            <Route path="/capacity" element={<CapacityComponent />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
