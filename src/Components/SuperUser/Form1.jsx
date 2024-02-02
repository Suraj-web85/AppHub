// import { useEffect, useState } from "react";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";

export default function UserDetails({
  formdata,
  formik,
  // setFormdata,
  // changeFormnumber,
}) {
  return (
    <form className="reg-su-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname" className="para">
        <p
          className={`validation-msg ${
            formik.touched.firstname && formik.errors.firstname ? "msg-red" : ""
          }`}
        >
          {formik.touched.firstname && formik.errors.firstname
            ? formik.errors.firstname
            : "First Name"}
        </p>
        <input
          id="firstname"
          className="reg-su-input"
          type="text"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="First Name"
          // required
        />
      </label>
      <label htmlFor="lastname" className="para">
        <p
          className={`validation-msg ${
            formik.touched.lastname && formik.errors.lastname ? "msg-red" : ""
          }`}
        >
          {formik.touched.lastname && formik.errors.lastname
            ? formik.errors.lastname
            : "LastName"}
        </p>
        <input
          id="lastname"
          name="lastname"
          className="reg-su-input"
          type="text"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          placeholder="Last Name"
          onBlur={formik.handleBlur}
        />
      </label>
      <label htmlFor="gender" className="para">
        <p
          className={`validation-msg ${
            formik.touched.gender && formik.errors.gender ? "msg-red" : ""
          }`}
        >
          {formik.touched.gender && formik.errors.gender
            ? formik.errors.gender
            : "Gender"}
        </p>{" "}
        <select
          id="gender"
          className="reg-su-input"
          type="list"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <option value="1" defaultValue={formdata.gender === "0"}>
            Male
          </option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>
      </label>
      <label htmlFor="dob" className="para">
        <p
          className={`validation-msg ${
            formik.touched.dob && formik.errors.dob ? "msg-red" : ""
          }`}
        >
          {formik.touched.dob && formik.errors.dob
            ? formik.errors.dob
            : "Date Of Birth"}
        </p>
        <input
          id="dob"
          className="reg-su-input"
          value={formik.values.dob}
          onChange={formik.handleChange}
          type="date"
          onBlur={formik.handleBlur}
          name="dob"
          // placeholder="01-02-2003"
        />
      </label>
      <label htmlFor="email" className="para gridspan2">
        <p
          className={`validation-msg ${
            formik.touched.email && formik.errors.email ? "msg-red" : ""
          }`}
        >
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : "Secondary Email Address"}
        </p>{" "}
        <input
          id="email"
          className="reg-su-input"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email Address"
        />
      </label>
      <label htmlFor="phone" className="para">
        <p
          className={`validation-msg ${
            formik.touched.phone && formik.errors.phone ? "msg-red" : ""
          }`}
        >
          {formik.touched.phone && formik.errors.phone
            ? formik.errors.phone
            : "Phone No"}
        </p>
        <input
          type="number"
          className="reg-su-input"
          placeholder="Phone"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          onBlur={formik.handleBlur}
        />
      </label>
      <label htmlFor="postalcode" className="para">
        <p
          className={`validation-msg ${
            formik.touched.postalcode && formik.errors.postalcode
              ? "msg-red"
              : ""
          }`}
        >
          {formik.touched.postalcode && formik.errors.postalcode
            ? formik.errors.postalcode
            : "Zip Code"}
        </p>{" "}
        <input
          type="number"
          className="reg-su-input"
          placeholder="Postal Code"
          id="postalcode"
          value={formik.values.postalcode}
          onChange={formik.handleChange}
          name="postalcode"
        />
      </label>
      <label htmlFor="address" className="para gridspan2">
        <p
          className={`validation-msg ${
            formik.touched.address && formik.errors.address ? "msg-red" : ""
          }`}
        >
          {formik.touched.address && formik.errors.address
            ? formik.errors.address
            : "Address"}
        </p>{" "}
        <input
          className="reg-su-input"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
          id="address"
          placeholder="Address"
        />
      </label>
      <label htmlFor="city" className="para">
        <p
          className={`validation-msg ${
            formik.touched.city && formik.errors.city ? "msg-red" : ""
          }`}
        >
          {formik.touched.city && formik.errors.city
            ? formik.errors.city
            : "City"}
        </p>
        <input
          type="text"
          className="reg-su-input"
          placeholder="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          id="city"
          name="city"
          onBlur={formik.handleBlur}
        />
      </label>
      <label htmlFor="country" className="para">
        <p
          className={`validation-msg ${
            formik.touched.country && formik.errors.country ? "msg-red" : ""
          }`}
        >
          {formik.touched.country && formik.errors.country
            ? formik.errors.country
            : "Country"}
        </p>
        <input
          type="text"
          className="reg-su-input"
          placeholder="Country"
          id="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          name="country"
          onBlur={formik.handleBlur}
        />
      </label>
      <div className="btn-container aflex">
        <button
          type="submit"
          className="next-btn su-form-btn para reg-su-input"
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </form>
  );
}
