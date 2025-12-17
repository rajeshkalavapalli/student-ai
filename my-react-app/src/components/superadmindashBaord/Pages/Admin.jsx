import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Admin() {
    const naviaget = useNavigate()
    
    
    const adminCard = [
        { title: "No Of Teachers", count: "0" },
        { title: "Number Of Students", count: "0" },
        { title: "Teachers On Leave", count: "0" },
        { title: "Teachers Not Active", count: "0" },
        { title: "Not Active Students", count: "0" },
    ];

    const colors = [

        "bg-blue-400",
        "bg-green-400",
        "bg-red-400",
        "bg-yellow-400",
        "bg-purple-400"
    ];

    const createAdmin = ()=>{
        naviaget("/superadmin/admin/create-admin")
    }   

     const getAdmins = ()=>{
        naviaget("/superadmin/admin/get-alladmin")
    } 


    return (
        <div>
            <div>
                <div className="p-3 py-16">
                    <h1 className="text-xl font-bold mb-4 -mt-8 text-center">Admin Dashboard</h1>

                    <ul className="grid grid-cols-2 gap-4 mt-7 text-white">
                        {adminCard.map((item, index) => (
                            <li
                                key={index}
                                className={`${colors[index]} p-4 rounded text-center`}
                            >
                                <h1>{item.title}</h1>
                                <h3>{item.count}</h3>
                            </li>

                        ))}
                    </ul>
                </div>

                <div className="flex  -mt-5 mb-12 gap-8 ml-20 text-white ">
                    <button onClick={()=>createAdmin()} className="bg-blue-400 rounded-3xl p-3 ">Create admin</button>
                    <button  onClick={()=>getAdmins()}  className="bg-blue-400 rounded-3xl p-3" >Get all Admin</button>
                </div>
            </div>

        </div>


    );
}
