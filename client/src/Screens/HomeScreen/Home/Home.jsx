import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useDropzone } from "react-dropzone";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Home.css";
import Ads from "../../../Components/Ads.jsx";
import { Link } from "react-router-dom";
// import importedImages from "../../Utils/imageImports.js"; // Import the images

const Home = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  // useEffect(() => {
  //   setImages(importedImages); // Set the imported images
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     const newImages = acceptedFiles.map((file) => ({
  //       original: URL.createObjectURL(file),
  //       originalAlt: file.name,
  //     }));
  //     setUploadedImages([...uploadedImages, ...newImages]);
  //   },
  // });

  // const combinedImages = [...images, ...uploadedImages];

  return (
    <div className="screen-container">
      <div id="home" className="screen section-container">
        <section className="left">
          <div className="carousel-container w-full rounded-xl overflow-hidden">
            {/* <ImageGallery items={combinedImages} infinite autoPlay /> */}
          </div>
        </section>
        <section className="right">
          <h1>Emesa Research and consultancy</h1>
          <br />
          <p>
            We are architects of innovation, dedicated to unraveling the
            mysteries of today&#39;s dynamic business landscape through
            cutting-edge research and strategic consultancy. Established in
            2023, by our proprietor{" "}
            <Link
              to="/Dr-Emelda"
              className="text-gray-500 no-underline hover:text-orange-500 focus:text-orange-500 transition duration-300 transform hover:scale-110"
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
            , we have emerged as a trusted partner for organizations seeking a
            profound understanding of their industries, competitors, and
            potential pathways to success.
          </p>
          <h2>Vision:</h2>
          <p>
            Empowering Innovation skills, To be the leading ICT, Accountancy and
            Research consultancy services both locally and Internationally.
          </p>

          <h2>Mission:</h2>
          <p>
            The research institution has a responsibility to provide research
            services in a cost effective ways to both international and external
            stakeholders.
          </p>
        </section>
      </div>
      <Ads />
    </div>
  );
};

export default Home;
