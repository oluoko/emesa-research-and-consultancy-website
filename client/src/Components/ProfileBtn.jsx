import { useState } from "react";
import userProfile from "../Assets/userProfile.png";
import { Link, useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = localStorage.getItem("userData");
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (window.innerWidth <= 768) {
      // Adjust this breakpoint as needed
      navigate("/profile");
    } else {
      setShowMenu(!showMenu);
    }
  };

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

          {userData && userData.isAdmin ? (
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full " />
             <Link
            to="/profile"
            className="w-full h-full p-1 hover:rounded-t-xl hover:bg-slate-500 flex flex-col justify-center items-center hover:text-slate-200"
          >
            Profile
          </Link>
            
          )}
        </div>
      )}
    </li>
  );
};

export default ProfileBtn;
