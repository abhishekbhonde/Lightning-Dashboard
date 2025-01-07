import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center text-white p-4 flex items-center justify-between">
      {/* Logo Section */}
     
        <div className="w-[443px] flex items-center justify-center text-center h-[50px] font-[600] rounded-b-[20px] text-[20px] font-inter bg-[#00AEEF]">
        Springfield media
        </div>
      {/* Profile Section */}   
      <div className="flex items-center">
        <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center bg-[#FFFFFF]">
            <FaSearch className="w-[24px] h-[24px] text-[#0A1629]"/>
        </div>
        <FaUserCircle className="text-2xl" />
        <span><img src="" alt="" /></span>
      </div>
    </div>
  );
};

export default Navbar;
