import React from "react";
import "./ProjectCharges.module.css";
import TableComponent from "./TableComponent"; // Import the table component
import GraphComponent from "../dashboard/GraphComponent";

function ProjectChargesComponent() {
  const costByProductData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Top charges",
        data: [2.5, 3.2, 3.1, 2.8],
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const costByDayData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Charges Over Time",
        data: [1.2, 1.4, 2.0, 1.8, 2.4, 2.6, 3.8],
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

      <div className="dropdown-container-project">
        <select className="year-dropdown">
          <option value="">Type</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
        <select className="year-dropdown">
          <option value="">November</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
        <select className="year-dropdown">
          <option value="">Filter</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className="graphs-container">
        <div className="row">
          <div className="graph-box">
            <div className="graph-header">Charges</div>
            <div className="graph-content">
              <p>November ( 01/11/2024 - 22/11/2024)</p>
              <p style={{ color: "#2461C4", fontSize: "40px" }}>₹ 56,17,530.65</p>
            </div>
          </div>
          <GraphComponent title="Top charges" data={costByProductData} type="bar" />
          <GraphComponent title="Charges Over Time" data={costByDayData} type="line" />
        </div>
      </div>
      {/* Add TableComponent here */}
      <TableComponent />
    </div>
  );
}

export default ProjectChargesComponent;
