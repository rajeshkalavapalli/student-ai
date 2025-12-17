import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditSchool() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [school, setSchool] = useState({
        school_name: "",
        address: "",
        email: "",
        phone: ""
    })

    // -----------------------------
    // 1️⃣ Fetch School Data by ID
    // -----------------------------
    const fetchSchool = async () => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/school/get-school/${id}`
            )

            const data = await response.json()


            if (!data) {
                alert("Invalid school details")
                return
            }

            setSchool({
                School_name: data.school.school_name || "",
      Address: data.school.address || "",
      Email: data.school.email || "",
      Phone: data.school.phone || ""
            })   // <-- FULL OBJECT SET HERE

        } catch (error) {
            alert("Error fetching school details")
        }
    }

    useEffect(() => {
        fetchSchool()
    }, [])

    // -----------------------------
    // 2️⃣ Update School (Patch)
    // -----------------------------
    const updateSchool = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                `http://localhost:7000/api/school/edit-school/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(school)
                }
            )

            const result = await response.json()

            alert("School updated successfully")
            navigate("/superadmin/school")

        } catch (error) {
            alert("Something went wrong. Try again later.")
        }
    }

    return (
        <div className="bg-slate-100">
            <h1 className="text-center p-3 font-bold text-white bg-slate-800">
                Update School
            </h1>

            <form className="grid grid-cols-2 gap-10 mt-10 ml-20"
                  onSubmit={updateSchool}>

                <div>
                    <label>school Name:</label>
                    <input
                        type="text"
                        value={school.School_name}
                        onChange={(e) =>
                            setSchool({ ...school, School_name: e.target.value })
                        }
                        className="border p-2"
                    />
                </div>

                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={school.Address}
                        onChange={(e) =>
                            setSchool({ ...school, Address: e.target.value })
                        }
                        className="border p-2"
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={school.Email}
                        onChange={(e) =>
                            setSchool({ ...school, Email: e.target.value })
                        }
                        className="border p-2"
                    />
                </div>

                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={school.Phone}
                        onChange={(e) =>
                            setSchool({ ...school, Phone: e.target.value })
                        }
                        className="border p-2"
                    />
                </div>

                <div className="flex gap-6 mt-5">
                    <button
                        type="submit"
                        className="bg-green-800 px-5 py-2 text-white rounded-xl"
                    >
                        Update
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/superadmin/school")}
                        className="bg-blue-800 px-5 py-2 text-white rounded-xl"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
