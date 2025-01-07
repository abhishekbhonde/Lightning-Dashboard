import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  percentageChange: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color, percentageChange, bgColor }) => {
  const isPositive = percentageChange.includes('+'); // Check if the change is positive
  const icon = isPositive ? '../../public/ArrowRise.png' : '../../public/Vector.png'; // Adjust paths based on your project

  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} w-[202px] h-[112px] rounded-[16px] flex flex-col justify-between`}>
      <h3 className="text-[12px] font-[400] text-[#1C1C1C]">{title}</h3>
      <div className="flex items-center gap-2">
        <p className={`text-[24px] font-semibold `}>{value}</p>
        <img src={icon} alt={isPositive ? 'Upward trend' : 'Downward trend'} className="w-4 h-4" />
        <p className="text-sm text-gray-500">{percentageChange}</p>
      </div>
    </div>
  );
};

export default StatCard;
