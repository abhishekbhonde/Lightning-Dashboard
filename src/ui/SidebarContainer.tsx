import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

interface SidebarProps {
  items: SidebarItemProps[];
  footerImage: string;
  footerButtonLabel: string;
  isOpen: boolean; // To control visibility of the sidebar
  toggleSidebar: () => void; // Function to toggle the sidebar visibility
}

const Sidebar: React.FC<SidebarProps> = ({ items, footerImage, footerButtonLabel, isOpen }) => {
  return (
    <div
      className={`bg-white text-[#7D8592]  h-screen w-[217px] text-[16px] font-[600] p-6 flex flex-col space-y-6 relative transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`} // Sidebar slide-in effect for mobile, always open on desktop
    >
      {/* Logo */}
      <div className="top-6 left-6 mt-[50px] md:top-6 md:left-6">
        <img className="w-[174px] h-[54px]" src="../../public/logo.png" alt="Logo" />
      </div>

      {/* Menu Items */}
      <div className="space-y-5 flex flex-col items-start mt-8 md:translate-y-[40px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 w-full md:w-[200px] h-[46px] px-4 py-2 rounded-md cursor-pointer hover:bg-[#3F8CFF1A] hover:text-[#00AEEF] transition-colors group"
          >
            <div className="w-[24px] h-[25px] group-hover:text-[#00AEEF] transition-colors">{item.icon}</div>
            <span className="text-[16px] font-[600] text-[#7D8592] group-hover:text-[#00AEEF] transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full mt-auto md:block hidden md:translate-y-[330px]">
        <div className="w-full md:w-[172px] h-[175px] bg-[#3F8CFF1A] rounded-lg relative">
          {/* Footer Image */}
          <img
            src={footerImage}
            className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-auto"
            alt="Footer Illustration"
          />

          {/* Footer Button */}
          <button className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2 w-full md:w-[139px] h-[50px] rounded-[14px] flex gap-2 items-center justify-center bg-[#00AEEF] text-white">
            <FaEnvelope className="w-[24px] h-[25px]" />
            <span>{footerButtonLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
