import React from "react";
import "./Careers.css";
import CareersHomeScreen from "./CareersScreens/CareersHomeScreen/CareersHomeScreen ";

import Navbar from "../../Navbar/Navbar";

const Careers = () => {
  return (
    <div className="screen-container">
      <Navbar screen="careers" />
      <h1>Careers</h1>
      <p>Welcome to the Careers page!</p>
      <CareersHomeScreen />
    </div>
  );
};

export default Careers;
