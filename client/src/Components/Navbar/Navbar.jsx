import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav-container">
      <nav>
        <p id="logo">
          <Link to="/">Home</Link>
        </p>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
