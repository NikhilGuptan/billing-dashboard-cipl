import React from "react";
import "./DashboardComponent.css";
import { barData, barDataStorage, deviceMasterMapping, months } from "./dashboard.helper";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import BarGraphComponent from "../graphs/BarGraph/BarGraphComponent";

const data = [
  { name: "Consumed", value: 30, color: "#FF0000" },
  { name: "Free", value: 70, color: "#0000FF" },
];

function DashboardComponent() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3 style={{ marginRight: "auto" }}>Dashboard</h3>
        <div className="dropdown">
          <select className="filter-dropdown">
            <option value="">All</option>
            {deviceMasterMapping.map((device) => {
              return (
                <option value={device?.deviceId}>{device?.value}</option>
              )
            })}
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
                {deviceMasterMapping.map((device) => {
                  return (
                    <option value={device?.deviceId}>{device?.value}</option>
                  )
                })}
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
      <BarGraphComponent title="Switch Consumption Stats" data={barData} dataKey1="utilized" dataKey2="total" />
      <BarGraphComponent title="Storage Consumption Stats" data={barDataStorage} dataKey1="utilized" dataKey2="total" />
    </div>
  );
}

export default DashboardComponent;
