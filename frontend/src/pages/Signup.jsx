import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://safevault-fpik.onrender.com/api/auth/register', {
        name,
        email,
        password,
      });
      if(response.data.success){
        navigate('/login')
      }
      console.log("✅ Signup Success:", response.data);
      toast.success("Signup succesfull");
      
    } catch (error) {
      console.log("❌ Signup Error:", error.message);
      toast.success("Failed to Signup");
      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827]">
      <div className="bg-[#0f0f0f] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
          Create Your Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="*****"
              className="w-full px-4 py-2.5 border border-gray-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg shadow-md transition duration-150"
          >
            Signup
          </button>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-400 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
