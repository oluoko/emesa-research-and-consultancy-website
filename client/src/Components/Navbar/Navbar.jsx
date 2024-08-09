import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ screen }) => {
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="nav-container">
      {screen === "home" ? (
        <nav>
          <p id="logo">
            <a
              href="#home"
              className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
              style={{ "--orange": "var(--orange)" }}
            >
              <img src={logo} alt="" />
            </a>
          </p>
          <ul>
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
                className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
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
                className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
                style={{ "--orange": "var(--orange)" }}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <p id="logo">
            <Link
              to="/"
              className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
              style={{ "--orange": "var(--orange)" }}
            >
              Back
            </Link>
          </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
