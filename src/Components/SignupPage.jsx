import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useFormik } from "formik";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useStateValue } from "../context/stateProvider";
const SignupPage = ({ openSignupModal, oncloseSignupModal }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.Name) errors.Name = "Required";
    if (!values.Email) errors.Email = "Required";
    if (!values.Username) errors.Username = "Required";
    if (!values.Password) errors.Password = "Required";
    return errors;
  };
  const formik = useFormik({
    initialValues: { Name: "", Email: "", Username: "", Password: "" },
    validate,
    onSubmit: (values) => {
      axios
        .post("https://devs-clash.onrender.com/signin", {
          contest: [],
          wallet: 0,
          name: values.Name,
          user_name: values.Username,
          password: values.Password,
          email: values.Email,
        })
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        // console.log("first")
    },
  });

  if (!openSignupModal) return null;
  return ReactDOM.createPortal(
    <div className="fixed z-20 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
    
      <div className="flex items-start ">
        <form
          className="flex h-[100vh] flex-col p-5 rounded-md  items-center bg-primary_black text-lg  w-fit gap-1"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex justify-end">
            <button onClick={oncloseSignupModal}> x</button>
          </div>
          <label className="text-primary_green" htmlFor="Name">
            Enter name
          </label>
          <input
            className="m-2"
            type="text"
            name="Name"
            id="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div className="text-red-600 text-md">{formik.errors.Name}</div>
          ) : null}
          <label className="text-primary_green" htmlFor="Email">
            Enter email
          </label>
          <input
            className="m-2"
            type="email"
            name="Email"
            id="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <div className="text-red-600 text-md">{formik.errors.Email}</div>
          ) : null}

          <label className="text-primary_green" htmlFor="Username">
            Enter username
          </label>
          <input
            className="m-2"
            type="text"
            name="Username"
            id="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Username}
          />
          {formik.touched.Username && formik.errors.Username ? (
            <div className="text-red-600 text-md">{formik.errors.Username}</div>
          ) : null}

          <label className="text-primary_green" htmlFor="Password">
            Enter password
          </label>
          <input
            className="m-2"
            type="password"
            name="Password"
            id="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Password}
          />
          {formik.touched.Password && formik.errors.Password ? (
            <div className="text-red-600 text-md">{formik.errors.Password}</div>
          ) : null}

          <button
            className="py-[6px] mt-4 px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_green text-black "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("singupPortal")
  );
};

export default SignupPage;
