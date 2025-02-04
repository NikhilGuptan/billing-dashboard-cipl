import React from "react";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const GraphComponent = ({ title, data, type }) => {
  const options = {
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
  };

  if (type === "pie") {
    // Convert dataset to include percentage labels
    const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
    const pieData = data.labels.map((label, index) => ({
      id: index,
      value: data.datasets[0].data[index],
      percentage: ((data.datasets[0].data[index] / total) * 100).toFixed(1) + "%",
    }));

    // Define lighter colors
    const lightColors = ["#FFDDC1", "#B3E5FC", "#C8E6C9", "#80DEEA"];

    return (
      <div className="graph-box">
        <div className="graph-header">{title}</div>
        <div className="graph-content">
          <PieChart
          colors={lightColors}
            series={[
              {
                data: pieData,
                arcLabel: (item) => item.percentage, // Show percentage only
                innerRadius: 10,
                outerRadius: 120,
                paddingAngle: 0,
                // colors: lightColors, // Apply light colors
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "#000",
                fontSize: 14,
                fontWeight: "bold",
              },
            }}
            {...options}
          />
        </div>
      </div>
    );
  }

  if (type === "bar") {
    return (
      <div className="graph-box">
        <div className="graph-header">{title}</div>
        <div className="graph-content">
          <BarChart
            xAxis={[{ scaleType: "band", data: data.labels }]}
            series={[{ data: data.datasets[0].data, color: data.datasets[0].backgroundColor }]}
            grid={{ horizontal: true }} // Add horizontal grid lines
            {...options}
          />
        </div>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className="graph-box">
        <div className="graph-header">{title}</div>
        <div className="graph-content">
          <LineChart
            xAxis={[{ scaleType: "point", data: data.labels }]}
            series={[
              {
                data: data.datasets[0].data,
                color: data.datasets[0].borderColor,
                area: true, // Enables the area fill effect
              },
            ]}
            grid={{ horizontal: true }} // Add horizontal grid lines
            {...options}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default GraphComponent;
