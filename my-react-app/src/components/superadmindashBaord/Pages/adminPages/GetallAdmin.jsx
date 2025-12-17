import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Getalladmin() {

            const {id} = useParams()

    const navigate = useNavigate()

    const [admins, setAdmins] = useState([])

    const getAdmins = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/admin/all-admin")
            const res = await response.json()
            setAdmins(res.allAdmin)
        } catch (error) {
            window.alert("something went wrong try after some time")
        }
    }


    const editAdmin = async (id) => {
        navigate(`/superadmin/admin/edit-admin/${id}`)

    }

    const deleteAdmin = async (id) => {
        try {
            const confirm = window.confirm("are you sure to delete this admin")
            if (!confirm) {
                return
            }

            const admindelete = await fetch(`http://localhost:7000/api/admin/delete-admin/${id}`, {
                method: "DELETE",
                
            })
            const data = await admindelete.json()
            

            if (!admindelete.ok) {
                alert("Failed to delete admin ")
                


            } else {
                
                alert("Successfully  deleted admin")
                navigate("/superadmin/admin")
            }



        } catch (error) {
            alert("something went wrong " + error.message)
        }

    }

    useEffect(() => {
        getAdmins()

    }, [])

    return (
        <div className=" bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">

                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    All Admins
                </h1>

                {admins.length === 0 ? (
                    <p className="text-gray-500">Loading admins...</p>
                ) : (
                    <ul className="">
                        {admins.map((adm) => (
                            <li
                                key={adm._id}
                                className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition flex gap-14"
                            >
                                <p className="text-gray-700">
                                    <strong>Name:</strong> {adm.name}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Email:</strong> {adm.email}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Contact:</strong> {adm.contact}
                                </p>


                                <div className=" flex gap-3 justify-end ml-24">
                                    <button onClick={() => editAdmin(adm._id)} className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                        Edit
                                    </button>

                                    <button onClick={()=>deleteAdmin(adm._id)} className="px-4 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition">
                                        Delete
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    )
}
