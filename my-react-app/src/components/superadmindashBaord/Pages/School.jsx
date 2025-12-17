import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function School() {
  const navigate = useNavigate();
  const [schools, setSchools] = useState([]);

  const fetchSchools = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/school/get-schools");
      const data = await res.json();
      setSchools(data.schools);
    } catch (error) {
      console.error("Failed to fetch schools", error);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-7 rounded-xl py-20 px-20">
        <div className="px-4 py-4 bg-blue-800 rounded-lg text-white">
          <h1>Total Schools</h1>
          <h3>{schools.length}</h3>
        </div>

        <div className="px-4 py-4 bg-red-600 rounded-lg text-white">
          <h1>Active Schools</h1>
          <h3>0</h3>
        </div>

        <div className="px-4 py-4 bg-green-700 rounded-lg text-white">
          <h1>Inactive Schools</h1>
          <h3>0</h3>
        </div>

        <div className="px-8 py-5 bg-purple-800 rounded-lg text-white">
          <h1>Total Students</h1>
          <h3>0</h3>
        </div>
      </div>

      <div className="flex gap-10 mt-14 justify-evenly">
        <button
          className="rounded-2xl bg-blue-800 px-8 py-2 text-white"
          onClick={() => navigate("/superadmin/admin/add-school")}
        >
          Create School
        </button>

        <button
          className="rounded-2xl bg-blue-800 px-8 py-2 text-white"
          onClick={() => navigate("/superadmin/admin/get-schools")}
        >
          Get all schools
        </button>
      </div>
    </div>
  );
}
