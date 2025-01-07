import { data } from '../utils/fetchData';
import StatCard from '../ui/Card';

const OverviewCard = () => {
  const financialData = data[0];

  const stats = [
    {
      title: 'Total Sales',
      value: financialData.total_sales,
      color: 'text-green-500',
      percentageChange: '+5%',
    },
    {
      title: 'Total Expenses',
      value: financialData.total_expenses,
      color: 'text-red-500',
      percentageChange: '-2% ',
    },
    {
      title: 'Net Profit',
      value: financialData.net_profit,
      color: 'text-green-500',
      percentageChange: '+3% ',
    },
    {
      title: 'Due Amount',
      value: financialData.due_amount,
      color: 'text-red-500',
      percentageChange: '-1% ',
    },
    {
      title: 'Payment Received',
      value: financialData.payment_received,
      color: 'text-green-500',
      percentageChange: '+4% ',
    },
  ];

  return (
    <div className="ml-6 px-4 sm:px-6">
      <h1 className="font-[500] p-2 text-[#1C1C1C] text-[24px] sm:text-[30px]">
        Overview
      </h1>
      <div className="flex flex-wrap gap-3 md:gap-0 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <StatCard
              title={stat.title}
              value={stat.value}
              color={stat.color}
              percentageChange={stat.percentageChange}
              bgColor={index % 2 === 0 ? 'bg-[#D9F2FB]' : 'bg-[#E2E5EA]'} // Alternate background
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
