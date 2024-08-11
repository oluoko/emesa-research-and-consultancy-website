import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../Assets/userProfile.png";

const ProfileScreen = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <button className="button fixed top-4 left-4 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline">
        <Link to="/careers" className="text-2xl ">
          Back
        </Link>
      </button>
      <div className="w-11/12 mx-8 flex justify-around h-4/5 mt-28 bg-blue-400">
        <div className="w-1/4 bg-yellow-300 p-20">
          <img src={profileImage} className="w-full" />
        </div>
        <div className="w-3/4 bg-orange-500"></div>
      </div>
    </div>
  );
};

export default ProfileScreen;
