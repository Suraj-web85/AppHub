import { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";

import * as Yup from "yup";
import "./Super.css";
import UserDetials from "./Form1";
import UserDetials2 from "./Form2";

export function Register() {
  const [form_number, setform_number] = useState(1);
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    gender: "1",
    dob: "",
    email: "",
    phone: "",
    postalcode: "",
    address: "",
    city: "",
    country: "",
    status: "1",
    uploadertype: "1",
    url: "",
    disclose1: false,
    terms: false,
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "1",
      dob: "",
      email: "",
      phone: "",
      postalcode: "",
      address: "",
      city: "",
      country: "",
    },

    // Validation
    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name is Required"),
      lastname: Yup.string().required("Last Name is Required"),
      dob: Yup.date().required("Date of Birth is Required"),
      email: Yup.string()
        .email("Please Enter a Valid email address")
        .notRequired(),
      phone: Yup.string()
        .min(10, "Phone number must be of atleast 10 digits")
        .max(10, "Phone number must be of atmost 10 digits")
        .required("Phone is Required"),
      postalcode: Yup.number().required("Postal Code is Required"),
      address: Yup.string().notRequired(),
      city: Yup.string().required("City Name is Required"),
      country: Yup.string().required("Country Name is Required"),
    }),
    enableReinitialize: true,
    // Submit Action
    onSubmit: (values) => {
      // console.log(values);
      setFormdata((prevFormdata) => ({
        ...prevFormdata,
        ...values,
      }));
      changeFormnumber(2);
    },
  });

  function changeFormnumber(newform_number) {
    setform_number(newform_number);
  }

  return (
    <div className="register-p aflex">
      <div className="reg-sec"></div>
      <div className="reg-sec2 aflex">
        <h1 className="mh">
          Register To Become A <span>SuperUser</span>
        </h1>
        {form_number === 1 ? (
          <UserDetials
            formdata={formdata}
            formik={formik}
            // setFormdata={setFormdata}
            // changeFormnumber={changeFormnumber}
          />
        ) : (
          <UserDetials2
            formdata={formdata}
            setFormdata={setFormdata}
            changeFormnumber={changeFormnumber}
          />
        )}
      </div>
    </div>
  );
}
