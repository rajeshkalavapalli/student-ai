import Topnavbar from "../../components/superadmindashBaord/Topnavbar";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";
import { Outlet } from "react-router-dom";

export default function SuperAdminDashBoard() {
  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP NAVBAR */}
        <Topnavbar />
        {/* MAIN PAGE CONTENT (This changes based on route) */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}
