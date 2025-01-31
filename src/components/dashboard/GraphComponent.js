import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement // Register the point element to resolve the error
);

const GraphComponent = ({ title, chartType, data }) => {
  let chart;
  
  switch (chartType) {
    case 'pie':
      chart = <Pie data={data} />;
      break;
    case 'bar':
      chart = <Bar data={data} />;
      break;
    case 'line':
      chart = <Line data={data} />;
      break;
    default:
      chart = null;
  }

  return (
    <div className="graph-card">
      <h3>{title}</h3>
      {chart}
    </div>
  );
};

export default GraphComponent;
