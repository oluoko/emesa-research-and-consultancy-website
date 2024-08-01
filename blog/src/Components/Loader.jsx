import React from "react";
import Loading from "../images/Loading.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <figure>
        <img src={Loading} alt="cute loader" className="w-20 h-20" />
      </figure>
    </div>
  );
};

export default Loader;
