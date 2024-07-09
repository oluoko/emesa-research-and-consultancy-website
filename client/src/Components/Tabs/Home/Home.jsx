import React from "react";
import "./Home.css";
import Ads from "../../Ads/Ads.jsx";

const Home = () => {
  return (
    <div className="screen-container">
      <div id="home" className="screen section-container">
        <section className="left">
          <div className="image-shuffler"></div>
        </section>
        <section className="right">
          <h1>Welcome to Emesa Research and consultancy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            magni voluptatem aut facilis minus, nam aliquam cupiditate, ullam
            culpa, error in soluta earum? Sapiente mollitia ullam facilis, modi
            cumque facere, ex est dolor dicta adipisci maiores consectetur culpa
            molestiae voluptatem quasi nobis ea deleniti vel quos temporibus sed
            nesciunt quaerat! Vitae tempore minus, reiciendis corrupti laborum
            dolorem eligendi laboriosam?
          </p>
          <button>Learn more</button>
        </section>
      </div>
      <Ads />
    </div>
  );
};

export default Home;
