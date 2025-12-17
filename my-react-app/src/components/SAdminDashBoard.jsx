// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import superAdminPage from "../assets/scholaAdmin.png";

// export default function SAdminDashBoard() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [schoolId, setSchoolId] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !contact || !password || !schoolId) {
//       alert("Please provide all valid details");
//       return;
//     }

//     const payload = { name, email, contact, password, schoolId };

//     try {
//       const response = await fetch("http://localhost:7000/api/admin/add-admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (!response.ok || data.success === false) {
//         alert("Failed to create admin");
//         return;
//       }

//       navigate("/superadmin/dashboard");
//     } catch (error) {
//       console.log("Something went wrong, try again later", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex justify-center items-center p-6">
//       <div className="bg-white shadow-2xl rounded-3xl flex w-full max-w-5xl overflow-hidden">
//         {/* LEFT IMAGE */}
//         <div className="w-1/2 bg-purple-100 flex justify-center items-center p-6">
//           <img
//             src={superAdminPage}
//             alt="Admin"
//             className="w-full h-full object-cover rounded-xl shadow-lg"
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="w-1/2 p-10">
//           <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
//             Super Admin Dashboard
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="font-medium text-gray-700">Name</label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 placeholder="Enter admin name"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="font-medium text-gray-700">Email</label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="Enter admin email"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="font-medium text-gray-700">Contact</label>
//               <input
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 type="text"
//                 placeholder="Enter admin contact"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="font-medium text-gray-700">Password</label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Admin password"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="font-medium text-gray-700">School ID</label>
//               <input
//                 value={schoolId}
//                 onChange={(e) => setSchoolId(e.target.value)}
//                 type="text"
//                 placeholder="Enter School ID"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
//             >
//               Create Admin
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
