import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./Authentication.css";

export default function Signup() {
  const [signupData, setsignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (signupData.email && signupData.password) {
      axios
        .post("http://localhost:3001/apphub/signupdata", signupData)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  }, [signupData]);

  const signup_formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is Required"),
      username: Yup.string().required("Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    enableReinitialize: false,
    onSubmit: (values) => {
      setsignupData((PrevsignupData) => ({ ...PrevsignupData, ...values }));
    },
  });

  return (
    <div className="signup-p aflex">
      <div className="background-image"></div>
      <div className="lpc">
        <h5 className="mh">Create Your Account</h5>
        <p className="mpara">Register YourSelf as a User</p>
        <form onSubmit={signup_formik.handleSubmit} action="/" method="POST">
          <p
            className={`validation-msg ${
              signup_formik.touched.email && signup_formik.errors.email
                ? "msg-red"
                : ""
            }`}
          >
            {signup_formik.touched.email && signup_formik.errors.email
              ? signup_formik.errors.email
              : ""}
          </p>
          <input
            value={signup_formik.values.email}
            onChange={signup_formik.handleChange}
            id="email"
            className="para"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <p
            className={`validation-msg ${
              signup_formik.touched.username && signup_formik.errors.username
                ? "msg-red"
                : ""
            }`}
          >
            {signup_formik.touched.username && signup_formik.errors.username
              ? signup_formik.errors.username
              : ""}
          </p>
          <input
            value={signup_formik.values.username}
            onChange={signup_formik.handleChange}
            type="text"
            id="username"
            className="para"
            name="username"
            placeholder="Create Username"
          />
          <p
            className={`validation-msg ${
              signup_formik.touched.password && signup_formik.errors.password
                ? "msg-red"
                : ""
            }`}
          >
            {signup_formik.touched.password && signup_formik.errors.password
              ? signup_formik.errors.password
              : ""}
          </p>
          <input
            value={signup_formik.values.password}
            onChange={signup_formik.handleChange}
            id="password"
            type="password"
            name="password"
            className="para"
            placeholder="Password"
          />
          <button type="submit" className="au-btn para">
            Continue
          </button>
        </form>
        <p className="para">
          Already have an account ? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
