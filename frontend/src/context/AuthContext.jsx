// src/context/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userId: localStorage.getItem('userId') || '',
    token: localStorage.getItem('token') || '',
    isAuthenticated: !!localStorage.getItem('token'),
  });

  const login = (userId, token) => {
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', token);
    setAuth({ userId, token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token');
    setAuth({ userId: null, token: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
