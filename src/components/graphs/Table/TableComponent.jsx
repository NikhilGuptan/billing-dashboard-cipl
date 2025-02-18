import React from "react";
import "./TableComponent.css";

const TableComponent = ({ title, columns, data }) => {
  return (
    <div className="table-container">
      <div className="title-bar">
        <h4>{title}</h4>
      </div>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
