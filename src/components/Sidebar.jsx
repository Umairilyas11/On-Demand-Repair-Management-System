import { roles } from "../roles"; // Import role-based access control
import { useAuth } from "../context/AuthContext"; // User role context
import { Link } from "react-router-dom";
import { FaBullhorn, FaChartBar, FaCog, FaMicrochip, FaPaperPlane, FaRenren, FaUserCircle, FaWrench, FaTachometerAlt } from "react-icons/fa"; // ✅ Corrected import

const Sidebar = () => {
  const { user } = useAuth();


  
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", key: "dashboard", icon: <FaTachometerAlt />},
    { name: "Repair Requests", path: "/repairs", key: "repairs", icon: <FaWrench />},
    { name: "Technicians", path: "/technicians", key: "technicians", icon: <FaMicrochip /> },
    { name: "Users", path: "/users", key: "users", icon: <FaUserCircle /> },
    { name: "Reports", path: "/reports", key: "reports", icon: <FaChartBar /> },
    { name: "Settings", path: "/settings", key: "settings", icon: <FaCog /> },
    { name: "Request Repair", path: "/request-repair", key: "request-repair", icon: <FaBullhorn /> },
    { name: "My Repairs", path: "/my-repairs", key: "my-repairs", icon: <FaRenren /> },
    { name: "Chat", path: "/chat", key: "chat", icon: <FaPaperPlane /> },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
        <h1 className="text-2xl font-bold hidden md:block">On-Demand Community Repair Management System</h1>
      <ul className="flex flex-col mt-5 text-xl">
        {menuItems
          .filter((item) => roles[user.role].includes(item.key))
          .map((item) => (
            <li key={item.key} className="flex item-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover-text-white ">
                {item.icon}
                <span className="hidden md:inline">
              <Link to={item.path}>{item.name}</Link>
              </span>
            </li>
          ))}
      </ul>
      
    </div>
    
  );
};

export default Sidebar;