import React, { useState } from "react";
import "./top10.css";
import LeftSection from "./artist/ArtistSection";
import RightSection from "./track/TrackSection";
import axios from "axios";

export const Top10 = () => {
  const [showArtists, setShowArtists] = useState(false);
  const [showGoBack, setShowGoBack] = useState(false);

  const [showTrack, setShowTrack] = useState(false);
  const [showGoBacktrack, setShowGoBacktrack] = useState(false);

  const [artistData, setArtistData] = useState([]);
  const [tracksData, setTracksData] = useState([]);

  const getArtistData = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      // Handle the case where the access token is missing.
      console.error("Access token is missing.");
      return;
    }

    try {
      const artistResp = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/fetchTopArtists`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setArtistData(artistResp.data.items);
    } catch (error) {
      console.error("Error fetching artist data:", error);
    }
  };

  const getTracksData = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      // Handle the case where the access token is missing.
      console.error("Access token is missing.");
      return;
    }

    try {
      const tracksResp = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/fetchTopTracks`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTracksData(tracksResp.data.items);
    } catch (error) {
      console.error("Error fetching tracks data:", error);
    }
  };

  const toggleArtists = () => {
    setShowArtists(!showArtists);
    setShowGoBack(true);

    // Fetch artistData when the button is clicked
    if (!artistData.length) {
      getArtistData();
    }
  };

  const goBack = () => {
    setShowArtists(false);
    setShowGoBack(false);
  };

  const toggleTrack = () => {
    setShowTrack(!showTrack);
    setShowGoBacktrack(true);

    // Fetch tracksData when the button is clicked
    if (!tracksData.length) {
      getTracksData();
    }
  };

  const goBacktrack = () => {
    setShowTrack(false);
    setShowGoBacktrack(false);
  };

  return (
    <div className="container">
      <LeftSection
        showArtists={showArtists}
        showGoBack={showGoBack}
        toggleArtists={toggleArtists}
        goBack={goBack}
        artistData={artistData}
      />
      <RightSection
        showTrack={showTrack}
        showGoBack={showGoBacktrack}
        toggleTrack={toggleTrack}
        goBack={goBacktrack}
        tracksData={tracksData}
      />
    </div>
  );
};
