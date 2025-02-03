import React from "react";
import "./TableComponen.css"; // Apply your styles here

function TableComponent() {
  const tableData = [
    {
      title: "Data Domain",
      rows: [
        {
          device: "Device 1",
          location: "Location 1",
          schedule: "Schedule 1",
          country: "Country 1",
          product: "Product 1",
          resourceType: "Type 1",
          resourceName: "Resource 1",
          capacityUnits: "Units 1",
          totalCapacity: "Capacity 1",
        },
        {
          device: "Device 2",
          location: "Location 2",
          schedule: "Schedule 2",
          country: "Country 2",
          product: "Product 2",
          resourceType: "Type 2",
          resourceName: "Resource 2",
          capacityUnits: "Units 2",
          totalCapacity: "Capacity 2",
        },
        {
          device: "Device 3",
          location: "Location 3",
          schedule: "Schedule 3",
          country: "Country 3",
          product: "Product 3",
          resourceType: "Type 3",
          resourceName: "Resource 3",
          capacityUnits: "Units 3",
          totalCapacity: "Capacity 3",
        },
      ],
    },
    {
      title: "PowerScale",
      rows: [
        {
          device: "Device A",
          location: "Location A",
          schedule: "Schedule A",
          country: "Country A",
          product: "Product A",
          resourceType: "Type A",
          resourceName: "Resource A",
          capacityUnits: "Units A",
          totalCapacity: "Capacity A",
        },
        {
          device: "Device B",
          location: "Location B",
          schedule: "Schedule B",
          country: "Country B",
          product: "Product B",
          resourceType: "Type B",
          resourceName: "Resource B",
          capacityUnits: "Units B",
          totalCapacity: "Capacity B",
        },
        {
          device: "Device C",
          location: "Location C",
          schedule: "Schedule C",
          country: "Country C",
          product: "Product C",
          resourceType: "Type C",
          resourceName: "Resource C",
          capacityUnits: "Units C",
          totalCapacity: "Capacity C",
        },
      ],
    },
  ];

  return (
    <div className="table-container">
      {/* Table Head */}
      <table className="table">
        <thead>
          <tr>
            <th>Device</th>
            <th>Location</th>
            <th>Schedule</th>
            <th>Country</th>
            <th>Product</th>
            <th>Resource Type</th>
            <th>Resource Name</th>
            <th>Capacity Units</th>
            <th>Total Capacity</th>
          </tr>
        </thead>
      </table>

      {/* Dynamically Render Titles and Rows */}
      {tableData.map((section, index) => (
        <div key={index} className="table-section">
          <h3 className="section-title">{section.title}</h3>
          <table className="table">
            <tbody>
              {section.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.device}</td>
                  <td>{row.location}</td>
                  <td>{row.schedule}</td>
                  <td>{row.country}</td>
                  <td>{row.product}</td>
                  <td>{row.resourceType}</td>
                  <td>{row.resourceName}</td>
                  <td>{row.capacityUnits}</td>
                  <td>{row.totalCapacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default TableComponent;
