import React from "react";
import "./Contacts.css";

const Contacts = () => {
  const mapUrl = `https://www.google.com/maps?q=-1.1848195937575883,36.8957236708013&output=embed`;

  return (
    <div className="screen-container">
      <div id="contacts" className="screen">
        <div className="section-container">
          <section className="left">
            <div className="contacts-text">
              <h3>Where are we located?</h3>
              <br />
              <p>KAHAWA WEST KWARE PHASE TWO ICPAK</p>
              <p>
                P.O BOX 2613 - 00100 GPO NAIROBI || +254 729 682 573 || +254 742
                967 422
              </p>
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
        <div id="map-container">
          <h2>Visit us today</h2>
          <iframe title="Location Map" src={mapUrl}></iframe>
        </div>
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
