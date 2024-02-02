import React from "react";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import { appCategories, gameCategories } from "../data/Category";
import "../styles/Upload.css";

import * as Yup from "yup";

function Upload() {
  const [uploadData, setUploadData] = useState({
    apk_name: "",
    apk_package: "",
    apk_owner: "",
    apkuploader: "",
    apk_uploadtime: "",
    apk_file: null,
    apk_banner: "",
    apk_logo: "",
    apk_category: "",
    apk_tags: [],
    apk_type: 0,
    apk_images: [],
    apk_description: "",
  });

  const formik = useFormik({
    initialValues: {
      apk_name: "",
      apk_owner: "",
      apk_package: "",
      apk_description: "",
      apk_type: 0,
      apk_category: "",
      apk_tags: [],
      apk_logo: "",
      apk_banner: "",
      apk_images: [],
      apk_file: "",
      apk_uploadtime: "",
    },

    validationSchema: Yup.object({
      apk_name: Yup.string().required("Apk Name is Required"),
      apk_owner: Yup.string().required("Publisher Name is Required"),
      apk_package: Yup.string().required("Package Name for Apk is Required"),
      apk_description: Yup.string().required("Apk Descrption is Required"),
      apk_file: Yup.mixed().required("APK File is Required"), // Yup.mixed() for file inputs
      apk_banner: Yup.string()
        .url("Invalid URL format for Apk Banner")
        .required("Apk Banner is Required"),
      apk_logo: Yup.string()
        .url("Invalid URL format for Apk Logo")
        .required("Apk Logo is Required"),
      //   apk_category: Yup.string().required("Category is Required"),
      apk_images: Yup.array()
        .of(Yup.string().url("Invalid URL format for Apk Image"))
        .required("At least one Apk Image is Required"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      setUploadData((prevUploadData) => ({ ...prevUploadData, ...values }));
      console.log(uploadData);
    },
  });

  const handleCategorySelect = (category) => {
    const { apk_tags } = formik.values;

    if (!apk_tags.includes(category)) {
      formik.setFieldValue("apk_tags", [...apk_tags, category]);
    }
  };

  const handleTagRemove = (category) => {
    const { apk_tags } = formik.values;
    const updatedCategories = apk_tags.filter(
      (selectedCategory) => selectedCategory !== category
    );

    formik.setFieldValue("apk_tags", updatedCategories);
  };
  return (
    <div className="apk-upload contain">
      <div className="gu-data">
        <h1 className="mh">Apk Upload</h1>
        <p className="para">
          Welcome To AppHub Community! We Appreciate your contribution to our
          Community. To ensure a positive experience for all Users please fill
          the form with accurate and truthfull information.
        </p>
        <p className="para">
          As you complete the form, consider the following guidelines :{" "}
        </p>
        <ul className="para">
          <li>
            Provide genuine and relevant details about your APK, including its
            name, owner, and category.
          </li>
          <li>
            Double-check that the APK files, images, and logos you upload comply
            with our community standards. Avoid content that may be offensive,
            harmful, or violate any regulations.
          </li>
          <li>
            Choose appropriate tags and categories for your APK to help users
            discover it easily.
          </li>
          <li>
            Take care to respect copyrights and intellectual property rights
            when uploading any images or logos.
          </li>
          <li>
            If you have any questions or concerns, feel free to reach out.
          </li>
        </ul>
      </div>
      <form className="form-fw" onSubmit={formik.handleSubmit}>
        <label htmlFor="apk_name" className="para">
          <p
            className={`validation-msg ${
              formik.touched.apk_name && formik.errors.apk_name ? "msg-red" : ""
            }`}
          >
            {formik.touched.apk_name && formik.errors.apk_name
              ? formik.errors.apk_name
              : "Apk Name"}
          </p>
          <input
            type="text"
            id="apk_name"
            className="reg-su-input"
            value={formik.values.apk_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="apk_name"
            placeholder="Enter a Valid Apk Name"
          />
        </label>
        <label htmlFor="apk_owner" className="para">
          <p
            className={`validation-msg ${
              formik.touched.apk_owner && formik.errors.apk_owner
                ? "msg-red"
                : ""
            }`}
          >
            {formik.touched.apk_owner && formik.errors.apk_owner
              ? formik.errors.apk_owner
              : "Publish Under The Name Of"}
          </p>
          <input
            type="text"
            id="apk_owner"
            className="reg-su-input"
            value={formik.values.apk_owner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="apk_owner"
            placeholder="Enter The Organization Name or Individual"
          />
        </label>
        <label htmlFor="apk_package" className="para">
          <p
            className={`validation-msg ${
              formik.touched.apk_package && formik.errors.apk_package
                ? "msg-red"
                : ""
            }`}
          >
            {formik.touched.apk_package && formik.errors.apk_package
              ? formik.errors.apk_package
              : "Package Name "}
          </p>
          <input
            type="text"
            id="apk_package"
            className="reg-su-input"
            value={formik.values.apk_package}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="apk_package"
            placeholder="com.example.appname"
          />
        </label>
        <label htmlFor="apk_description" className="para">
          <p
            className={`validation-msg ${
              formik.touched.apk_description && formik.errors.apk_description
                ? "msg-red"
                : ""
            }`}
          >
            {formik.touched.apk_description && formik.errors.apk_description
              ? formik.errors.apk_description
              : "Provide a Detailed Description About The Apk"}
          </p>
          <textarea
            type="text"
            id="apk_description"
            className="reg-su-input"
            value={formik.values.apk_description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="apk_description"
            placeholder="Description.."
          />
        </label>

        <div className="apkup-desc">
          <h3 className="sh">Type and Relevance</h3>
          <label htmlFor="apk_type" className="para">
            <p className="mb-1"> Select The Type of Apk File</p>
            <div className="mb-2">
              <label className="mpara">
                <input
                  type="radio"
                  id="appradio"
                  checked={formik.values.apk_type === 0}
                  onChange={() => formik.setFieldValue("apk_type", 0)}
                  className="reg-su-check"
                />
                App
              </label>
              <label className="mpara">
                <input
                  type="radio"
                  id="gameradio"
                  checked={formik.values.apk_type === 1}
                  onChange={() => formik.setFieldValue("apk_type", 1)}
                  className="reg-su-check"
                />
                Game
              </label>
            </div>
          </label>
          <label htmlFor="apk_category" className="para">
            <p className="para">Choose A Category</p>
            <select
              name="apk_category"
              type="list"
              id="apk_category"
              className="reg-su-input"
              value={formik.values.apk_category}
              onChange={formik.handleChange}
            >
              {(formik.values.apk_type === 0
                ? appCategories
                : gameCategories
              ).map((i) => (
                <option value={i.id} key={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="apk_tags" className="para">
            <p className="para">Choose Relevant Tags for Your Apk</p>
            <select
              name="apk_tags"
              type="list"
              id="apk_tags"
              className="reg-su-input"
              value=""
              onChange={(e) => handleCategorySelect(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {(formik.values.apk_type === 0
                ? appCategories
                : gameCategories
              ).map((i) => (
                <option value={i.name} key={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </label>
          <div className="apup-tagcon aflex">
            {formik.values.apk_tags.map((category) => (
              <div key={category} className="apup-tag para">
                {category}
                <span
                  className="tag-remove"
                  onClick={() => handleTagRemove(category)}
                >
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="apkup-imgcon aflex">
          <h3 className="sh">Upload Images</h3>
          <label htmlFor="apk_logo" className="para">
            Upload Apk Logo (<span className="redimp"> 1:1 </span>Format )
            <input
              required
              type="file"
              id="apk_logo"
              name="apk_logo"
              accept="image/*"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="apk_banner" className="para">
            Upload Apk Thumbnail (<span className="redimp"> 1:2 - 16:9 </span>
            Format )
            <input
              required
              type="file"
              id="apk_banner"
              name="apk_banner"
              accept="image/*"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="apk_images" className="para">
            Upload Apk Images / ScreenShots (
            <span className="redimp"> 1:2 - 16:9 </span>Format )
            <input
              required
              type="file"
              id="apk_images"
              name="apk_images"
              accept="image/*"
              multiple
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <div className="apkup-final aflex">
          <h3 className="sh">Upload Apk File</h3>
          <label htmlFor="apk_file" className="para">
            Upload APK File
            <input
              required
              type="file"
              id="apk_file"
              name="apk_file"
              accept=".apk"
              onChange={formik.handleChange}
            />
          </label>

          <button type="submit" className="para apkup-btn reg-su-input">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
