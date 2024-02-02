import React, { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import skeleimg from "../../assets/svg/app-skele.svg";

import "./Homesections.css";
import { SkeleSqu } from "../../Common/Skeleton";

export default function Homesec2() {
  const [apk_data, setapkData] = useState();
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/apphub/apks/newly-uploaded"
        );
        const data = await response.json();
        setapkData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApps();
  }, []);
  const responsiveOptions = {
    0: {
      items: 3,
      nav: true,
      dots: false,
    },
    500: {
      items: 4,
      nav: true,
      dots: false,
    },
    600: {
      items: 5,
      nav: true,
      dots: false,
    },
    700: {
      items: 6,
      nav: true,

      dots: false,
    },
    1000: {
      items: 10,
      nav: true,
      dots: false,
    },
  };
  const apkData = apk_data || [];
  return (
    <div className="car-con">
      <div className="car-con-heading">
        <h3 className="sh">New On AppHub</h3>
        <p className="mpara">Checkout Some of The Recently Uploaded Games</p>
      </div>
      <OwlCarousel className="owl-theme" responsive={responsiveOptions} loop>
        {!apk_data ? (
         <SkeleSqu />
        ) : (
          Array.isArray(apkData) &&
          apkData.map((item) => (
            <div className="apk-square-con aflex" key={item.id}>
              <img
               src={item.apk_logo == null ? item.apk_logo : skeleimg}
               alt={item.apk_name} />
              <p className="sspara">{item.apk_name}</p>
              <p className="para">
                {item.apk_rating}{" "}
                <span style={{ color: "var(--t2)" }}>&#9733;</span>
              </p>
            </div>
          ))
        )}
      </OwlCarousel>
    </div>
  );
}
