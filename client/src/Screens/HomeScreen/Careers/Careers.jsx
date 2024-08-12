import React from "react";
import "./Careers.css";
import CareersHomeScreen from "./CareersScreens/CareersHomeScreen/CareersHomeScreen ";

import Navbar from "../../../Components/Navbar/Navbar";

const Careers = () => {
  return (
    <div className="screen-container">
      <Navbar screen="careers" />
      <CareersHomeScreen />
    </div>
  );
};

export default Careers;
