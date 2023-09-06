import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "../../card/Card";
interface LeftSectionProps {
  showArtists: boolean;
  showGoBack: boolean;
  toggleArtists: () => void;
  goBack: () => void;
  data: {
    name: string;
    image: {
      url: string;
    };
  }[];
  artistData: {
    name: string;
    images: Array<{
      height: number;
      url: string;
      width: number;
    }>;
  }[];
}

const LeftSection: React.FC<LeftSectionProps> = ({
  showArtists,
  showGoBack,
  toggleArtists,
  goBack,
  artistData,
}) => {
  return (
    <div className="left">
      Top Artists
      {!showArtists && !showGoBack && (
        <button className="selectionbuttonleft" onClick={toggleArtists}>
          Show Top Artists
        </button>
      )}
      {showArtists && (
        <>
          {showGoBack && (
            <div className="goBackIcon" onClick={goBack}>
              <IoMdArrowRoundBack />
            </div>
          )}
          <div className="artistList">
            {artistData.map((item, index) => (
              <Card key={index} name={item.name} images={item.images} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LeftSection;
