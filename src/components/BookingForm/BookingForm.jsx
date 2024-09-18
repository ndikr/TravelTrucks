import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as Yup from "yup";
import FormikDatePicker from "../FormikDatePicker/FormikDatePicker";
import { clsx } from "clsx";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";

import { useState } from "react";

export default function BookingForm() {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    email: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    bookingDate: Yup.string().required("Required"),
    comment: Yup.string(),
  });
  function handleSubmit(values, actions) {
    console.log(values);
    toast("Successfully booked");
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            <Field
              className={css.field}
              placeholder={"Name*"}
              type="text"
              name="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>

          <label className={css.label} htmlFor="email">
            <Field
              className={css.field}
              placeholder={"Email*"}
              type="text"
              name="email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <label className={css.label} htmlFor="bookingDate">
            <DatePicker
              showIcon
              minDate={new Date()}
              className={css.field}
              selected={values.bookingDate} // Bind Formik's field value
              onChange={(date) =>
                setFieldValue(
                  "bookingDate",
                  date ? date.toISOString().split("T")[0] : ""
                )
              } // Update Formik field
              placeholderText="Booking date"
            />
            <ErrorMessage
              className={css.error}
              name="bookingDate"
              component="span"
            />
          </label>

          <label className={css.label} htmlFor="comment">
            <Field
              className={clsx(css.field, css.comment)}
              placeholder={"Comment"}
              type="text"
              name="comment"
            />
            <ErrorMessage
              className={css.error}
              name="comment"
              component="span"
            />
          </label>

          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>

    // </LocalizationProvider>
  );
}
