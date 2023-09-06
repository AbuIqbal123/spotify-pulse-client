import React from "react";

interface CardProps {
  key: number,
  name: string,
  images: Array<{
    height: number;
    url: string;
    width: number;
  }>;
}

export const Card: React.FC<CardProps> = ({ name, images }) => {
  if (images.length > 0) {
    const firstImage = images[0];

    return (
      <div className="artistCard">
        <img src={firstImage.url} alt={name} />
        <p>{name}</p>
      </div>
    );
  } else {
    // Handle the case where there are no images
    return (
      <div className="artistCard error">
        <p>No image available</p>
        <p>{name}</p>
      </div>
    );
  }
};

export default Card;
