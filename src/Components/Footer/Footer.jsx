import "./Footer.css";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  FcQuestions,
  FcAbout,
  FcDocument,
  FcSurvey,
  FcSportsMode,
} from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="contain">
      {/* <div className="fsec">
        <div className="logo mh">APPHUB</div>
        <address className="company-details para">
          <strong>MUMBAI, INDIA</strong>
          <br /> F22 Sundar Nagar,Tunga Village,
          <br />
          SV Road, Powai, Mumbai 400-072
        </address>
        +91 8928247785
      </div> */}
      <div className="fsec aflex">
        <div className="fsub-sec">
          <h5 className="sh">Communicate</h5>
          <li>
            <Link className="para" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="para" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="para">FeedBack</Link>
          </li>
        </div>
        <div className="fsub-sec">
          <h5 className="sh">DEVELOPERS</h5>
          <li>
            <Link to="/register" className="para">
              Super Program
            </Link>
          </li>
          <li>
            <Link className="para">FAQ's</Link>
          </li>
          <li>
            <Link className="para">For Users</Link>
          </li>
        </div>
        <ul className="fsub-sec">
          <div className="pf-pinfo-sec">
            <Link to="/register" className="pf-pinfo-con aflex">
              <FcSportsMode className="pf-pinfo-logo" />
              <p className="sspara">SuperUser Program</p>
            </Link>
            {/* <div className="pf-pinfo-con aflex">
              <FcAbout className="pf-pinfo-logo" />
              <p className="sspara">About AppHub</p>
            </div>
            <div className="pf-pinfo-con aflex">
              <FcQuestions className="pf-pinfo-logo" />
              <p className="sspara">FAQ's</p>
            </div> */}
            {/* <div className="pf-pinfo-con aflex">
              <FcDocument className="pf-pinfo-logo" />
              <p className="sspara">Terms of Services</p>
            </div>
            <div className="pf-pinfo-con aflex">
              <FcSurvey className="pf-pinfo-logo" />
              <p className="sspara">FeedBack</p>
            </div> */}
          </div>
        </ul>
      </div>
      <div className="fsec para">
        CopyRight © 2023-{currentYear} APPHUB - All Rights Reserved
      </div>
    </footer>
  );
}
