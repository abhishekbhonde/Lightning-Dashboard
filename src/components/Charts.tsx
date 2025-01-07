// src/components/Charts.tsx
import React from "react";
import { Pie, Line } from "react-chartjs-2";
import { ArcElement, PointElement, LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

// Register all necessary chart elements
ChartJS.register(
  ArcElement,       // For Pie chart
  PointElement,     // For Line chart
  LineElement,      // For Line chart
  Title,            // Title for charts
  Tooltip,          // Tooltips for charts
  Legend,           // Legends for charts
  CategoryScale,    // For the x-axis scale in Line chart
  LinearScale       // For the y-axis scale in Line chart
);

const Charts = () => {
  const pieData = {
    labels: ["Item A", "Item B", "Item C"],
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Supplier Records",
        data: [65, 59, 80, 81, 56],
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
      },
      {
        label: "Customer Records",
        data: [28, 48, 40, 19, 86],
        borderColor: "#33FF57",
        backgroundColor: "rgba(51, 255, 87, 0.2)",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Top Selling Items</h3>
        <Pie data={pieData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Supplier vs Customer Records</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Charts;
