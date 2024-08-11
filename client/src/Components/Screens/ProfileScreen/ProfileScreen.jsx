import React from "react";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  return (
    <div className="relative">
      <button className="button fixed top-4 left-4 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline">
        <Link to="/careers" className="text-2xl ">
          Back
        </Link>
      </button>
    </div>
  );
};

export default ProfileScreen;
