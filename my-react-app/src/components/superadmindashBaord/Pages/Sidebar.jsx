import { MdDashboard, MdAdminPanelSettings, MdInsights, MdLogout } from "react-icons/md";
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { AiOutlineBarChart, AiOutlineSetting } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: <MdDashboard />, route: "/superadmin/dashboard" },
    { title: "Schools", icon: <FaSchool />, route: "/superadmin/school" },
    { title: "Admin", icon: <MdAdminPanelSettings />, route: "/superadmin/admin" },
    { title: "Teacher", icon: <FaChalkboardTeacher />, route: "/superadmin/teacher" },
    { title: "Student", icon: <PiStudent />, route: "/superadmin/student" },
    { title: "Attendance", icon: <AiOutlineBarChart />, route: "/superadmin/attendence" },
    { title: "Performance", icon: <FcSalesPerformance />, route: "/superadmin/performance" },
    { title: "AI Insights", icon: <MdInsights />, route: "/superadmin/aiinsite" },
    { title: "Settings", icon: <AiOutlineSetting />, route: "/superadmin/setting" },
  ];

  return (
    <div className="flex flex-col justify-between h-screen w-64 bg-white shadow-md">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-purple-700">Schola</h1>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-2 px-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 px-6 py-3 text-gray-800 hover:bg-blue-100 cursor-pointer rounded-lg transition"
            onClick={() => navigate(item.route)}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-md font-medium">{item.title}</span>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div
        className="px-6 py-4 border-t flex items-center gap-3 cursor-pointer hover:bg-red-100"
        onClick={() => {
          // Add logout logic here (e.g., clear auth token)
          navigate("/login");
        }}
      >
        <MdLogout className="text-2xl text-red-500" />
        <span className="text-red-600 font-semibold">Logout</span>
      </div>
    </div>
  );
}
