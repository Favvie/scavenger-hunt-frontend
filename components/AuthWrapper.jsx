'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useContext, useState, useEffect } from 'react';

// Auth Context
const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

// Combined Auth Wrapper
export default function AuthWrapper({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for stored user data on component mount
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('scavengerhunt_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('scavengerhunt_user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('scavengerhunt_user');
    }
  };
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}