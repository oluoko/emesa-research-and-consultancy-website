import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Toast, { showToast } from "../Components/Toast/Toast";

const LoginScreen = () => {
  const API_URL = "http://localhost:5000/api/users";
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
          >
            Sign In
          </button>
        </form>
        <p className="mt-5 text-xl">
          Don&quot;t have an account?{" "}
          <Link className="text-blue-500 hover:text-orange-500" to="/register">
            Sign up
          </Link>
        </p>
        <button
          className="button mt-4"
          onClick={() => (window.location.href = "/api/users/google")}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
