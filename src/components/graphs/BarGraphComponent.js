import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const BarGraphComponent = ({ title, data }) => {
  return (
    <div className="bar-graph-container">
      {/* Dynamic Title */}
      <div className="title-bar">
        <h4>{title}</h4>
      </div>

      {/* Bar Graph */}
      <div className="bar-chart-container">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bar1" stackId="a" fill="#8884d8" />
          <Bar dataKey="bar2" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraphComponent;
