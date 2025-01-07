import React, { useState, useMemo } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { data } from '../utils/fetchData';
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

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  // Extract unique months from the data
  const months = useMemo(() => 
    Array.from(
      new Set(
        data.flatMap((entry) => [
          ...entry.supplier_records.map((record) => record.month),
          ...entry.customer_records.map((record) => record.month),
        ])
      )
    ), 
    []
  );

  // Filter data for the selected month
  const filteredData = useMemo(() => 
    data.find((entry) =>
      entry.supplier_records.some((record) => record.month === selectedMonth) ||
      entry.customer_records.some((record) => record.month === selectedMonth)
    ), 
    [selectedMonth]
  );

  // If no data is available for the selected month
  if (!filteredData) {
    return <p>No data available for the selected month.</p>;
  }

  // Prepare chart data dynamically based on the filtered data
  const supplierVsCustomerData = useMemo(() => ({
    labels: filteredData.supplier_records.map((record) => record.month),
    datasets: [
      {
        label: 'Supplier Bags',
        data: filteredData.supplier_records.map((record) => record.bags),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Customer Bags',
        data: filteredData.customer_records.map((record) => record.bags),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  }), [filteredData]);

  const topSellingData = useMemo(() => ({
    labels: filteredData.top_selling_products.map((product) => product.item),
    datasets: [
      {
        data: filteredData.top_selling_products.map((product) => product.weight),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A'],
      },
    ],
  }), [filteredData]);

  // Line Chart options for customized y-axis
  const lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `${value / 1000}k`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 bg-[#F7F9FB]">

      <div className="mb-6 flex flex-col gap-2">
        <label htmlFor="month-select" className="text-lg font-medium">Select Month:</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-black"
        >
          {months.map((month, index) => (
            <option key={index} value={month} className="text-black">{month}</option>
          ))}
        </select>
      </div>
    
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Dashboard for {selectedMonth}</h2>
    
 

        {/* Reduced Size for Graphs */}
        <div className="bg-gray-900 w-[600px] h-[300px] p-6 rounded-lg text-white mb-6">
          <h3 className="text-xl font-semibold mb-4">Supplier vs Customer Bags</h3>
          {/* @ts-ignore */}
          <Line data={supplierVsCustomerData} options={lineChartOptions} />
        </div>
    
       
        <div className="bg-gray-900 w-[300px] h-[300px] p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-4">Top Selling Products</h3>
          <Pie  data={topSellingData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
