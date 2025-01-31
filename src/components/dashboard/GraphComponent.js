import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// Import the CSS file for Graph component styles
import './GraphComponent.css';

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
      chart = (
        <div className="pie-chart-container">
          <Pie data={data} />
        </div>
      );
      break;
    case 'bar':
      const barData = {
        ...data,
        datasets: data.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: '#BFE3F8', // Light blue color for the bars
          borderColor: '#2461C4', // Color for the border of bars
          barThickness: 12, // Make bars smaller
        })),
      };

      chart = (
        <div className="bar-chart-container">
          <Bar data={barData} />
        </div>
      );
      break;
    case 'line':
      chart = (
        <div className="line-chart-container">
          <Line data={data} />
        </div>
      );
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
