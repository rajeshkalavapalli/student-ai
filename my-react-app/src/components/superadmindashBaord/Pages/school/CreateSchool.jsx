import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import schoolImg from '../../../../assets/images/school.png';

export default function CreateSchool() {
  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  // Get developer ID from localStorage
  const developerId = localStorage.getItem('developerId');

  const createSchool = async (e) => {
    e.preventDefault();

    if (!schoolName || !email || !phone || !developerId) {
      alert('Please provide all required fields and make sure you are logged in');
      return;
    }

    const payload = {
      school_name: schoolName,
      address,
      email,
      phone,
      createdBy: developerId
    };

    try {
      const response = await fetch('http://localhost:7000/api/school/add-school', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        alert('School created successfully');
        // Reset form
        setSchoolName('');
        setAddress('');
        setEmail('');
        setPhone('');
        // Navigate to school list
        navigate('/superadmin/admin/add-school');
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error creating school:', error);
      alert('Something went wrong, please try again');
    }
  };

  return (
    <div className="min-h-60 flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img src={schoolImg} alt="school" className="w-64 h-64 object-contain" />
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-5 text-blue-700">Create School</h2>
          <form onSubmit={createSchool} className="space-y-4">

            <div>
              <label className="block text-sm font-semibold mb-1">School Name</label>
              <input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                Create School
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
