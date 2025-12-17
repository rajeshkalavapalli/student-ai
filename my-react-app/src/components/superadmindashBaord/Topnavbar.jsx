import { IoIosNotifications } from "react-icons/io";

export default function Topnavbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-6 shadow-md bg-white">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-blue-700">Schola</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <IoIosNotifications className="text-3xl cursor-pointer hover:text-blue-600" />
      </div>
      
    </div>
  );
}
