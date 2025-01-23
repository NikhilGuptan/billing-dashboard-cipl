import React from "react";
import "./table.css";

const TableComponent = () => {
  const tableData = [
    {
      group: "Data Domain",
      rows: [
        {
          device: "************",
          location: "EDINBURGH-PARKS",
          schedule: "Schedule 05-01",
          country: "AU",
          product: "DD 9300",
          resourceType: "Asset",
          resourceName: "na",
          capacityUnits: "GiB",
          totalCapacity: "882,581.70",
          committedPercent: "40%",
          committedCapacity: "353,032.68",
          committedCharge: "$0.00",
          consumedCapacity: "97,292.98",
          reserveUsedCapacity: "0.00",
          reserveRate: "$0.00000",
          reserveCharge: "$0.00",
          total: "$0.00",
        },
      ],
    },
    {
      group: "PowerScale",
      rows: [
        {
          device: "************",
          location: "EDINBURGH-PARKS",
          schedule: "Schedule 08-00",
          country: "AU",
          product: "PowerScale Cluster",
          resourceType: "NodeGroup",
          resourceName: "NG08-00",
          capacityUnits: "GiB",
          totalCapacity: "1,772,438.46",
          committedPercent: "60%",
          committedCapacity: "1,063,461.88",
          committedCharge: "$0.00",
          consumedCapacity: "591,758.73",
          reserveUsedCapacity: "0.00",
          reserveRate: "$0.00",
          reserveCharge: "$0.00",
          total: "$0.00",
        },
      ],
    },
  ];

  return (
    <div className="table-container">
      {/* Header Section */}
      <div className="header">
        <div className="logo">DELL</div>
        <div className="title">Apex Subscriptions Consumption & Rating 2024-10</div>
      </div>

      {/* Sub Header Section */}
      <div className="sub-header">
        <div className="company-name">ACME</div>
        <div className="billing-info">
          <p>Billing Schedule: 1st through last day of each month</p>
          <p>Billing Period: 2024-10</p>
          <p>Days In Period: 31</p>
          <p>Period Start: 2024-10-01</p>
          <p>Period End: 2024-10-31</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-wrapper">
        <table className="data-table">
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
              <th>Committed %</th>
              <th>Committed Capacity</th>
              <th>Committed Charge</th>
              <th>Consumed Capacity</th>
              <th>Reserve Used Capacity</th>
              <th>Reserve Rate</th>
              <th>Reserve Charge</th>
              <th>Total (AUD)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((group, index) => (
              <React.Fragment key={index}>
                {/* Group Row */}
                <tr className="group-row">
                  <td colSpan="17">{group.group}</td>
                </tr>
                {/* Data Rows */}
                {group.rows.map((row, rowIndex) => (
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
                    <td>{row.committedPercent}</td>
                    <td>{row.committedCapacity}</td>
                    <td>{row.committedCharge}</td>
                    <td>{row.consumedCapacity}</td>
                    <td>{row.reserveUsedCapacity}</td>
                    <td>{row.reserveRate}</td>
                    <td>{row.reserveCharge}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="17">2024-10 Totals (AUD): $0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
