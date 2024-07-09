import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="nav-container">
      <nav>
        <p id="logo">
          <Link
            to="/"
            className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
            style={{ "--orange": "var(--orange)" }}
          >
            Home
          </Link>
        </p>
        <ul>
          <li>
            <Link
              to="/about"
              className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-90"
              style={{ "--orange": "var(--orange)" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
              style={{ "--orange": "var(--orange)" }}
            >
              Services
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleExternalLink("http://blog.localhost:3000")}
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
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                handleExternalLink("http://careers.localhost:3000")
              }
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
            </button>
          </li>
          <li>
            <Link
              to="/contacts"
              className="text-black no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 "
              style={{ "--orange": "var(--orange)" }}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
