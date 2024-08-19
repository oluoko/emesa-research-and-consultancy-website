import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import "react-image-gallery/styles/css/image-gallery.css";
import "./About.css";

const About = () => {
  // const [images, setImages] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const galleryRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   // Import all images from the folder
  //   const importAll = (r) => r.keys().map(r);
  //   const images = importAll(
  //     require.context(
  //       "../../../Assets/Images/Staff",
  //       false,
  //       /\.(png|jpe?g|svg)$/
  //     )
  //   );
  //   setImages(images);
  // }, []);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div className="screen-container">
      <div id="about" className="screen section-container shadow-md">
        <section className="left">
          <h2>About Emesa Research and Consultancy</h2>
          <br />
          <p>
            Emesa Research and Consultancy was founded by{" "}
            <Link
              to="/Dr-Emelda"
              className="
                text-gray-500 no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
              style={{
                "--tw-text-opacity": "1",
                "--orange": "var(--orange)",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {" "}
              Dr. Emelda Nafula Nyongesa
            </Link>
          </p>
          <br />
          <h3>Research Excellence</h3>
          <p>
            We specialize in delving deep into market trends, consumer
            behaviors, and emerging technologies. Our team of seasoned
            researchers, armed with a wealth of expertise, employs a holistic
            approach to gather, analyze, and interpret data. From comprehensive
            market reports to bespoke studies tailored to your specific needs,
            we empower our clients with the insights needed to make informed
            decisions in an ever-evolving marketplace.
          </p>
          <br />
          <h3>Consultancy Mastery</h3>
          <p>
            In the realm of consultancy, we are not just advisors; we are
            strategic partners invested in the success of your business. Our
            consultancy services are designed to provide actionable strategies
            that drive growth, enhance efficiency, and foster resilience.
            Whether you are navigating a market entry, optimizing operations, or
            reimagining your business model, our consultancy team brings a
            wealth of experience and a forward-thinking perspective to the
            table.
          </p>
          <br />
          <h3>Shaping Futures</h3>
          <p>
            At Emesa research and consultancy, we see ourselves not just as
            consultants but as architects of a future where businesses thrive
            and evolve. By pioneering research and offering strategic guidance,
            we aim to empower organizations to navigate complexity and unlock
            their full potential.
          </p>
        </section>
        <section className="right">
          <h4 className="text-xl">Here are some of our staff members.</h4>
          {/* <div className="gallery-container flex flex-wrap w-full h-5/6 overflow-y-scroll overflow-x-hidden" ref={galleryRef}>
            {images.map((image, index) => (
              <div key={index} className="gallery-item p-5">
                <img src={image} alt={`Image ${index + 1}`} className="w-full  h-auto block rounded-xl cursor-pointer" />
              </div>
            ))}
          </div> */}
        </section>

        {/* <div className="fullscreen-gallery">
          {images.map((image, index) => (
            <div key={index} className="fullscreen-gallery-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default About;
