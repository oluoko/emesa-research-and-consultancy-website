import React from "react";
import "./Contacts.css";

const Contacts = () => {
  const mapUrl = `https://www.google.com/maps?q=-1.1848195937575883,36.8957236708013&output=embed`;

  return (
    <div className="screen-container">
      <div id="contacts" className="screen section-container">
        <section className="left">
          <div className="contacts-text">
            <h3>Where are we located?</h3>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit neque maxime quisquam dicta atque corrupti suscipit minima
              voluptatibus quo incidunt quas corporis repellendus ut eveniet
              aliquid, quia aspernatur dolorem.
            </p>
          </div>
          <div id="map-container">
            <h2>Visit us today</h2>
            <br />
            <br />
            <iframe
              title="Location Map"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={mapUrl}
            ></iframe>
          </div>
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
