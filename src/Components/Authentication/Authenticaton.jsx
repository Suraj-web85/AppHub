import Images from '../../Common/Images';
import "./Authentication.css";
import { Link } from "react-router-dom";


export default function Authentication() {
  return (
    <div className="Authentication">
      <div className="Au-wrapper">
        <img src={Images.AppHub} className='A-logo' alt="AppHub" />
        <h5 className="mh">Welcome To AppHub</h5>
        <p className="mpara">Login with Your AppHub account to continue </p>
        <div className="button-wrapper">
          <Link className="au-btn" to="/auth/login">
            Log in
          </Link>
          <Link className="au-btn" to="/auth/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
