import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-gray-500 flex flex-col justify-center items-center ">
      <div className="footer-content relative w-10/12 mx-2 grid grid-cols-2 md:grid-cols-4 my-14 md:my-16 ">
        {[
          [
            "Dr. Emelda Nafula",
            [
              [
                "LinkedIn",
                "https://www.linkedin.com/in/emelda-nafula-n-nyongesa-42180835",
                "_blank",
              ],
              ["Email", "mailto:emeldasichangi123@gmail.com", "_blank"],
              ["© 2024 Emesa Research and Consultancy", "/", "_self"],
            ],
          ],
          [
            "Company",
            [
              ["About", "#about", "_self"],
              ["Blog", "/blogs", "_blank"],
              ["Careers", "/careers", "_blank"],
              ["Contact Us", "#contacts", "_self"],
              ["Privacy Policy", "/privacy-policy", "_self"],
              ["Terms of Service", "/terms-of-service", "_self"],
            ],
          ],
          [
            "Social",
            [
              [
                "FaceBook",
                "https://www.facebook.com/profile.php?id=61559877964082t",
                "_blank",
              ],
              [
                "LinkedIn",
                "https://www.linkedin.com/in/emesa-research-ba040a29b",
                "_blank",
              ],
              ["GitHub", "https://github.com/emesaresearch", "_blank"],
            ],
          ],
          [
            "Created by: Brian Otieno",
            [
              ["Instagram", "https://instagram.com/that_guy.brian", "_blank"],
              ["Twitter", "https://x.com/oluoko_", "_blank"],
              ["GitHub", "https://github.com/oluoko", "_blank"],
              [
                "LinkedIn",

                "https://www.linkedin.com/in/brian-otieno-64a902213/",
                "_blank",
              ],
              [
                "FaceBook",

                "https://www.facebook.com/profile.php?id=100070284942061",
                "_blank",
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
              {items.map(([itemTitle, itemUrl, target]) => (
                <a
                  key={itemTitle}
                  href={itemUrl}
                  className={`rounded-lg text-slate-700 font-medium  hover:text-orange-500`}
                  target={target}
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
