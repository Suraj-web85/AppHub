import React from "react";
import "./Homesections.css";

import skeleapp from "../../assets/svg/app-skele.svg";
import { Link } from "react-router-dom";

export default function Homesec3(props) {
  const getWindowWidth = () => window.innerWidth;

  const calculateNumberOfItemsToSlice = () => {
    const windowWidth = getWindowWidth();

    if (windowWidth >= 800) {
      return 38;
    } else if (windowWidth >= 600) {
      return 26;
    } else {
      return 15;
    }
  };
  const numberOfItemsToMap = calculateNumberOfItemsToSlice();

  const slicedArray = props.apk_data.slice(0, numberOfItemsToMap);
  return (
    <div className="random-sec aflex">
      <div className="car-con-heading">
        <h3 className="sh">Explore Games</h3>
        <p className="mpara">The Most Awesome Collections of Games</p>
      </div>
      <div className="apk-grid-con">
        {slicedArray.map((item) => (
          <div className="apk-grid-item" key={item.id}>
            <img
              src={item.apk_logo != null ? item.apk_logo : skeleapp}
              alt={item.apk_name}
            />
          </div>
        ))}
      </div>
      <Link to='/games' className="sh apk-grid-btn">Explore</Link>
    </div>
  );
}
