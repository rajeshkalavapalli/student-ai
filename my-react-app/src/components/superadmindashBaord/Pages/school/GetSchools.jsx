import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

export default function GetSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate()


  const getAllSchools = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/school/get-schools");
      const data = await res.json();

      if (!data.schools || data.schools.length === 0) {
        alert("No schools registered");
        setLoading(false);
        return;
      }

      setSchools(data.schools);
    } catch (error) {
      alert("Something went wrong, try again later");
    } finally {
      setLoading(false);
    }
  };
const editSchool = (id)=>{
    navigate(`/superadmin/admin/edit-school/${id}`)
}


const deleteSchool = async (id) => {
  try {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this school?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `http://localhost:7000/api/school/delete-school/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("School deleted successfully");
      // refresh list after delete
      getAllSchools();
    } else {
      alert(data.message || "Delete failed");
    }
  } catch (error) {
    alert("Something went wrong. Try again later");
  }
};



  useEffect(() => {
    getAllSchools();
  }, []);



  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">All Schools</h2>

      {loading && <p>Loading...</p>}

      {schools.map((s) => (
        <div key={s._id} className="flex justify-between bg-[#F9F8F6] p-4 mb-3 rounded">
          <div className="flex gap-4">
            <h3 className="font-semibold">{s.school_name}</h3>
            <p>{s.address}</p>
            <p>{s.email}</p>
          </div>

          <div className="flex gap-6">
            <button onClick={()=>editSchool(s._id)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={()=>deleteSchool(s._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
