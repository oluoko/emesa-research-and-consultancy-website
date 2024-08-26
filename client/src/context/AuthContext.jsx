import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const { data } = await axios.get("/api/users/profile");
        setUser(data);
      } catch (error) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/users/auth", { email, password });
      setUser(data);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (userInfo) => {
    try {
      const { data } = await axios.post("/api/users", userInfo);
      setUser(data);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await axios.post("/api/users/logout");
    setUser(null);
    navigate("/login");
  };

  const resetPassword = async (token, newPassword) => {
    try {
      await axios.put(`/api/users/reset-password/${token}`, {
        password: newPassword,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await axios.post("/api/users/forgot-password", { email });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, resetPassword, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
