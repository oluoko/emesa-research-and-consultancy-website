import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-gray-500 flex flex-col justify-center items-center">
      <div className="footer-content relative w-10/12 mx-2 grid grid-cols-2 md:grid-cols-4 my-14 md:my-20 ">
        {[
          [
            "Dr. Emelda Nafula",
            [
              ["FaceBook", "a", ""],
              ["&copy; 2024 Emesa Research and Consultancy", "Link", "/"],
            ],
          ],
          [
            "Company",
            [
              ["About", "a", "#about"],
              ["Blog", "Link", "/blogs"],
              ["Careers", "LInk", "/careers"],
              ["Contact Us", "a", "#contacts"],
              ["Privacy Policy", "Link", "/privacy-policy"],
              ["Terms of Service", "Link", "/terms-of-service"],
            ],
          ],
          [
            "Social",
            [
              ["FaceBook", "a", "#about"],
              ["LinkedIn", "Link", "/blogs"],
              ["GitHub", "LInk", "https://github.com/"],
            ],
          ],
          [
            "Created by: Brian Otieno",
            [
              ["Instagram", "a", "https://instagram.com/that_guy.brian"],
              ["Twitter", "a", "https://x.com/oluoko_"],
              ["GitHub", "a", "https://github.com/oluoko"],
              [
                "LinkedIn",
                "a",
                "https://www.linkedin.com/in/brian-otieno-64a902213/",
              ],
              [
                "FaceBook",
                "a",
                "https://www.facebook.com/profile.php?id=100070284942061",
              ],
            ],
          ],
        ].map(([title, items]) => (
          <div
            key={title}
            className="grid my-4 md:my-2 mx-3 md:mx-6 place-content-start "
          >
            <div className="font-bold text-white my-5">{title}</div>
            <div className="w-full grid place-content-start gap-2">
              {items.map(([itemTitle, itemUrl, itemStyle]) => (
                <a
                  key={itemTitle}
                  href={itemUrl}
                  className={`rounded-lg text-slate-700 font-medium  hover:text-orange-500 ${itemStyle}`}
                >
                  {itemTitle}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
