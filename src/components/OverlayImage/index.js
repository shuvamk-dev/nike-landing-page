import React from "react";
import "./overlayImage.css";

const OverlayImage = () => {
  return (
    <img
      className="overlay-image"
      src={require("../../assets/overlayImage.png")}
      alt="Nike Overlay"
    />
  );
};

export default OverlayImage;
