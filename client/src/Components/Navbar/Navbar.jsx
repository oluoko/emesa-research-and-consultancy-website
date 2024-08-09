import React from "react";
import "./Navbar.css";
import userProfile from "../../Assets/userProfile.png";
import logo from "../../Assets/Logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ screen }) => {
  return (
    <div id="nav-container">
      <nav>
        <p id="logo">
          <Link
            to="/"
            className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
            style={{ "--orange": "var(--orange)" }}
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
                  style={{ "--orange": "var(--orange)" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
                  style={{ "--orange": "var(--orange)" }}
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-500 no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
                  style={{
                    "--tw-text-opacity": "1",
                    "--orange": "var(--orange)",
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
                    "--orange": "var(--orange)",
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
                  style={{ "--orange": "var(--orange)" }}
                >
                  Contacts
                </a>
              </li>
            </>
          )}

          {screen === "blog" && (
            <>
              <li>
                <div className="relative h-9 w-full max-w-md">
                  <input
                    type="text"
                    className="w-full h-8 py-2 px-4 bg-gray-100 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                <button className="write-button">Write</button>
              </li>
              <li>
                <span className="notifications-icon">🔔</span>
              </li>
              <li>
                <Link to="/profile">
                  <img
                    src={userProfile}
                    alt="Profile"
                    className="profile-pic w-9 h-9"
                  />
                </Link>
              </li>
            </>
          )}

          {screen === "careers" && (
            <>
              <li></li>
              <li></li>
              <li>
                <Link to="/register-login" className="register-login-link">
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
                <Link to="/profile" className="user-profile-link">
                  <img src={userProfile} alt="Profile" className="w-9 h-9" />
                </Link>
              </li>
            </>
          )}

          {!["home", "blog", "careers"].includes(screen) && (
            <>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <Link
                  to="/"
                  className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300"
                  style={{ "--orange": "var(--orange)" }}
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
