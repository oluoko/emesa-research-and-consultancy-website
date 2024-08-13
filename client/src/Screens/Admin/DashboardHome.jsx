import React from "react";
import userProflie from "../../Assets/userProfile.png";

const DashboardHome = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full m-2">
      <div className="">
        <div className="">Dr. Emelda Sichangi </div>
        <div className="">Managing Director</div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-8"
              src={userProflie}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
