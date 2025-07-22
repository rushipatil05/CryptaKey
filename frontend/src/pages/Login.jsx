import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://safevault-fpik.onrender.com/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        login(response.data.user, response.data.token);
        navigate('/home');
        toast.success("Login Success");
      } else {
        toast.error("Login failed");
      }
      console.log("✅ Login Success:", response.data);
    } catch (error) {
      console.log("❌ Login Error:", error.message);
      toast.error("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827]">
      <div className="bg-[#0f0f0f] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
          Login to your Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="*****"
                className="w-full px-4 py-2.5 border border-gray-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-yellow-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg shadow-md transition duration-150"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-400 hover:underline">SignUp</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
