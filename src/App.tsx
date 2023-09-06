import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/home/Home";
import Callback from "../src/components/callback/Callback";
import { Top10 } from "./components/top10/Top10";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top" element={<Top10 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
