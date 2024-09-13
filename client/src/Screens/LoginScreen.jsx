import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Toast, { showToast } from "../Components/Toast/Toast";
import axios from "axios";

const LoginScreen = () => {
  const USERS_API_URL = "http://localhost:5000/api";
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const userData = localStorage.getItem("userData");

  const navigate = useNavigate();
  const location = useLocation();
  const sp = new URLSearchParams(location.search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userData) {
      navigate(redirect); // Redirect to the originally intended URL after login
    }
  }, [navigate, redirect, userData]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${USERS_API_URL}/users/auth`,
        data,
        config
      );
      localStorage.setItem("userData", JSON.stringify(response.data));

      setTimeout(() => {
        showToast("Login Successful!", "success");
        navigate(redirect); // Redirect to the original URL
      }, 500);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
      const errorMessage = error?.response?.data?.message || error.message;
      showToast(errorMessage, "error");
    }
    setLoading(false);
  };

  function navigateToGoogleAuth(url) {
    window.location.href = url;
  }

  async function googleAuthHandler() {
    try {
      const response = await fetch(`${USERS_API_URL}/auth/google`, {
        method: "POST",
      });
      const data = await response.json();
      navigateToGoogleAuth(data.url);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
      const errorMessage = error?.response?.data?.message || error.message;
      showToast(errorMessage, "error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toast />
      <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-black flex flex-col text-white">
        <h4 className="mb-4 text-2xl text-orange-500">SIGN IN</h4>
        <form onSubmit={loginHandler} className="flex flex-col items-center">
          <input
            type="email"
            id="email"
            className="mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 bg-inherit"
            placeholder="Your Email"
            onChange={changeHandler}
          />
          <input
            type="password"
            id="password"
            className="mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 bg-inherit"
            placeholder="Your Password"
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="button font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="mt-5 text-xl">
          Don&quot;t have an account?{" "}
          <Link
            className="text-blue-500 hover:text-orange-500"
            to={`/register?redirect=${redirect}`}
          >
            Sign up
          </Link>
        </p>
        <button className="button mt-4" onClick={() => googleAuthHandler()}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
