import React, { useEffect, useState } from "react";
import "./top10.css";
import LeftSection from "./artist/ArtistSection";
import RightSection from "./track/TrackSection";
import axios from 'axios';

export const Top10 = () => {
  const [showArtists, setShowArtists] = useState(false);
  const [showGoBack, setShowGoBack] = useState(false);

  const [showTrack, setShowTrack] = useState(false);
  const [showGoBacktrack, setShowGoBacktrack] = useState(false);

  const [artistData, setArtistData] = useState([]);
  const [tracksData, setTracksData] = useState([]);

  const getArtistData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const artistResp = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/fetchTopArtists`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setArtistData(artistResp.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const getTracksData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const tracksResp = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/fetchTopTracks`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setTracksData(tracksResp.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getArtistData()
    getTracksData()
  }, []);

  const toggleArtists = () => {
    setShowArtists(!showArtists);
    setShowGoBack(true);
  };

  const goBack = () => {
    setShowArtists(false);
    setShowGoBack(false);
  };

  const toggletrack = () => {
    setShowTrack(!showTrack);
    setShowGoBacktrack(true);
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
        data={[]}
        artistData={artistData}
      />
      <div className="image-overlay"></div>
      <RightSection
        showTrack={showTrack}
        showGoBack={showGoBacktrack}
        toggleTrack={toggletrack}
        goBack={goBacktrack}
        data={[]}
        tracksData={tracksData}
      />
    </div>
  );
};
