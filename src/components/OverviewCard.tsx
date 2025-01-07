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
    <div>
      <h1 className="font-[500] text-[#1C1C1C] text-[30px] p-2 w-[1146px]">Overview</h1>
      <div className="flex  sm:grid-cols-2 lg:grid-cols-3 gap-[100px] mb-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            percentageChange={stat.percentageChange}
            bgColor={index % 2 === 0 ? 'bg-[#D9F2FB]' : 'bg-[#E2E5EA]'} // Alternate background
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
