import React, { useState, useEffect } from "react";
import "./Background.css"; // Ensure you import the CSS file

const Background = () => {
  const [isWhiteText, setIsWhiteText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".div-background");
      const rect = element.getBoundingClientRect();
      const middleY = rect.top + rect.height / 2;
      const middleX = rect.left + rect.width / 2;

      const blackSectionStart = rect.left + (rect.width * 51) / 100;

      if (middleX > blackSectionStart) {
        setIsWhiteText(true);
      } else {
        setIsWhiteText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="div-background">
      <div className={`text-content ${isWhiteText ? "white-text" : ""}`}>
        <h1>Your Text Here</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          amet ipsum, molestiae itaque expedita reiciendis facilis repellat
          corrupti porro hic nisi. Soluta veritatis praesentium cum perspiciatis
          at ipsum. Tempora fugiat quas, maxime, nulla non nostrum qui iure
          dolorum rerum ea animi nesciunt culpa itaque officiis consequuntur
          cumque! Rem ut quia quis veniam accusantium doloremque facilis eius
          vel impedit? Officiis at quasi distinctio illum ad earum quia, impedit
          deserunt velit omnis!
        </p>
      </div>
    </div>
  );
};

export default Background;
