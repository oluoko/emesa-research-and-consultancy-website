import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div
      className="
"
    >
      <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-black flex flex-col items-center  text-white ">
        <h className="mb-8 text-2xl text-orange-500">REGISTER AN ACCOUNT</h>
        <form className=" flex flex-col items-center ">
          <input
            type="text"
            id="name"
            className="  font-bold mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-600 bg-inherit leading-tight  focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder="Your Name"
          />

          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full   font-bold mb-4 py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder="Your Email"
          />

          <input
            type="email"
            id="confirmEmail"
            className="shadow appearance-none border rounded w-full   font-bold mb-4 py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder="Confirm Your Email"
          />

          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full  font-bold mb-4 py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder="Password"
          />

          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full font-bold mb-4 py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder="Confirm Your Password"
          />

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
            className=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-xl"
          >
            Register
          </button>

          <p className="mt-5 text-xl">
            Already have and account?{" "}
            <Link className="text-blue-500 hover:text-orange-500 " to="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
