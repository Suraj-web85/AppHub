import React from "react";
import "./GameBanner.css";
import Video1 from "../../assets/videos/video1.mp4";
import Video2 from "../../assets/videos/video2.mp4";
import Video3 from "../../assets/videos/video3.mp4";
import Video4 from "../../assets/videos/video4.mp4";
import Homesec2 from "../HomeSections/Homesec2";

const GameBanner = () => {
  return (
    <div className="gb-banner aflex contain">
      <div className="gb-item gb-ga-con">
        <div className="gb-item-labels">
          <h1 className="mh">Explore Games</h1>
          <p className="para">Get The Best of the games </p>
        </div>
      </div>
      <div className="gb-item">
        <div className="gb-vi-con">
          <div className="gb-bg-img"></div>
          <div className="gbv gbv1">
            <video src={Video2} loop muted autoPlay></video>
          </div>
          <div className="gbv gbv2">
            <video src={Video4} loop muted autoPlay></video>
          </div>
          <div className="gbv gbv3">
            <video src={Video1} loop muted autoPlay></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBanner;  
