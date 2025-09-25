import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
const Navbar = ({setQuery}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clears token & dispatches logout event
    navigate('/'); // navigates to login page
  };
  
  return (
    <nav className="w-full bg-[#0a0a0a] text-white border-b border-gray-800 px-6 py-4 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div className="flex-shrink-0">
          <Link to="/home" className="text-2xl font-bold text-yellow-400">
            CryptaKey
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-2xl px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-gray-900 transition duration-200"
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <div className="flex-shrink-0 flex gap-4 items-center text-sm font-medium">
          {!user ? (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
            </>
          ) : (
            <>
              <span className="mr-4 text-yellow-400 font-medium">Hello, {user.name}</span>
              <button onClick={handleLogout}
                className="px-4 py-2 rounded-xl border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition duration-200">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
