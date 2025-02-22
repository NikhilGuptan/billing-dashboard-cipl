import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import DashboardComponent from "./components/dashboard/dashboardComponent";
import ConsumptionDetails from "./components/consumptionDetails/consumptionDetails";

function App() {
  return (
    <Router>
      <RedirectToHome />
      <div className="body">
        <LeftSideBar />
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<DashboardComponent />} />
            <Route path="/Consumption_details" element={<ConsumptionDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function RedirectToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  return null;
}

export default App;
