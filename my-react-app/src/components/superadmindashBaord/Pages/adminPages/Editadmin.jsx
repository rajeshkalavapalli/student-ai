import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

export default function EditAdmin() {
    const { id } = useParams()
    const [admin, setadmin] = useState({})
    const navigate = useNavigate()
    const editAdmin = async () => {
        try {
            const adminData = await fetch(`http://localhost:7000/api/admin/get-admin/${id}`, {
                method: "GET",
            })
            const data = await adminData.json()
            setadmin(data.data)


        } catch (error) {
            window.alert("something went wrong try after some time", error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setadmin((prevadmin) => ({
            ...prevadmin,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {



            const submit = await fetch(`http://localhost:7000/api/admin/edit-admin/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(admin)
            })

            const data = await submit.json()

            alert("admin updated sucessfully")
            navigate("/superadmin/admin")



        } catch (error) {
            console.log("submit error", error)
            return
            window.alert("error in submition", error)
        }

    }

    useEffect(() => {
        editAdmin()
    }, [])

    return (
        <div className="  bg-gray-100  items-center justify-center p-4">
            <div className="  bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Admin</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={admin.name || ""}
                            onChange={handleChange}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={admin.email || ""}
                            onChange={handleChange}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={admin.password || ""}
                            onChange={handleChange}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={admin.contact || ""}
                            onChange={handleChange}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">School ID</label>
                        <input
                            type="text"
                            name="schoolId"
                            value={admin.schoolId || ""}
                            onChange={handleChange}
                            className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Role</label>
                        <input
                            type="text"
                            value="admin"
                            disabled
                            className="border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* BUTTONS – FULL WIDTH */}
                    <div className="md:col-span-2 flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}
