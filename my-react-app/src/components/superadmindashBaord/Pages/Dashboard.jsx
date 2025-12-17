import { useEffect, useState } from "react";
import { FiUsers, FiBookOpen, FiTrendingUp, FiAlertTriangle } from "react-icons/fi";

const Dashboard = () => {
  const [user, setUser] = useState(0);

  const totalUser = async () => {
    try {
      const findusers = await fetch("http://localhost:7000/api/user/users");
      const alluser = await findusers.json();
      setUser(alluser.users.length);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    totalUser();
  }, []);

  return (
    <div className="p-6">

      {/* --- TOP STAT CARDS --- */}
      <div className="grid grid-cols-4 gap-6">

        {/* STUDENTS CARD */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">Total Students</p>
            <FiUsers className="text-3xl opacity-80" />
          </div>
          <h2 className="text-4xl font-bold mt-2">{user}</h2>
        </div>

        {/* TEACHERS CARD */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">Total Teachers</p>
            <FiBookOpen className="text-3xl opacity-80" />
          </div>
          <h2 className="text-4xl font-bold mt-2">58</h2>
        </div>

        {/* AVG ATTENDANCE */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">Average Attendance</p>
            <FiTrendingUp className="text-3xl opacity-80" />
          </div>
          <h2 className="text-4xl font-bold mt-2">82%</h2>
        </div>

        {/* LOW PERFORMANCE ALERTS */}
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">Low Performance Alerts</p>
            <FiAlertTriangle className="text-3xl opacity-80" />
          </div>
          <h2 className="text-4xl font-bold mt-2">32</h2>
        </div>

      </div>

      {/* --- CHARTS SECTION --- */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        
        {/* ATTENDANCE TREND */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <p className="text-lg font-semibold">Attendance Trend</p>
          <div className="w-full h-64 mt-4 flex items-center justify-center text-gray-500">
            Chart Coming Soon...
          </div>
        </div>

        {/* PERFORMANCE DISTRIBUTION */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <p className="text-lg font-semibold">Performance Distribution</p>
          <div className="w-full h-64 mt-4 flex items-center justify-center text-gray-500">
            Chart Coming Soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
