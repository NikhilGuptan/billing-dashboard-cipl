import React from "react";
import "./BarGraphComponent.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const BarGraphComponent = ({ title, data, dataKey1, dataKey2 }) => {
  return (
    <div className="bar-graph-container">
      <div className="title-bar">
        <h4>{title}</h4>
      </div>
      <div className="bar-chart-container">
        <BarChart width={500} height={300} data={data}>
          {/* Remove the matrix lines by setting stroke to none */}
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Use dynamic dataKey for utilized and total */}
          <Bar dataKey={dataKey1} stackId="a" fill={data[0]?.colorTop} barSize={50} />
          <Bar dataKey={dataKey2} stackId="a" fill={data[0]?.colorBottom} barSize={50} />
        </BarChart>
      </div>
    </div>
  );
};

export default BarGraphComponent;
