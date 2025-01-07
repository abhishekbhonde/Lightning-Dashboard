const Payments = () => {
  return (
    <div>
      <div className="w-[320px] sm:w-[1439px] bg-white ml-6 p-4 rounded-md shadow-md">
        {/* Table Header */}
        <h1 className="font-[600] text-[16px] text-[#1C1C1C] mb-[20px] ml-2">Recent Supplier Payments</h1>

        {/* Table Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 text-[#7D8592] font-bold text-[16px] p-3 border-b border-gray-200 pb-2">
          <span>Record No</span>
          <span>Farmer Name</span>
          <span>Net Amount</span>
          <span>Paid Amount</span>
          <span>Due Amount</span>
          <span>Payment Status</span>
        </div>
      </div>
    </div>
  );
};

export default Payments;
