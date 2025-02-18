import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import "./LineGraphComponent.css"

const LineGraphComponent = ({ title, data, dataKeys, dropdownOptions }) => {
  return (
    <div className="line-graph-container">
      <div className="title-bar">
        <h4>{title}</h4>
        {dropdownOptions && (
          <div className="dropdown">
            <select className="filter-dropdown">
              {dropdownOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="line-chart-container">
        <LineChart width={1000} height={300} data={data}>
          {/* Remove the dotted grid lines */}
          <CartesianGrid stroke="transparent" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={3}  // Thicker lines
              activeDot={{ r: 8 }}
              name={line.label}
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraphComponent;
