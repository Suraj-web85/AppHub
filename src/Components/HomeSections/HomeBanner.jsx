import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";


const HomeBanner = () => {

  const responsiveHB = {
    0: {
      items: 1,
    },
  };
  return (
    <div className="homebanner">
      <ReactOwlCarousel
        className="hb-carousel"
        margin={10}
        loop
        responsive={responsiveHB}
      >
        <div className="hb-item-con">
          <div className="hb-item">1</div>
        </div>
        <div className="hb-item-con">
          <div className="hb-item">2</div>
        </div>
        <div className="hb-item-con">
          <div className="hb-item">3</div>
        </div>
        <div className="hb-item-con">
          <div className="hb-item">4</div>
        </div>
        <div className="hb-item-con">
          <div className="hb-item">5</div>
        </div>
        <div className="hb-item-con">
          <div className="hb-item">6</div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default HomeBanner;
