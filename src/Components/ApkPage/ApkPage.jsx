import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";

import { AppData } from "../../data/App_data";
import "./ApkPage.css";

import ApkComments from "./ApkComments";
import ApkInfo from "./ApkInfo";
import ApkDesc from "./ApkDesc";
import ApkBanner from "./ApkBanner";

export default function ApkPage() {
  const { apkId } = useParams();
  const [appdata, setAppdata] = useState(null);
  const responsiveOptions = {
    0: {
      items: 1,
      dots: false,
      nav: false,
    },
    600: {
      items: 2,
      dots: false,
    },
    1000: {
      items: 3,
      dots: false,
    },
  };
  // const apkData = props.apk_data || [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:3001/apps/${apkId}`
        );
        setAppdata(response.data);
      } catch (err) {
        console.log(" Error while Fethcing : ", err);
      }
    };
    fetchData();
  }, [apkId]);
  const apkData = AppData[0];
  return (
    <div className="apk-page">
      <ApkBanner {...AppData[0]} />
      <div className="ap-images-car">
        <OwlCarousel
          className="owl-theme"
          responsive={responsiveOptions}
          nav
          loop
        >
          {apkData.apk_images.map((image, index) => (
            <div key={apkData.id} className="ap-images">
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <div className="ap-ap-data contain">
        <ApkDesc {...AppData[0]} />
        <ApkInfo {...AppData[0]} />
        <ApkComments {...AppData[0]} />
      </div>
    </div>
  );
}
