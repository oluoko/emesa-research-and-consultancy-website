import React from "react";
import "./Home.css";
import Ads from "../../Ads/Ads.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="screen-container">
      <div id="home" className="screen section-container">
        <section className="left">
          <div className="image-shuffler">
            image shuffler will be contained here
          </div>
        </section>
        <section className="right">
          <h1>Welcome to Emesa Research and consultancy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            magni voluptatem aut facilis minus, nam aliquam cupiditate, ullam
            culpa, error in soluta earum?
            <Link to=""> Dr. Emelda Nafula Nyongesa</Link>
            <br />
            Sapiente mollitia ullam facilis, modi cumque facere, ex est dolor
            dicta adipisci maiores consectetur culpa molestiae voluptatem quasi
            nobis ea deleniti vel quos temporibus sed nesciunt quaerat! Vitae
            tempore minus, reiciendis corrupti laborum dolorem eligendi
            laboriosam?
          </p>
          <button>Learn more</button>
        </section>
      </div>
      <Ads />
    </div>
  );
};

export default Home;
