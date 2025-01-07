import React, { useState } from "react";
import { FaTachometerAlt, FaBars, FaUsers, FaCogs } from "react-icons/fa";
import Sidebar from "../ui/SidebarContainer";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility on mobile

  const sidebarItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard" },
    { icon: <FaBars />, label: "Menu 1" },
    { icon: <FaUsers />, label: "Menu 2" },
    { icon: <FaCogs />, label: "Menu 3" },
    { icon: <FaUsers />, label: "Admin Panel" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Button to toggle sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-4 bg-[#00AEEF] text-white rounded-md fixed top-4 left-4 z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar Component */}
      <Sidebar
        items={sidebarItems}
        footerImage="../../public/illustration.png"
        footerButtonLabel="Support"
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} // Toggle function passed as prop
      />

      {/* Other Content */}
    </div>
  );
};

export default App;
