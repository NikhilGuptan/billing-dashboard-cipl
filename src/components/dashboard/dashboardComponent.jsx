import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DashboardComponent.css";
import { barData, barDataStorage, deviceMasterMapping, findMonth, months } from "./dashboard.helper";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import BarGraphComponent from "../graphs/BarGraph/BarGraphComponent";
import { BASE_URL } from "../../Utils/Constants";

const data = [
  { name: "Consumed", value: 30, color: "#FF0000" },
  { name: "Free", value: 70, color: "#0000FF" },
];

function DashboardComponent() {
  const [selectedMonth, setSelectedMonth] = useState("feb");
  const [selectedDevicePrice, setSelectedDevicePrice] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [totalCost, setTotalCost] = useState("0.00");

  useEffect(() => {
    fetchTotalCost();
  }, [selectedMonth, selectedDevicePrice]);

  const fetchTotalCost = async () => {
    try {
      const formattedMonth = `2025-0${findMonth(selectedMonth)}`;
      const url = selectedDevicePrice ? `${BASE_URL}/totalCost/${selectedDevicePrice}` : `${BASE_URL}/totalCost`;
      const response = await axios.get(url, { params: { month: formattedMonth } });
      setTotalCost(response.data?.totalCost || "0.00");
    } catch (error) {
      console.error("Error fetching total cost:", error);
      setTotalCost("0.00");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3 style={{ marginRight: "auto" }}>Dashboard</h3>
        <div className="dropdown">
          <select
            className="filter-dropdown"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
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
            <div className="dropdown">
              <select
                className="filter-dropdown"
                value={selectedDevicePrice}
                onChange={(e) => setSelectedDevicePrice(e.target.value)}
              >
                <option value="">All</option>
                {deviceMasterMapping.map((device) => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="total-cost">
            <h2>₹ {totalCost}</h2>
          </div>
        </div>
        <div className="utilization-stats-container">
          <div className="title-bar">
            <h4>Utilization Stats</h4>
            <div className="dropdown">
              <select
                className="filter-dropdown"
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
              >
                {deviceMasterMapping.map((device) => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.value}
                  </option>
                ))}
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
