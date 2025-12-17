import { useState, useEffect } from "react"


export default function CreateAdmin() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [password, setpassword] = useState("")
    const [schoolId, setschoolId] = useState("")
    const [role, setrole] = useState("admin")

    const [school, setSchool] = useState([])



    const getSchool = async () => {
        const school = await fetch("http://localhost:7000/api/school/get-schools")

        const response = await school.json()
        const finalSchool = setSchool(response.schools)



    }

    const createAdmin1 = async () => {
        try{
            
        if(!name||!email||!contact||!password || !schoolId){
            window.alert("please provide valid details")
            return
        }

        if(password.length < 6){
            window.alert("password must min 6 char ")
            return
        }

        const payload = ({
            name:name,
            email:email,
            contact:contact,
            password:password,
            schoolId:schoolId,
        })
        
        const response = await fetch("http://localhost:7000/api/admin/add-admin", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(payload)
        })

        if(!response.ok){
            window.alert("invalid credentials")
            return
        }

        window.alert("admin created sucessfully ")

        }catch(error){
            window.alert("something went wrong try after some time ", error)
        }
        

        
    }
 
    useEffect(() => {
        getSchool()

    }, [])
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16">
  <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Admin</h1>
    <form className="space-y-4">

      {/* Name + Email Side by Side */}
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            id="name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            id="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contact + Password Side by Side */}
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="contact" className="mb-1 font-medium text-gray-700">Contact</label>
          <input
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            type="text"
            id="contact"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="password" className="mb-1 font-medium text-gray-700">Password</label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* School + Role Side by Side */}
      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="schoolId" className="mb-1 font-medium text-gray-700">Select School</label>
          <select
            value={schoolId}
            onChange={(e) => setschoolId(e.target.value)}
            id="schoolId"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {school.map(s => (
              <option key={s._id} value={s._id}>{s.school_name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="role" className="mb-1 font-medium text-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setrole(e.target.value)}
            id="role"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => createAdmin1()}
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Create Admin
        </button>
        <button
          type="button"
          className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>

    </form>
  </div>
</div>


    )
}