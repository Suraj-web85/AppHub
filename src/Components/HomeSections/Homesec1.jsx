import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import skeleimg from "../../assets/svg/app-skele.svg";

import "./Homesections.css";

import { useAppContext } from "../Context/AppContext";
import { useAuth } from "../Context/AuthProvider";
import { SkeleRect } from "../../Common/Skeleton";

const Homesec1 = ({ apk_type }) => {
  const { state } = useAuth();
  const isLoggedIn = state.isAuthenticated;
  const [apps, setApps] = useState();

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/apphub/apks/most-popular?apk_type=${apk_type}`
        );
        const data = await response.json();
        setApps(data);
      } catch (error) {
        console.error("Error fetching and sorting apps:", error);
      }
    };
    fetchApps();
  }, [apk_type]);

  const responsiveOptions = {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1700: {
      items: 3,
    },
  };

  const apkData = apps || [];
  console.log(apkData);
  return (
    <div className="car-con apk-rect-con">
      <div className="car-con-heading">
        <h3 className="sh">Most Popular</h3>
        <p className="mpara">Some of The Most Popular {apk_type}</p>
      </div>
      <OwlCarousel
        className="owl-theme"
        nav
        dots={false}
        responsive={responsiveOptions}
        loop
      >
        {apkData.length == 0 ? (
          <SkeleRect />
        ) : (
          apkData.map((item) => (
            <Link
              to={isLoggedIn ? `/apks/${item._id}` : "/auth/login"}
              className="m-apkcon aflex"
              key={item.id}
              style={{ backgroundImage: `url(${item.apk_banner})` }}
            >
              <div className="apk-desc">
                <img
                  src={item.apk_logo == null ? item.apk_logo : skeleimg}
                  alt=""
                  className="apk-logo"
                />
                <div className="apk-info">
                  <p className="apk-name mpara">{item.apk_name}</p>
                  <p className="apk-own para">{item.apk_own}</p>
                </div>
                <div className="apk-action aflex">
                  <button className="mpara i-btn" onClick={item.apk_url}>
                    Install
                  </button>
                </div>
                <div className="apkcatlabel sspara">{item.apk_category}</div>
              </div>
            </Link>
          ))
        )}
      </OwlCarousel>
    </div>
  );
};

export default Homesec1;
