import React from "react";
import "./DashboardComponent.css";
import { months } from "./dashboard.helper";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import BarGraphComponent from "../graphs/BarGraph/BarGraphComponent";

const data = [
  { name: "Consumed", value: 30, color: "#FF0000" },
  { name: "Free", value: 70, color: "#0000FF" },
];

const barData = [
  { name: "Switch 1", utilized: 4, total: 10, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
  { name: "Switch 2", utilized: 6, total: 12, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
  { name: "Switch 3", utilized: 5, total: 15, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
  { name: "Switch 4", utilized: 7, total: 20, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
  { name: "Switch 5", utilized: 8, total: 25, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
];

const barDataStorage = [
  { name: "UNITY XT 680", utilized: 4, total: 10, colorTop: "#5585BF", colorBottom: "#C25553" },
  { name: "POWER STORE 3200T", utilized: 6, total: 12, colorTop: "#5585BF", colorBottom: "#C25553" },
  { name: "POWER SCALE F600", utilized: 5, total: 15, colorTop: "#5585BF", colorBottom: "#C25553" }
];

function DashboardComponent() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3 style={{ marginRight: "auto" }}>Dashboard</h3>
        <div className="dropdown">
          <select className="filter-dropdown">
            <option value="">All</option>
            <option value="server">Server</option>
            <option value="switch">Switch</option>
            <option value="storage">Storage</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="filter-dropdown">
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="total-cost-container">
          <div className="title-bar">
            <h4>Total Cost</h4>
          </div>
          <div className="total-cost">
            <h2>₹ 1,23,456.54</h2>
          </div>
        </div>
        <div className="utilization-stats-container">
          <div className="title-bar">
            <h4>Utilization Stats</h4>
            <div className="dropdown">
              <select className="filter-dropdown">
                <option value="server">Server</option>
                <option value="switch">Switch</option>
                <option value="storage">Storage</option>
              </select>
            </div>
          </div>

          <div className="pie-chart-container">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <div className="total-stat">
              <span>Total: </span>30
            </div>
          </div>
        </div>
      </div>

      {/* Use BarGraphComponent for Switch Consumption Stats */}
      <BarGraphComponent title="Switch Consumption Stats" data={barData} dataKey1="utilized" dataKey2="total" />

      {/* Use BarGraphComponent for Storage Consumption Stats */}
      <BarGraphComponent title="Storage Consumption Stats" data={barDataStorage} dataKey1="utilized" dataKey2="total" />
    </div>
  );
}

export default DashboardComponent;
