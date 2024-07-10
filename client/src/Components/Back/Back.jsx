import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div id="nav-container">
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
    </div>
  );
};

export default Back;
