import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useDropzone } from "react-dropzone";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Home.css";
import Ads from "../../Ads/Ads.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

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
    setImages(
      images.map((image, index) => ({
        original: image,
        thumbnail: image,
        originalAlt: `Image ${index + 1}`,
        thumbnailAlt: `Thumbnail ${index + 1}`,
      }))
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => ({
        original: URL.createObjectURL(file),
        thumbnail: URL.createObjectURL(file),
        originalAlt: file.name,
        thumbnailAlt: file.name,
      }));
      setUploadedImages([...uploadedImages, ...newImages]);
    },
  });

  const combinedImages = [...images, ...uploadedImages];

  return (
    <div className="screen-container">
      <div id="home" className="screen section-container">
        <section className="left">
          <div className="carousel-container">
            <ImageGallery
              items={combinedImages}
              infinite
              autoPlay
              showThumbnails
            />
          </div>
        </section>
        <section className="right">
          <h1>Emesa Research and consultancy</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            magni voluptatem aut facilis minus, nam aliquam cupiditate, ullam
            culpa, error in soluta earum?
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
            <br />
            Sapiente mollitia ullam facilis, modi cumque facere, ex est dolor
            dicta adipisci maiores consectetur culpa molestiae voluptatem quasi
            nobis ea deleniti vel quos temporibus sed nesciunt quaerat! Vitae
            tempore minus, reiciendis corrupti laborum dolorem eligendi
            laboriosam?
          </p>
          <br />
          <button className="width-100%">Learn more</button>
        </section>
      </div>
      <Ads />
    </div>
  );
};

export default Home;
