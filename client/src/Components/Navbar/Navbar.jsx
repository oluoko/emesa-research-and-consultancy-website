import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <a
            href="https://example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://example.com/careers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
