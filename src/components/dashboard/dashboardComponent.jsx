import React from "react";
import "./DashboardComponent.css";
import { months } from "./dashboard.helper";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"; // Import from recharts
import { BarChart, Bar, XAxis, YAxis, Tooltip as BarTooltip, Legend as BarLegend, CartesianGrid } from "recharts"; // Import BarChart for the stacked bar graph

const data = [
  { name: "Consumed", value: 30, color: "#FF0000" }, // Red color for consumed
  { name: "Free", value: 70, color: "#0000FF" }, // Blue color for free
];

// Example Data for the bar graph (Switch 1 to Switch 5)
const barData = [
  { name: "Switch 1", utilized: 4, total: 10 },
  { name: "Switch 2", utilized: 6, total: 12 },
  { name: "Switch 3", utilized: 5, total: 15 },
  { name: "Switch 4", utilized: 7, total: 20 },
  { name: "Switch 5", utilized: 8, total: 25 },
];

function DashboardComponent() {
  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
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

      {/* Total Cost and Graph Section */}
      <div className="dashboard-row">
        {/* Total Cost Section */}
        <div className="total-cost-container">
          <div className="title-bar">
            <h4>Total Cost</h4>
          </div>
          <div className="total-cost">
            <h2>₹ 1,23,456.54</h2>
          </div>
        </div>

        {/* Utilization Stats Section */}
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

          {/* Pie Chart */}
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

      {/* Bar Graph Section */}
      <div className="bar-graph-container">
        <div className="title-bar">
          <h4>Switch Consumption Stats</h4>
        </div>
        <div className="bar-chart-container">
          <BarChart width={800} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <BarTooltip />
            <BarLegend />
            <Bar dataKey="utilized" stackId="a" fill="#FF0000" />
            <Bar dataKey="total" stackId="a" fill="#0000FF" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
