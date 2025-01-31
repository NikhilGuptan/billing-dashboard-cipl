import React from "react";
import GraphComponent from "./GraphComponent"; // Import the GraphComponent
import "./DashboardComponent.css";

function DashboardComponent() {
  // Data for the graphs
  const costOfResourceData = {
    labels: ['Resource A', 'Resource B', 'Resource C'],
    datasets: [
      {
        label: 'Cost of Resource',
        data: [300, 150, 250],
        backgroundColor: ['#BFE3F8', '#B3E5D6', '#F9C5B3'],
      }
    ]
  };

  const costByProductData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Cost by Product',
        data: [500, 400, 700],
        backgroundColor: '#2461C4',
      }
    ]
  };

  const costByDayData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Cost by Day',
        data: [50, 100, 150, 200, 250],
        fill: false,
        borderColor: '#2461C4',
        tension: 0.1
      }
    ]
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

      {/* Graph Section */}
      <div className="graphs-container">
        {/* First Row */}
        <div className="graph-row">
          <GraphComponent title="Cost of Resource" chartType="pie" data={costOfResourceData} />
          <GraphComponent title="Cost by Product" chartType="bar" data={costByProductData} />
        </div>

        {/* Second Row */}
        <div className="graph-row">
          <GraphComponent title="Cost by Day" chartType="line" data={costByDayData} />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
