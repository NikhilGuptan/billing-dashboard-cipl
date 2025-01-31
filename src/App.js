import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import NavBar from "./components/navBar/navBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="body">
        {/* Left Sidebar */}
        <LeftSideBar />

        {/* Main Content Area */}
        <div className="main-content">
          {/* Navbar */}
          <NavBar />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/reports" element={<h1>Reports</h1>} />
            <Route path="/billing" element={<h1>Billing Estimates</h1>} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
