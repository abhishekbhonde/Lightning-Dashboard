import React from "react";
import { FaTachometerAlt, FaBars, FaUsers, FaCogs } from "react-icons/fa";
import Sidebar from "../ui/SidebarContainer";

const App: React.FC = () => {
  const sidebarItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard" },
    { icon: <FaBars />, label: "Menu 1" },
    { icon: <FaUsers />, label: "Menu 2" },
    { icon: <FaCogs />, label: "Menu 3" },
    { icon: <FaUsers />, label: "Admin Panel" },
  ];

  return (
    <div className="flex">
      <Sidebar
        items={sidebarItems}
        footerImage="../../public/illustration.png"
        footerButtonLabel="Support"
      />
      {/* Other Content */}
    </div>
  );
};

export default App;
