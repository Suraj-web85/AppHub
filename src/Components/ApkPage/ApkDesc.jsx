import React from "react";

export default function ApkDesc(props) {
  return (
    <>
      <div className="ap-ap-info">
        <h3 className="sh">
          About - <span>{props.apk_name}</span>
        </h3>
        <div
          className="ap-apdesc para"
          dangerouslySetInnerHTML={{ __html: props.apk_desc }}
        ></div>
      </div>
      <div className="ap-aprate">
        <h3 className="sh">Rating & Info</h3>
        <div className="ap-apratecon aflex">
          <p className="ap-aprating">{props.apk_rating}</p>
          <div className="stars aflex">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
      </div>
    </>
  );
}
