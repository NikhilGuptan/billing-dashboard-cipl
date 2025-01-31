import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import DashboardComponent from "./components/dashboardComponent";

function App() {
  return (
    <Router>
      <div className="body">
        <LeftSideBar />
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<DashboardComponent/>} />
            <Route path="/reports" element={<h1>Reports</h1>} />
            <Route path="/billing" element={<h1>Billing Estimates</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
