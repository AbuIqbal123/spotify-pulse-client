import React, { useEffect } from "react";

const Callback: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    console.log("checking for access token", accessToken);
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
    }

    window.location.href = "/";
  }, []);

  return <div>Logging you in...</div>;
};

export default Callback;
