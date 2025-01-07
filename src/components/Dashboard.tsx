import React, { useState, useMemo } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { data } from '../utils/fetchData';
import {
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

// Register all necessary chart elements
ChartJS.register(
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  // Extract unique months from the data
  const months = useMemo(
    () =>
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
  const filteredData = useMemo(
    () =>
      data.find(
        (entry) =>
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
  const supplierVsCustomerData = useMemo(
    () => ({
      labels: filteredData.supplier_records.map((record) => record.month),
      datasets: [
        {
          label: 'Supplier Bags',
          data: filteredData.supplier_records.map((record) => record.bags),
          borderColor: (ctx) => {
            const { chart } = ctx;
            const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
            gradient.addColorStop(1, '#000000');
            return gradient;
          },
          borderWidth: 2,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0, // Remove the points (markers) on the line
        },
        {
          label: 'Customer Bags',
          data: filteredData.customer_records.map((record) => record.bags),
          borderColor: '#1DBEF8',
          borderWidth: 2,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0, // Remove the points (markers) on the line
        },
      ],
    }),
    [filteredData]
  );

  const topSellingData = useMemo(
    () => {
      // Create gradient for the largest part of the pie chart
      const gradient = (ctx: any) => {
        const { chart } = ctx;
        const gradientFill = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
        gradientFill.addColorStop(0, '#00395D');
        gradientFill.addColorStop(0.5, 'rgba(6, 80, 128, 0.6)');
        gradientFill.addColorStop(1, 'rgba(0, 57, 93, 0.6)');
        return gradientFill;
      };

      const topSellingProducts = filteredData.top_selling_products;

      // Sort products by weight in descending order
      topSellingProducts.sort((a, b) => b.weight - a.weight);

      // Assign unique colors to each slice
      const backgroundColors = topSellingProducts.map((product, index) => {
        if (index === 0) {
          return gradient; // Apply gradient to the largest portion
        } else if (index === 1) {
          return '#90DCF9'; // Blue
        } else if (index === 2) {
          return '#D9F2FB'; // Light Blue
        } else if (index === 3) {
          return '#E2E5EA'; // Light Gray
        } else if (index === 4) {
          return '#237FAC'; // Dark Blue
        } else {
          return '#2E3A59'; // Darker Gray
        }
      });

      return {
        labels: topSellingProducts.map((product) => product.item),
        datasets: [
          {
            data: topSellingProducts.map((product) => product.weight),
            backgroundColor: backgroundColors,
          },
        ],
      };
    },
    [filteredData]
  );

  const lineChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
      },
      y: {
        ticks: {
          callback: (value: number) => `${value / 1000}k`, // Formatting the ticks as 'k'
          stepSize: 10000, // Step size between ticks (10k)
        },
        min: 0, // Minimum value (0k)
        max: 30000, // Maximum value (30k, or as needed)
        grid: {
          display: true, // Display grid lines on the y-axis
        },
        beginAtZero: true, // Ensure the Y-axis starts at zero
      },
    },
  };

  return (
    <div className="flex rounded-[16px] gap-[70px] bg-[#F7F9FB] p-6 ">
      {/* Line Chart Section */}
      <div className="w-[1200px]  p-6 bg-white rounded-[16px] shadow-lg"> {/* Added shadow-lg here */}
        {/* Dropdown Section */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-lg font-medium text-black">Bags:</span>
          <div className="relative">
            <select
              id="month-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none p-2 pl-4 pr-8 bg-white border border-gray-300 text-black rounded-md cursor-pointer"
            >
              {months.map((month, index) => (
                <option key={index} value={month} className="text-black">
                  {month}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              ⌄
            </div>
          </div>
        </div>
        <div className="p-6  rounded-lg text-white mb-6 w-[900px] h-[400px]">
          <Line data={supplierVsCustomerData} options={lineChartOptions} />
        </div>
        {/* Labels below the chart */}
        <div className="flex justify-center space-x-10 text-black text-lg">
          <div className="flex items-center">
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            ></div>
            <span className='text-[16px] font-[400] text-black'>Supplier Graph</span>
          </div>
          <div className="flex items-center">
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#1DBEF8',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            ></div>
            <span className='text-[16px] font-400 text-black'>Customer Graph</span>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="w-[500px] h-[700px] p-6 bg-white rounded-[16px]"> {/* Increased height and width here */}
        <h3 className="text-xl font-semibold mb-4 text-black">Top Selling Products</h3>
        <Pie data={topSellingData} options={{ responsive: true }} />

        {/* List of top selling items */}
        <div className="mt-6">
          <h4 className="text-lg font-medium text-black mb-3">Top Selling Items:</h4>
          <ul className="space-y-2">
            {filteredData.top_selling_products.map((product, index) => (
              <li key={index} className="flex justify-between text-black">
                <span>{product.item}</span>
                <span>{product.weight} kg</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
