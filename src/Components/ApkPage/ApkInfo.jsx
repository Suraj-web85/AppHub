import React from "react";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ApkInfo(props) {
  return (
    <>
      <div className="ap-aptags">
        <h3 className="sh">Tags</h3>
        <div className="ap-aptagcon aflex">
          {props.apk_tags.map((item, index) => (
            <p key={index} className="para">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="ap-apsupport aflex">
        <h3 className="sh">App Support</h3>
        <div className="ap-apsuinfo aflex">
          <GiEarthAsiaOceania />
          <div className="ap-apsudesc">
            <div className="mpara">Website</div>
            <div className="para">https:\\www.app.com</div>
          </div>
        </div>
        <div className="ap-apsuinfo aflex">
          <MdAlternateEmail />
          <div className="ap-apsudesc">
            <div className="mpara">Email</div>
            <div className="para">app@app.net</div>
          </div>
        </div>
        {/* <div className="ap-apsuinfo aflex">
          <FaLocationDot />
          <div className="ap-apsudesc">
            <div className="mpara">Address</div>
            <div className="para">
              Room no 14, Emerald Isle, Powai, SV Road, Mumbai 400-072
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
