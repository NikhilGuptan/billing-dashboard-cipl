import React from "react";
import './consumtionDetails.css';
import { months } from "../dashboard/dashboard.helper";
import LineGraphComponent from "../graphs/LineGraph/LineGraphComponent";
import TableComponent from "../graphs/Table/TableComponent";

const lineData = [
  { date: "02/05/2024", powerScale: 4000, powerStore: 2400, unityXT: 2400 },
  { date: "03/05/2024", powerScale: 3000, powerStore: 1398, unityXT: 2210 },
  { date: "04/05/2024", powerScale: 2000, powerStore: 9800, unityXT: 2290 },
  { date: "05/05/2024", powerScale: 2780, powerStore: 3908, unityXT: 2000 },
  { date: "06/05/2024", powerScale: 1890, powerStore: 4800, unityXT: 2181 },
  { date: "07/05/2024", powerScale: 2390, powerStore: 3800, unityXT: 2500 },
  { date: "08/05/2024", powerScale: 3490, powerStore: 4300, unityXT: 2100 },
  { date: "09/05/2024", powerScale: 4500, powerStore: 5000, unityXT: 2800 },
];

const columns = ["ID", "Name", "Age", "Email", "City", "Department", "Role", "Salary"];

const data = [
  { ID: 1, Name: "Alice", Age: 28, Email: "alice@example.com", City: "New York", Department: "IT", Role: "Developer", Salary: "$5000" },
  { ID: 2, Name: "Bob", Age: 32, Email: "bob@example.com", City: "Los Angeles", Department: "HR", Role: "Manager", Salary: "$6000" },
  { ID: 3, Name: "Charlie", Age: 27, Email: "charlie@example.com", City: "Chicago", Department: "Sales", Role: "Executive", Salary: "$4500" },
  { ID: 4, Name: "David", Age: 35, Email: "david@example.com", City: "Houston", Department: "Finance", Role: "Analyst", Salary: "$5500" },
  { ID: 5, Name: "Eva", Age: 30, Email: "eva@example.com", City: "Miami", Department: "Marketing", Role: "Lead", Salary: "$5200" },
  { ID: 6, Name: "Frank", Age: 29, Email: "frank@example.com", City: "Seattle", Department: "IT", Role: "Support", Salary: "$4800" },
  { ID: 7, Name: "Grace", Age: 26, Email: "grace@example.com", City: "San Francisco", Department: "Admin", Role: "Coordinator", Salary: "$4300" },
  { ID: 8, Name: "Henry", Age: 31, Email: "henry@example.com", City: "Denver", Department: "IT", Role: "Developer", Salary: "$5200" },
  { ID: 9, Name: "Ivy", Age: 33, Email: "ivy@example.com", City: "Austin", Department: "HR", Role: "Assistant", Salary: "$4000" },
  { ID: 10, Name: "Jack", Age: 29, Email: "jack@example.com", City: "Boston", Department: "Operations", Role: "Manager", Salary: "$5800" },
  { ID: 11, Name: "Karen", Age: 27, Email: "karen@example.com", City: "Dallas", Department: "IT", Role: "Developer", Salary: "$5100" },
  { ID: 12, Name: "Leo", Age: 36, Email: "leo@example.com", City: "Phoenix", Department: "Legal", Role: "Advisor", Salary: "$6300" },
  { ID: 13, Name: "Mia", Age: 25, Email: "mia@example.com", City: "San Diego", Department: "Support", Role: "Executive", Salary: "$4200" },
  { ID: 14, Name: "Nathan", Age: 34, Email: "nathan@example.com", City: "Portland", Department: "IT", Role: "Architect", Salary: "$6500" },
];
const lineKeys = [
  { key: "powerScale", color: "#8884d8", label: "Power Scale" },
  { key: "powerStore", color: "#82ca9d", label: "Power Store" },
  { key: "unityXT", color: "#ff7300", label: "Unity XT" },
];

const dropdownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
];

function ConsumptionDetails() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3 style={{ marginRight: "auto" }}>Consumption Details</h3>
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

      <LineGraphComponent
        title="Consumption by Category"
        data={lineData}
        dataKeys={lineKeys}
        dropdownOptions={dropdownOptions} 
      />
    <TableComponent title="Consumption Details" columns={columns} data={data} />
    </div>
  );
}

export default ConsumptionDetails;
