import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-images-wrapper">
        <img
          src={require("../../assets/prod1.png")}
          alt="Product 1"
          className="footer-product-image"
        />

        <img
          src={require("../../assets/prod2.png")}
          alt="Product 2"
          className="footer-product-image"
        />

        <img
          src={require("../../assets/prod3.png")}
          alt="Product 3"
          className="footer-product-image"
        />
      </div>
      <div className="footer-play-icon">
        <img
          className="footer-video-logo"
          src={require("../../assets/Video.png")}
          alt="Play Icon"
        />
        <div className="footer-play-label">Play Video</div>
      </div>
    </div>
  );
};

export default Footer;
