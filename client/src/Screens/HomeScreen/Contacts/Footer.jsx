import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full  h-auto md:h-80 bg-black text-gray-500">
      <div className="footer-content relative w-11/12 mx-2 my-4 grid grid-cols-2 md:grid-cols-4">
        <div className="grid gap-2 md:gap-4 px-2 md:px-4">
          <p>&copy; 2024 Emesa Research and Consultancy</p>
        </div>
        <div className="grid gap-2 md:gap-4 px-2 md:px-4">
          <Link to="/terms-of-service">Terms Of Service</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
        </div>
        <div className="grid gap-2 md:gap-4 px-2 md:px-4"></div>
        <div className="grid gap-2 md:gap-4 px-2 md:px-4">
          <div className="my-2 flex flex-col justify-center items-center">
            <p className="text-xl">The Creator, Brian Otieno</p>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  className="hover:text-orange-500"
                  href="https://instagram.com/that_guy.brian"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-500"
                  href="https://x.com/oluoko_"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-500"
                  href="https://www.linkedin.com/in/brian-otieno-64a902213/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-500"
                  href="https://www.facebook.com/profile.php?id=100070284942061"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-orange-500"
                  href="https://github.com/oluoko"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
