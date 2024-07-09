import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="screen-container">
      <div id="contacts" className="screen section-container">
        <section className="left">
          <div className="contacts-text">
            <h3>Where are we located?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit neque maxime quisquam dicta atque corrupti suscipit minima
              voluptatibus quo incidunt quas corporis repellendus ut eveniet
              aliquid, quia aspernatur dolorem.
            </p>
          </div>
          <div id="map">this will contain the map</div>
        </section>
        <section className="right">
          <div className="contacts-form form">
            <h3>Contact us</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-content">
          <div className="section-container">
            <section className="left">
              <p>&copy; 2024 Emesa Research and Consultancy</p>
            </section>
            <section className="right">
              <p>Terms and conditions</p>
              <p>Privacy policy</p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
