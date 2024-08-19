import React from "react";
import { Link } from "react-router-dom";
import Back from "../Components/Back";

const AttacheeApplicationScreen = () => {
  return (
    <div className=" relative flex flex-col  vh-100  items-center justify-center m-2">
      <Back />

      <h className="mt-14 md:mt-6 text-2xl font-extrabold text-orange-500">
        APPLY FOR ATTACHMENT
      </h>
      <div className="contacts-form form w-full md:w-2/3 my-1 md:my-5 p-10 border rounded-lg shadow-lg bg-gray-800 flex flex-col   text-white ">
        <form className=" flex flex-col items-center  ">
          <div className="flex justify-between items-center  w-full  my-2">
            <label htmlFor="name" className="">
              FULL NAME
            </label>
            <input
              type="name"
              id="name"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-4 mb-6 py-4 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              placeholder="John Doe"
            />
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="flex justify-between items-center  w-full my-2">
            <label htmlFor="email" className="">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-4 mb-6 py-4 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500 w-full"
              placeholder="j.doe@company.com"
            />
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="flex justify-between items-center  w-full my-2">
            <label htmlFor="message" className="">
              ABOUT YOURSELF
            </label>
            <textarea
              type="message"
              id="message"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-4 mb-6 py-4 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500 w-full overflow-y-hidden                                                         "
              placeholder="Message to the employee telling us about yourself..."
            />
          </div>

          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="flex justify-between items-center  w-full my-2">
            <label htmlFor="message" className="">
              UPLOAD CV
            </label>
            <div className="m-4 mb-2 py-4 px-3">
              <input
                className="col-md-9 shadow appearance-none border rounded font-bold m-4 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500 w-full "
                id="formFileLg"
                type="file"
              />
              <div className="small text-gray-400 mt-2">
                Upload your CV/Resume or any other relevant file. Max file size
                10 MB
              </div>
            </div>
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <button
            type="submit"
            className=" button font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline w-full"
          >
            SEND APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttacheeApplicationScreen;
