import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const BarGraphComponent = ({ title, data }) => {
  return (
    <div className="bar-graph-container">
      <div className="title-bar">
        <h4>{title}</h4>
      </div>
      <div className="bar-chart-container">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Reduced bar size */}
          <Bar dataKey="utilized" stackId="a" fill="#FF0000" barSize={50} />
          <Bar dataKey="total" stackId="a" fill="#0000FF" barSize={50} />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraphComponent;
