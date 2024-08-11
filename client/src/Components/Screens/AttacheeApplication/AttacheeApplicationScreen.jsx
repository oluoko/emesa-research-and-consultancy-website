import React from "react";
import { Link } from "react-router-dom";

const AttacheeApplicationScreen = () => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <h className="m-6 text-2xl text-orange-500">APPLY FOR ATTACHMENT</h>
      <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-gray-800 flex flex-col   text-white w-full">
        <form className=" flex flex-col items-center  ">
          <div className="row align-items-center pt-4 pb-3 border-y-gray-400">
            <label htmlFor="name" className="col-md-3 ps-5">
              FULL NAME
            </label>
            <input
              type="name"
              id="name"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-4 mb-6 py-4 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              placeholder="John Doe"
            />
          </div>

          <button
            type="submit"
            className=" font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>

          <p className="mt-5 text-xl">
            Don&quot;t have an account?{" "}
            <Link
              className="text-blue-500 hover:text-orange-500"
              to="/register"
            >
              SEND APPLICATION
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AttacheeApplicationScreen;
