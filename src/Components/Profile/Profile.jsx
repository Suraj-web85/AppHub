import React, { useState } from "react";
import { Link } from "react-router-dom";

import Icons from "../../Common/Icons";
import "./Profile.css";

const Users_data = {
  id: 1,
  icon: "",
  username: "User123",
  email: "shadowwarrior0721@gmail.com",
  pfp: "",
  role: "user",
};

export default function Profile() {
  const [modalVisible, setmodalVisible] = useState(false);
  const handleEdit = () => {
    setmodalVisible(!modalVisible);
  };
  return (
    <div className="pf-p aflex">
      <div className="pf-sec aflex">
        {Users_data.pfd ? (
          <img src={Users_data.pfp} alt="PFP" />
        ) : (
          <div className="pf-plogo">{Icons.person}</div>
        )}
        <p className="mh">{Users_data.username}</p>
        <p className="para">{Users_data.email}</p>
        <div className="pf-pact-icons">
          <p className="pf-pact-icon para aflex" onClick={handleEdit}>
            Edit {Icons.pencil}{" "}
          </p>
          <p className="pf-pact-icon para aflex">LogOut {Icons.exit}</p>
        </div>
      </div>
      {modalVisible == true ? (
        <div className="pf-pmodal aflex">
          <div className="pf-pmodal-form aflex">
            <div className="pf-pb-ar" onClick={handleEdit}>
              {Icons.backarrow}
            </div>
            Hello
          </div>
        </div>
      ) : Users_data.role == "user" ? (
        <div className="pf-sec3">
          <div className="pf-psuinfo aflex" to="/register">
            <h3 className="sh">Looking For a Place To Publish Your Apps ?</h3>
            <p className="mpara">Become Part of A Larger Community</p>
            <p className="para">Join the Super User Program</p>
            <Link className="mpara pf-preg-btn" to="/register">
              Register
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
