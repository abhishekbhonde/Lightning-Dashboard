import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center md:justify-between text-white px-4 py-2 sm:px-6 w-full">
      {/* Logo Section */}
      <div className="w-full md:block hidden sm:w-auto md:w-[443px] md:ml-[530px] flex items-center justify-center text-center h-[50px] font-[600] rounded-b-[20px] text-[20px] font-inter bg-[#00AEEF]">
        Springfield media
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3 mt-4 md:mt-0 md:gap-3 justify-end w-full sm:w-auto">
        <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center bg-[#FFFFFF]">
          <FaSearch className="w-[24px] h-[24px] text-[#0A1629]" />
        </div>

        <div className="w-[182px] h-[48px] bg-[#FFFFFF] flex gap-3 items-center justify-center rounded-[14px]">
          <span><img src="/photo.png" alt="Profile" className="w-10 h-10 rounded-full" /></span>
          <span className="font-[700] text-[#0A1629] text-[16px]">Evan Yates</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
