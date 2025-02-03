import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";
import "./DashboardComponent.css";
import GraphComponent from "./GraphComponent";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

function DashboardComponent() {
  const costByProductData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Cost by Product",
        data: [2.5, 3.2, 3.1, 2.8, 0.9, 1.8, 1.7, 0.7, 0.2, 1.3, 0.9, 0.6],
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const costByResourceData = {
    labels: ["Switch", "Compute Solution", "Enterprise Storage", "Enterprise Backup"],
    datasets: [
      {
        label: "Cost by Resource",
        data: [40, 30, 20, 10],
        backgroundColor: ["#FFCCBC", "#B3E5FC", "#C8E6C9", "#80DEEA"],
      },
    ],
  };

  const costByDayData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Cost by Day",
        data: [1.2, 1.4, 2.0, 1.8, 2.4, 2.6, 3.8, 2.9, 1.5, 1.8, 2.1, 2.3],
        borderColor: "#4A90E2",
        fill: true,
        backgroundColor: "rgba(74,144,226,0.2)",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 style={{ color: "#2461C4" }}>Dashboard</h1>
        <div className="dropdown">
          <select className="action-dropdown">
            <option value="">ACTIONS</option>
            <option value="action1">Action 1</option>
            <option value="action2">Action 2</option>
          </select>
        </div>
      </div>

      <div className="dropdown-container">
        <select className="year-dropdown">
          <option value="">Last Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className="graphs-container">
        <div className="row">
        <GraphComponent title="Cost by Resource" data={costByResourceData} type="pie" />
          <GraphComponent title="Cost by Product" data={costByProductData} type="bar" />
        </div>
        <div className="row single-row">
          <GraphComponent title="Cost by Day" data={costByDayData} type="line" />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
