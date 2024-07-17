import React from "react";
import "./Ads.css";

const Ads = ({ position }) => {
  const style = {
    left: position === "left" ? "1.5%" : "auto",
    right: position === "right" ? "1.5%" : "auto",
  };

  return (
    <div id="ads" style={style}>
      Ads
    </div>
  );
};

export default Ads;
