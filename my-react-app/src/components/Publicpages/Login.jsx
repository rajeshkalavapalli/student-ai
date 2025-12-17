import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imglogin from '../../assets/images/imglogin.png';

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState('Developer'); // default role
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please provide correct valid details');
      return;
    }

    const payload = { email, password };

    try {
      const response = await fetch(
        'http://localhost:7000/api/devloper/devloper-login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Invalid credentials');
        return;
      }

      // ✅ Store developer ID and email in localStorage for CreateSchool
      localStorage.setItem('developerId', data.id);
      localStorage.setItem('developerEmail', data.email);

      alert('Login successful!');

      // Redirect to school creation page (or dashboard)
      navigate('/superadmin/admin/add-school');
    } catch (error) {
      console.log('Something went wrong, try again later', error);
      alert('Login failed, please try again.');
    }
  };

  return (
    <div className="bg-[#eae0e8] min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden bg-white md:h-[600px]">
        {/* IMAGE */}
        <div className="login-img w-full md:w-1/2 h-full flex justify-center items-center bg-[#f8f5f7] p-4 md:p-8">
          <img
            src={imglogin}
            alt="Login illustration"
            className="w-full h-full object-contain mb-4 md:mb-0"
          />
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-[#fcf9fb]">
          <h2 className="text-3xl font-bold mb-6 text-[#34232d]">
            Login to Schola
          </h2>

          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            {/* Role */}
            <div className="p-4 bg-[#976b86] hover:bg-[#a87d99] rounded-lg text-[#34232d] mt-5">
              <label htmlFor="role" className="block mb-1 font-medium text-[#eae0e8]">
                Role:
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 rounded-md bg-[#eae0e8] border-none text-[#34232d] focus:ring-0"
              >
                <option value="Developer">Developer</option>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>

            {/* Email */}
            <div className="p-4 bg-[#976b86] hover:bg-[#a87d99] rounded-lg text-[#34232d] mt-5">
              <label htmlFor="email" className="block mb-1 font-medium text-[#eae0e8]">
                Email:
              </label>
              <input
                value={email}
                type="email"
                placeholder="Please enter your email"
                id="email"
                className="w-full p-2 rounded-md bg-[#eae0e8] border-none text-[#34232d] focus:ring-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="p-4 bg-[#976b86] hover:bg-[#a87d99] rounded-lg text-[#34232d] mt-5">
              <label htmlFor="password" className="block mb-1 font-medium text-[#eae0e8]">
                Password:
              </label>
              <input
                value={password}
                type="password"
                placeholder="Please enter your password"
                id="password"
                className="w-full p-2 rounded-md bg-[#eae0e8] border-none text-[#34232d] focus:ring-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="mt-6 text-right">
              <button
                type="submit"
                className="bg-[#976b86] hover:bg-[#a87d99] text-[#34232d] font-bold py-2 px-4 rounded-lg transition duration-150"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
