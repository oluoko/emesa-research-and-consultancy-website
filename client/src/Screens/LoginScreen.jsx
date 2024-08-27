import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-black flex flex-col   text-white ">
        <h4 className="mb-4 text-2xl text-orange-500">SIGN IN</h4>
        <p className="mb-3 ">Enter your email and password to sign in</p>
        <form className=" flex flex-col items-center ">
          {[
            ["email", "email", "Your Email", ""],
            ["password", "password", "Your Password", ""],
          ].map(([id, type, placeholder, className]) => (
            <input
              key={id}
              type={type}
              id={id}
              className={`font-bold mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-600 bg-inherit leading-tight  focus:outline-none focus:shadow-outline focus:border-orange-500 ${className}`}
              placeholder={placeholder}
            />
          ))}
          <div className="m-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-white">
                Agree with statments in{" "}
                <a className="text-blue-500 hover:text-orange-500" href="">
                  Terms of Service
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className=" button font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>

          <p className="mt-5 text-xl">
            Don&quot;t have an account?{" "}
            <Link
              className="text-blue-500 hover:text-orange-500"
              to="/register"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
