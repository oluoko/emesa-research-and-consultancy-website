import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

const About = () => {
  const [images, setImages] = useState([]);
  const galleryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Import all images from the folder
    const importAll = (r) => r.keys().map(r);
    const images = importAll(
      require.context(
        "../../../Assets/Images/Staff",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    setImages(images);
  }, []);

  useEffect(() => {
    if (location.pathname === "/about" && galleryRef.current) {
      const scrollToBottomAndTop = () => {
        galleryRef.current.scrollTop = galleryRef.current.scrollHeight;
        setTimeout(() => {
          galleryRef.current.scrollTop = 0;
        }, 2000);
      };
      scrollToBottomAndTop();
    }
  }, [location]);

  return (
    <div className="screen-container">
      <div id="about" className="screen section-container">
        <section className="left">
          <h2>About Emesa Research and Consultancy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
            quibusdam sint omnis eius ea distinctio nesciunt facilis nostrum
            sapiente corporis quisquam perferendis perspiciatis magni,
            asperiores sit debitis beatae dolorum placeat, animi ullam error
            deleniti. Aspernatur ipsa iure harum obcaecati ab est esse
            necessitatibus repellat consequatur fuga nemo consectetur rem
            provident sapiente beatae voluptatum eligendi inventore eum minima
            assumenda, dignissimos laboriosam, animi exercitationem.
            Exercitationem molestias quidem impedit eos, in expedita?
          </p>
        </section>
        <section className="right">
          <h3>Here are some of our staff members.</h3>
          <div className="gallery-container" ref={galleryRef}>
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
