import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user, token) => {
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.dispatchEvent(new Event('logout'));
    
  };

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          console.log("✅ Verified user:", res.data.user);
          setUser(res.data.user);
        } else {
          console.log("❌ User verification failed.");
          setUser(null);
        }
      } catch (error) {
        console.error('❌ Error verifying user:', error.message);
        setUser(null);
      }
    };

    verifyUser();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
export default ContextProvider;
