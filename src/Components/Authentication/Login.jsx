import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Authentication.css";
import { useAuth } from "../Context/AuthProvider";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (logindata.email && logindata.password) {
      axios
        .post("http://localhost:3001/apphub/logindata", logindata, {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        })
        .then((result) => {
          console.log(result);
          console.log(result.data.username);
          if (result.data.stat === 0) {
            console.log("hello");
            login(result.userId, result.accessToken, result.usertype, result.username);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [logindata, login, navigate]);

  const login_formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is Required"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    enableReinitialize: false,
    onSubmit: (values) => {
      setLogindata((PrevLogindata) => ({ ...PrevLogindata, ...values }));
    },
  });

  return (
    <div className="login-p aflex">
      <div className="lpc">
        <h5 className="mh">Welcome Back!</h5>
        <p className="mpara">Login with Your User Credentials</p>
        <form onSubmit={login_formik.handleSubmit} action="/" method="POST">
          <p
            className={`validation-msg ${
              login_formik.touched.email && login_formik.errors.email
                ? "msg-red"
                : ""
            }`}
          >
            {login_formik.touched.email && login_formik.errors.email
              ? login_formik.errors.email
              : ""}
          </p>
          <input
            value={login_formik.values.email}
            onChange={login_formik.handleChange}
            type="text"
            id="email"
            className="para"
            name="email"
            // required
            placeholder="E-mail"
          />
          <p
            className={`validation-msg ${
              login_formik.touched.password && login_formik.errors.password
                ? "msg-red"
                : ""
            }`}
          >
            {login_formik.touched.password && login_formik.errors.password
              ? login_formik.errors.password
              : ""}
          </p>
          <input
            value={login_formik.values.password}
            onChange={login_formik.handleChange}
            id="password"
            type="password"
            name="password"
            // required
            className="para"
            placeholder="Password"
          />
          <button type="submit" className="au-btn para">
            Continue
          </button>
        </form>
        <p className="para">
          Don't have a account ? <Link to="/auth/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
