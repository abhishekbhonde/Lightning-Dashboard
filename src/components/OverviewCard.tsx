import React from "react";
import { data } from '../utils/fetchData';

const OverviewCard = () => {
  const financialData = data[0]; // Assuming we want the first entry from fetchData for now

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Total Sales</h3>
        <p className="text-2xl text-green-500">${financialData.total_sales}</p>
        <p className="text-sm text-gray-500">+5% from last month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Total Expenses</h3>
        <p className="text-2xl text-red-500">${financialData.total_expenses}</p>
        <p className="text-sm text-gray-500">-2% from last month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Net Profit</h3>
        <p className="text-2xl text-green-500">${financialData.net_profit}</p>
        <p className="text-sm text-gray-500">+3% from last month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Due Amount</h3>
        <p className="text-2xl text-red-500">${financialData.due_amount}</p>
        <p className="text-sm text-gray-500">-1% from last month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Payment Received</h3>
        <p className="text-2xl text-green-500">${financialData.payment_received}</p>
        <p className="text-sm text-gray-500">+4% from last month</p>
      </div>
    </div>
  );
};

export default OverviewCard;
