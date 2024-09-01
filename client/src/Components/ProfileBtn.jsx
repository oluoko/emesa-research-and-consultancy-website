import React from "react";

const ProfileBtn = ({ userProfile, handleProfileClick, showMenu }) => {
  return (
    <li>
      <img
        src={userProfile}
        alt="Profile"
        className="profile-pic w-9 h-9"
        onClick={handleProfileClick}
      />
      {showMenu && window.innerWidth > 768 && (
        <div className="dropdown-menu flex flex-col justify-center items-center fixed top-20 right-40 text-xl bg-slate-200 w-48 p-4 rounded-2xl shadow shadow-slate-700">
          <Link
            to="/profile"
            className="w-full h-full p-1 hover:rounded-t-xl hover:bg-slate-500 flex flex-col justify-center items-center hover:text-slate-200"
          >
            Profile
          </Link>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full " />
          <button className="logout-btn p-1 w-full h-full hover:rounded-b-xl hover:bg-slate-500 hover:text-slate-200">
            Logout
          </button>
        </div>
      )}
    </li>
  );
};

export default ProfileBtn;
