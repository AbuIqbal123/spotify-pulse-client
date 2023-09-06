import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RightCard } from "../RightCard";

interface RightSectionProps {
  showTrack: boolean;
  showGoBack: boolean;
  toggleTrack: () => void;
  goBack: () => void;
  data: {
    name: string;
    image: {
      url: string;
    };
  }[];
  tracksData: {
    name: string;
    album: {
      images: Array<{
        height: number;
        url: string;
        width: number;
      }>;
    };
  }[];
}

const RightSection: React.FC<RightSectionProps> = ({
  showTrack,
  showGoBack,
  toggleTrack,
  goBack,
  tracksData,
}) => {
  return (
    <div className="right">
      Top Tracks
      {!showTrack && !showGoBack && (
        <button className="selectionbuttonright" onClick={toggleTrack}>
          Shop Top Tracks
        </button>
      )}
      {showTrack && (
        <>
          {showGoBack && (
            <div className="goBackIcon" onClick={goBack}>
              <IoMdArrowRoundBack />
            </div>
          )}
          <div className="artistList">
            {tracksData.map((item, index) => (
              <RightCard key={index} name={item.name} album={item.album} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RightSection;
