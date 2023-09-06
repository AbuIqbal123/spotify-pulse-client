import React from "react";

interface ImageOverlayProps {
  imageSrc: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageSrc }) => (
  <div className="image-overlay">
    <img src={imageSrc} alt="Spotify Logo" />
  </div>
);

export default ImageOverlay;
