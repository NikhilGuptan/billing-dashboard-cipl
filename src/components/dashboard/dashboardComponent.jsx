import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DashboardComponent.css";
import { barData, barDataStorage, deviceMasterMapping, findMonth, findSwitchConsumptionData, months } from "./dashboard.helper";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import BarGraphComponent from "../graphs/BarGraph/BarGraphComponent";
import { BASE_URL, SWITCHUTILIZATIONSTATUS_API, UTILIZATIONSTATUS_API } from "../../Utils/Constants";

const data = [
  { name: "Consumed", value: 30, color: "#E60049" },
  { name: "Free", value: 70, color: "#0997D6" },
];

function DashboardComponent() {
  const currentDate = new Date();
  const currentMonthKey = currentDate.getMonth() + 1; // Get current month as a number (1-12)
  const currentMonthValue = months.find(month => month.key === currentMonthKey)?.value || "jan";
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonthValue);
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [selectedDevicePrice, setSelectedDevicePrice] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("1");
  const [totalCost, setTotalCost] = useState("0.00");
  const [utilizationStats, setUtilizationStats] = useState(data);
  const [switchConsumptionStats, setSwitchConsumptionStats] = useState(barData);

  const years = Array.from({ length: currentYear - 2025 + 1 }, (_, index) => (2025 + index).toString());

   useEffect(() => {
    fetchTotalCost();
  }, [selectedMonth, selectedYear, selectedDevicePrice]);

  useEffect(() => {
    fetchUtilizationStats();
  }, [selectedDevice, selectedMonth, selectedYear]);

  useEffect(() => {
    fetchSwitchConsumptionStats();
  }, [selectedMonth, selectedYear]);

  const fetchTotalCost = async () => {
    try {
      const formattedMonth = `${selectedYear}-0${findMonth(selectedMonth)}`;
      const url = selectedDevicePrice ? `${BASE_URL}/api/billing/totalCost/${selectedDevicePrice}` : `${BASE_URL}/api/billing/totalCost`;
      const response = await axios.get(url, { params: { month: formattedMonth } });
      setTotalCost(response.data?.totalCost || "0.00");
    } catch (error) {
      console.error("Error fetching total cost:", error);
      setTotalCost("0.00");
    }
  };

  const fetchUtilizationStats = async () => {
    try {
      const formattedMonth = `${selectedYear}-0${findMonth(selectedMonth)}`;
      const response = await axios.get(UTILIZATIONSTATUS_API, { params: { month: formattedMonth, deviceId: selectedDevice } }); 
      const { consumedGiB, totalCapacity } = response.data;
      const freeGiB = totalCapacity - consumedGiB;
      const consumedPercentage = ((consumedGiB / totalCapacity) * 100).toFixed(2);
      const freePercentage = 100 - consumedPercentage;
      const updatedData = [
        { name: "Consumed", value: consumedGiB, color: "#E60049", percentage: consumedPercentage },
        { name: "Free", value: freeGiB, color: "#0997D6", percentage: freePercentage },
      ];
      setUtilizationStats(updatedData);
    } catch (error) {
      console.error("Error fetching utilization stats:", error);
      setUtilizationStats([]);
    }
  };

  const fetchSwitchConsumptionStats = async () => {
    try {
      const formattedMonth = `${selectedYear}-0${findMonth(selectedMonth)}`;
      const response = await axios.get(SWITCHUTILIZATIONSTATUS_API, { params: { month: formattedMonth } });

      if (response?.data) {
        const { leafSwitch, sanSwitch, utilizationStats } = response.data;
        const updatedData = findSwitchConsumptionData(leafSwitch, sanSwitch, utilizationStats);
        const hasData = updatedData.some((item) => item.utilized > 0 || item.total > 0);
        setSwitchConsumptionStats(hasData ? updatedData : []);
      } else {
        setSwitchConsumptionStats([]);
      }
    } catch (error) {
      console.error("Error fetching switch utilization stats:", error);
      setSwitchConsumptionStats([]);
    }
  };



  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3 style={{ marginRight: "auto" }}>Dashboard</h3>
        <div className="dropdown">
          <select className="filter-dropdown" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
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

          {utilizationStats.length ? <div className="pie-chart-container">
            <PieChart width={300} height={300}>
              <Pie
                data={utilizationStats}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {utilizationStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <div className="total-stat">
              <span>Total: </span>30
            </div>
          </div> : <h2>No Data Found</h2>}
        </div>
      </div>
      <BarGraphComponent title="Switch Consumption Stats" data={switchConsumptionStats} dataKey1="utilized" dataKey2="total" />
      <BarGraphComponent title="Storage Consumption Stats" data={barDataStorage} dataKey1="utilized" dataKey2="total" />
    </div>
  );
}

export default DashboardComponent;
