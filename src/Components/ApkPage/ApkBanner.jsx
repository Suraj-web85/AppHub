import React from "react";
import { FaDatabase } from "react-icons/fa";

export default function ApkBanner(props) {
  return (
    <div
      className="ap-banner"
      style={{ background: `url(${props.apk_banner})` }}
    >
      <div className="ap-apinfo contain aflex">
        <h1 className="mh">{props.apk_name}</h1>
        <p className="mpara">{props.apk_own}</p>
        <div className="ap-apklabel aflex">
          <img src={props.apk_logo} alt={props.apk_name} />
          <div className="ap-apreview">
            <p className="mpara">{props.apk_rating} &#9733;</p>
            <p className="para">{props.apk_rating} reviews</p>
          </div>
          <div className="ap-apdownloads">
            <p className="mpara">500+</p>
            <p className="para">Downloads</p>
          </div>
        </div>
        <button className="install-btn mpara i-btn">Install</button>
        <div className="loader-info">
          <p className="para">
            Uploaded By <span>{props.apk_uploader}</span>
          </p>
        </div>
        <div className="ap-apsizeinfo aflex">
          <FaDatabase className="mpara" />
          <p className="para">184.29 MB</p>
        </div>
      </div>
    </div>
  );
}
