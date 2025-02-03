import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";
import "./DashboardComponent.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const GraphComponent = ({ title, data, type }) => {
  const chartTypes = { bar: Bar, line: Line, pie: Pie };
  const ChartTag = chartTypes[type] || Bar;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      tooltip: { enabled: true },
    },
  };

  if (type === "pie") {
    options.plugins.datalabels = {
      formatter: (value, context) => `${value}%`,
      color: "#000",
      font: { weight: "bold" },
    };
  }

  return (
    <div className="graph-box">
      <div className="graph-header">{title}</div>
      <div className="graph-content">
        <ChartTag data={data} options={options} />
      </div>
    </div>
  );
};


export default GraphComponent;