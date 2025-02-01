import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/Footer";
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
          </Routes>
          <Footer /> {/* Add Footer here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
