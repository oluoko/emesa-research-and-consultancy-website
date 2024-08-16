import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard screen-container w-full h-screen flex flex-col sm:flex-wrap justify-center sm:justify-between  items-center bg-black-200">
      <Navbar screen="admin-dashboard" />
      <div className="dashboard-nav-container invisible md:visible fixed bg-white sm:bg-inherit sm:relative w-2/4 sm:w-1/5  h-5/6 shadow-sm rounded-xl m-2">
        <div className="dashboard-nav flex flex-col justify-start  items-center w-full h-full px-4 overflow-y-scroll">
          <div className="graphs w-full flex flex-col justify-evenly  items-center bg-gradient-to-b to-gray-200 from-slate-50  py-2 rounded">
            {[
              ["Dashboard", "/admin-dashboard"],
              ["Graphs", "/admin-dashboard/graphs"],
            ].map(([title, url]) => (
              <Link
                to={url}
                key={url}
                className="w-5/6 h-12 my-2 flex items-center pl-4  text-xl font-extrabold  hover:bg-gradient-to-b hover:to-gray-400 hover:from-slate-200  py-2 rounded "
              >
                {title}
              </Link>
            ))}
          </div>

          {[
            ["Profile", "/admin-dashboard/profile"],
            ["Update Pictures", "/admin-dashboard/update-pictures"],
          ].map(([title, url]) => (
            <Link
              to={url}
              key={url}
              className="w-5/6 h-12 my-2 flex items-center pl-4  text-xl font-extrabold  hover:bg-gradient-to-b hover:to-gray-400 hover:from-slate-200  py-2 rounded "
            >
              {title}
            </Link>
          ))}
          <div className="text-xl font-extrabold text-slate-400">
            ACCOUNT PAGES
          </div>
          {[
            ["Employees", "/admin-dashboard/employees"],
            ["Blogs", "/admin-dashboard/blogs"],
            ["User Profiles", "/admin-dashboard/user-profiles"],
          ].map(([title, url]) => (
            <Link
              to={url}
              key={url}
              className="w-5/6 h-12 my-2 flex items-center pl-4  text-xl font-extrabold  hover:bg-gradient-to-b hover:to-gray-400 hover:from-slate-200  py-2 rounded "
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div className="dashboard-outlet w-full sm:w-4/5  h-5/6 rounded-xl mr-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
