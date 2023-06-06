import React, { useEffect, useReducer, useRef } from "react";
import "./ContactForm.css";
import { useFormik } from "formik";

import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const form = useRef();
  const sendEmail = () => {

    emailjs
      .sendForm(
        "service_729iroo",
        "template_tburxbh",
        form.current,
        "1iv3kJd6txueSQc94"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 25) {
      errors.name = "Name must be less than 25 characters.";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (
      values.phoneNumber &&
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!values.request) {
      errors.request = "Required";
    } else if (values.request.split(" ").length > 500) {
      errors.request = "Minimum 500 characters.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      sendEmail();
    },
  });

  const valid = () => {
    if (
      formik.values.name &&
      formik.values.email &&
      formik.values.request &&
      Object.keys(formik.errors).length === 0
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className="contactForm">
      <form onSubmit={formik.handleSubmit} ref={form}>
        <div className="formElement">
          <input
            placeholder="Name"
            type="text"
            id="name"
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="formElement">
          <input
            placeholder="Email"
            type="email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="formElement">
          <input
            placeholder="Phone(optional)"
            type="tel"
            id="phoneNumber"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <div className="error">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div className="formElement">
          <textarea
            placeholder="Request"
            id="request"
            cols="30"
            rows="10"
            {...formik.getFieldProps("request")}
          ></textarea>
          {formik.errors.request && formik.touched.request ? (
            <div className="error">{formik.errors.request}</div>
          ) : null}
        </div>
        <button className="button" type="submit" disabled={!valid()}>
          Submit
        </button>
      </form>
    </div>
  );
}
