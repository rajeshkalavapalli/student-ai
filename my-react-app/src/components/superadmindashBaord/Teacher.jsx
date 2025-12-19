import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

export default function Teacher() {
    const navigate = useNavigate()

    const handleClick = (action)=>{
        const create =()=>{
            navigate("/superadmin/teacher/create-teacher")
        }

        const getteachers =()=>{
          navigate("/superadmin/teacher/get-allTeachers")

        }

        if(action === "create"){
          create()
        }
        if(action === "getteachers"){
          getteachers()
        }
    }

    

    const teacher = [
    "No. of Teachers",
    "Active Teachers",
    "Inactive Teachers",
    "Teachers on Leave",
  ]

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
  ]

  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teacher.map((t, index) => (
          <li
            key={index}
            className={`${colors[index]} list-none text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <p className="text-sm uppercase tracking-wide opacity-90">
              {t}
            </p>
            <h2 className="text-3xl font-bold mt-2">0</h2>
          </li>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="mt-12 flex gap-6 justify-start">
        <button onClick={()=>handleClick("create")}   className="bg-indigo-600 text-white py-3 px-8 rounded-xl shadow-md hover:bg-indigo-500 transition">
          Create Teacher
        </button>
        <button onClick={()=>handleClick("getteachers")} className="bg-gray-800 text-white py-3 px-8 rounded-xl shadow-md hover:bg-gray-700 transition">
          Get All Teachers
        </button>
      </div>

      

    </div>
  )
}
