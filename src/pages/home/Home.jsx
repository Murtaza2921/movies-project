import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
      <Trending></Trending>
    </div>
  );
};

export default Home;
