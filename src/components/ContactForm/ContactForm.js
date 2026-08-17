import React, { useRef, useState } from "react";
import "./ContactForm.css";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Enter your name.";
    } else if (values.name.length > 25) {
      errors.name = "Name must be 25 characters or fewer.";
    }

    if (!values.email) {
      errors.email = "Enter your email address.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Enter a valid email address.";
    }

    if (
      values.phoneNumber &&
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = "Enter a valid phone number.";
    }

    if (!values.request) {
      errors.request = "Enter a message.";
    } else if (values.request.trim().split(/\s+/).length > 500) {
      errors.request = "Message must be 500 words or fewer.";
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
    onSubmit: (values, helpers) => {
      setStatus("sending");
      emailjs
        .sendForm(
          "service_729iroo",
          "template_tburxbh",
          form.current,
          "1iv3kJd6txueSQc94"
        )
        .then(
          () => {
            setStatus("success");
            helpers.resetForm();
          },
          () => {
            setStatus("error");
          }
        )
        .finally(() => {
          helpers.setSubmitting(false);
        });
    },
  });

  const showError = (field) =>
    formik.errors[field] && (formik.touched[field] || formik.submitCount > 0);

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <div className="contactInner">
        <h1 id="contact-heading" className="contactHeading">
          Contact
        </h1>
        <div className="contactPanel">
          <h2>Message</h2>
          <p className="contactLead">
            Send a note using the form below. I read every message.
          </p>
        <form
          className="contactForm"
          onSubmit={formik.handleSubmit}
          ref={form}
          noValidate
        >
          <div className="contactField">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              aria-invalid={showError("name") ? "true" : "false"}
              aria-describedby={showError("name") ? "name-error" : undefined}
              {...formik.getFieldProps("name")}
            />
            {showError("name") ? (
              <p id="name-error" className="contactError" role="alert">
                {formik.errors.name}
              </p>
            ) : null}
          </div>
          <div className="contactField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              aria-invalid={showError("email") ? "true" : "false"}
              aria-describedby={showError("email") ? "email-error" : undefined}
              {...formik.getFieldProps("email")}
            />
            {showError("email") ? (
              <p id="email-error" className="contactError" role="alert">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="contactField">
            <label htmlFor="phoneNumber">Phone (optional)</label>
            <input
              type="tel"
              id="phoneNumber"
              autoComplete="tel"
              aria-invalid={showError("phoneNumber") ? "true" : "false"}
              aria-describedby={
                showError("phoneNumber") ? "phone-error" : undefined
              }
              {...formik.getFieldProps("phoneNumber")}
            />
            {showError("phoneNumber") ? (
              <p id="phone-error" className="contactError" role="alert">
                {formik.errors.phoneNumber}
              </p>
            ) : null}
          </div>
          <div className="contactField">
            <label htmlFor="request">Message</label>
            <textarea
              id="request"
              rows="8"
              aria-invalid={showError("request") ? "true" : "false"}
              aria-describedby={
                showError("request") ? "request-error" : undefined
              }
              {...formik.getFieldProps("request")}
            />
            {showError("request") ? (
              <p id="request-error" className="contactError" role="alert">
                {formik.errors.request}
              </p>
            ) : null}
          </div>
          <button
            className="contactSubmit"
            type="submit"
            disabled={formik.isSubmitting || status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
          <p className="contactStatus" role="status" aria-live="polite">
            {status === "success"
              ? "Message sent."
              : status === "error"
                ? "Message could not be sent. Try again."
                : ""}
          </p>
        </form>
        </div>
      </div>
    </section>
  );
}
