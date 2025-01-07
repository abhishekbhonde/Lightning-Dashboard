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

interface TopSellingProduct {
  item: string;
  weight: number;
}

interface DataRecord {
  month: string;
  bags: number;
}

interface DashboardData {
  supplier_records: DataRecord[];
  customer_records: DataRecord[];
  top_selling_products: TopSellingProduct[];
}

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  // Extract unique months from the data
  const months = useMemo(() => {
    return Array.from(
      new Set(
        data.flatMap((entry: DashboardData) => [
          ...entry.supplier_records.map((record) => record.month),
          ...entry.customer_records.map((record) => record.month),
        ])
      )
    );
  }, []);

  // Filter data for the selected month
  const filteredData = useMemo(() => {
    return {
      supplier_records: data.flatMap((entry) =>
        entry.supplier_records.filter((record) => record.month === selectedMonth)
      ),
      customer_records: data.flatMap((entry) =>
        entry.customer_records.filter((record) => record.month === selectedMonth)
      ),
      top_selling_products: data.flatMap((entry) =>
        entry.top_selling_products.filter((product) =>
          product.item && product.weight
        )
      ),
    };
  }, [selectedMonth]);

  // Prepare chart data dynamically based on the filtered data
  const supplierVsCustomerData = useMemo(
    () => ({
      labels: filteredData.supplier_records.map((record) => record.month),
      datasets: [
        {
          label: 'Supplier Bags',
          data: filteredData.supplier_records.map((record) => record.bags),
          borderColor: '#000000',
          borderWidth: 2,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: 'Customer Bags',
          data: filteredData.customer_records.map((record) => record.bags),
          borderColor: '#1DBEF8',
          borderWidth: 2,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    }),
    [filteredData]
  );

  const topSellingData = useMemo(() => {
    // Sort and limit the top-selling products (e.g., top 5)
    const topSellingProducts = filteredData.top_selling_products
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5); // Limit to top 5 items

    return {
      labels: topSellingProducts.map((product) => product.item),
      datasets: [
        {
          data: topSellingProducts.map((product) => product.weight),
          backgroundColor: ['#00395D', '#90DCF9', '#D9F2FB', '#E2E5EA', '#237FAC'],
        },
      ],
    };
  }, [filteredData]);

  const lineChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value: number) => `${value / 1000}k`,
          stepSize: 10000,
        },
        min: 0,
        max: 30000,
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row rounded-[16px] gap-6 md:gap-12 bg-[#F7F9FB] p-6">
      <div className="w-[340px] md:w-[70%] h-auto p-6 bg-white rounded-[16px] shadow-lg">
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
        <div className="p-6 rounded-lg mb-6 w-full w-[340px] md:w-[750px] h-[300px] md:h-[320px] lg:h-[420px]">
          {/* @ts-ignore */}
          <Line data={supplierVsCustomerData} options={lineChartOptions} />
        </div>
        <div className="flex justify-center space-x-8 text-black text-lg -mt-10">
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
            <span className="text-[16px] font-[400] text-black">Supplier Graph</span>
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
            <span className="text-[16px] font-400 text-black">Customer Graph</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] h-auto p-6 bg-white rounded-[16px] mt-6 md:mt-0">
        <h3 className="text-[14px] text-center font-semibold mb-4 text-black">
          Top Selling Products
        </h3>
        <div className="w-[100%] max-w-[286px] mx-auto">
          <Pie data={topSellingData} options={{ responsive: true }} />
        </div>
        <div className="mt-6">
          <ul className="space-y-2 text-[#1C1C1C] text-[12px] flex items-center justify-center flex-col font-400">
            {topSellingData.labels.map((product, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-[50px] md:gap-[150px] text-black"
              >
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: topSellingData.datasets[0].backgroundColor[
                        index
                      ],
                      borderRadius: '50%',
                    }}
                  ></div>
                  <span>{product}</span>
                </div>
                <span>{filteredData.top_selling_products[index].weight} kg</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
