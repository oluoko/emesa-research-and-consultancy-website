import React from "react";
import "./Contacts.css";

const Contacts = () => {
  const mapUrl = `https://www.google.com/maps?q=-1.1848195937575883,36.8957236708013&output=embed`;

  return (
    <div className="screen-container">
      <div id="contacts" className="screen">
        <div className="section-container">
          <section className="left">
            <div className="contacts-text ">
              <h3 className="text-3xl">Where are we located?</h3>
              <br />
              <div className=" font-extrabold text-2xl">
                {" "}
                <p>KAHAWA WEST KWARE PHASE TWO ICPAK</p>
                <p>
                  P.O BOX 2613 - 00100 GPO NAIROBI
                  <br /> || +254 729 682 573 || +254 742 967 422
                </p>
              </div>
              <br />
              <br />
              <p className="text-xl">
                Embark on a journey of discovery and growth with Emesa Research
                &amp; Consultancy. Let&#39;s build a future of possibilities
                together.
              </p>
            </div>
          </section>
          <section className="right">
            <div className="contacts-form form max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-blackborder-4">
              <h3>Contacts Form</h3>
              <form>
                <div className="flex justify-around">
                  <div className="m-2">
                    <label
                      className="block text-white text-sm font-bold mb-2 text-xl"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="m-2">
                    <label
                      className="block text-white text-xl text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="j.doe@company.com"
                    />
                  </div>
                </div>

                <div className="m-2">
                  <label
                    className="block text-white text-xl font-bold mb-2"
                    htmlFor="description"
                  >
                    What is this about?
                  </label>
                  <textarea
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Hello there,

There is a bug in... How can I apply to be an employee... At what time are your offices open..."
                    rows="5"
                  ></textarea>
                </div>
                <div className="m-2">
                  {/* <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              By submitting this form, you agree to the Privacy Policy
            </span>
          </label> */}
                </div>
                <div className="m-2 flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <div className="text-center mt-4 text-black flex flex-col justify-center items-center">
                    <p>Hate Contact forms?</p>
                    <p>
                      <a
                        href="mailto:researchemesa@gmail.com"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Our email
                      </a>
                    </p>
                  </div>
                </div>
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
