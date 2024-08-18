import React, { useState } from "react";
import "./Navbar.css";
import userProfile from "../../Assets/userProfile.png";
import logo from "../../Assets/Logos/logo.png";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ screen }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarOpen, setNavbaropen] = useState(false);

  return (
    <div id="nav-container">
      <div onClick={() => setNavbaropen(!navbarOpen)}>
        {navbarOpen ? (
          <LiaTimesSolid className="menuBtn closeBtn" />
        ) : (
          <IoMenu className="menuBtn openBtn" />
        )}
      </div>
      <nav
        className={`navbar menuItems ${navbarOpen && "navbarOpen"}`}
        onClick={() => {
          setNavbaropen(false);
        }}
      >
        <p id="logo">
          <Link
            to="/"
            className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
          >
            <img src={logo} alt="" />
          </Link>
        </p>
        <ul>
          {screen === "home" && (
            <>
              <li>
                <a
                  href="#about"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-90"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-500 no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-500 no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
                >
                  Contacts
                </a>
              </li>
            </>
          )}

          {screen === "blog" && (
            <>
              <li>
                <div className="relative h-9 max-w-md">
                  <input
                    type="text"
                    className="w-36 md:w-full h-8 py-2 px-4 bg-gray-100 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Search..."
                  />
                  <button className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-orange-500 focus:text-orange-500 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M18.4 10.4A8.4 8.4 0 1110 2a8.4 8.4 0 018.4 8.4z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li></li>
              <li>
                <Link
                  to="/post-blog"
                  className="no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Write
                </Link>
              </li>
              <li>
                <div className="h-full w-10  bg-black">
                  <span className="notifications-icon absolute  top-1/2 translate-y-1/2 animate-swing">
                    🔔
                  </span>
                </div>
              </li>
              <li>
                <img
                  src={userProfile}
                  alt="Profile"
                  className="profile-pic w-9 h-9"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <div className="dropdown-menu flex flex-col justify-center items-center fixed top-20 right-40  text-xl bg-slate-200 w-48 p-4 rounded-2xl shadow shadow-slate-700">
                    <Link
                      to="/profile"
                      className="w-full h-full p-1 hover:rounded-t-xl hover:bg-slate-500 flex flex-col justify-center items-center hover:text-slate-200"
                    >
                      Profile
                    </Link>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full " />

                    <button
                      className="logout-btn p-1 w-full h-full hover:rounded-b-xl hover:bg-slate-500 hover:text-slate-200
                    "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          )}

          {screen === "careers" && (
            <>
              <li></li>
              <li></li>
              <li>
                <Link to="/login" className="register-login-link">
                  Register/Login
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="employee-application-link text-gray-500 no-underline"
                >
                  Employee Form
                </Link>
              </li>
              <li>
                <Link
                  to="/attachee-application"
                  className="attachee-application-link"
                >
                  Attachee Form
                </Link>
              </li>
              <li>
                <img
                  src={userProfile}
                  alt="Profile"
                  className="profile-pic w-9 h-9"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <div className="dropdown-menu flex flex-col justify-center items-center fixed top-20 right-40  text-xl bg-slate-200 w-48 p-4 rounded-2xl shadow shadow-slate-700">
                    <Link
                      to="/profile"
                      className="w-full h-full p-1 hover:rounded-t-xl hover:bg-slate-500 flex flex-col justify-center items-center hover:text-slate-200"
                    >
                      Profile
                    </Link>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full " />

                    <button
                      className="logout-btn p-1 w-full h-full hover:rounded-b-xl hover:bg-slate-500 hover:text-slate-200
                    "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          )}

          {screen === "admin-dashboard" && (
            <>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <img
                  src={userProfile}
                  alt="Profile"
                  className="profile-pic w-9 h-9"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <div className="dropdown-menu flex flex-col justify-center items-center fixed top-20 right-40 text-xs md:text-xl bg-slate-200 w-48 md:p-2 rounded-2xl shadow shadow-slate-700">
                    <Link
                      to="/profile"
                      className="w-full h-full p-1 hover:rounded-t-xl hover:bg-slate-500 flex flex-col justify-center items-center hover:text-slate-200"
                    >
                      Profile
                    </Link>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full " />

                    <button
                      className="logout-btn p-1 w-full h-full hover:rounded-b-xl hover:bg-slate-500 hover:text-slate-200
                    "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          )}
          {!["home", "blog", "careers", "admin-dashboard"].includes(screen) && (
            <>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <Link
                  to="/"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
                >
                  Back
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
