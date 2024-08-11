import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import profileImage from "../../../Assets/userProfile.png";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Save the current location's pathname in localStorage or a state
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);
  return (
    <div className="relative flex flex-col justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="button fixed top-4 left-4 font-bold text-2xl py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
      >
        Back
      </button>
      <div className="w-11/12 p-4  h-full mx-8 flex justify-around  h-3/6 mt-28 gap-4  shadow-lg border-2 rounded-xl  bg-gray-500 ">
        <div className="w-1/4  p-4 rounded-xl">
          <img
            src={profileImage}
            className="w-full rounded-full hover:border-2 hover:border-orange-500 "
          />
        </div>

        <div className=" p-3 w-3/4  flex flex-col justify-center items-center  rounded-xl bg-white ">
          <div className="text-gray-400 text-2xl">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">NAME: </div>
                <div className="px-4 py-2">Jane</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Doe</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Female</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+11 998001001</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a className="text-blue-800" href="mailto:jane@example.com">
                    jane@example.com
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
              </div>
            </div>
          </div>
          <button className="button rounded-xl w-full block  p-3 my-4">
            Show Full Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
