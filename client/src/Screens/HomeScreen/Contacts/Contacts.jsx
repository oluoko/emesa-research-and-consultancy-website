import "./Contacts.css";
import React, { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const mapUrl = `https://www.google.com/maps?q=-1.1848195937575883,36.8957236708013&output=embed`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    services: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="screen-container">
      <div
        id="contacts"
        className="screen flex flex-col justify-center shadow-md"
      >
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
            <div className="contacts-form form max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-black ">
              <h3>Contacts Form</h3>
              <form>
                <div className="flex justify-around ">
                  <div className="m-2">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline "
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="m-2">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
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
                    className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
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
                    className="button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <div className="text-center mt-4 text-white flex flex-col justify-center items-center">
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
              <div className="my-2 flex flex-col justify-center items-center">
                <p className="text-xl">The Creator, Brian Otieno</p>
                <ul className="grid grid-cols-2 gap-2">
                  <li>
                    <a
                      className="hover:text-orange-500"
                      href="https://instagram.com/that_guy.brian"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-orange-500"
                      href="https://x.com/oluoko_"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-orange-500"
                      href="https://www.linkedin.com/in/brian-otieno-64a902213/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-orange-500"
                      href="https://www.facebook.com/profile.php?id=100070284942061"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-orange-500"
                      href="https://github.com/oluoko"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
