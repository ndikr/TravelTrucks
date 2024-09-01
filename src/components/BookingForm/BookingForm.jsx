import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as Yup from "yup";
import FormikDatePicker from "../FormikDatePicker/FormikDatePicker";
import { clsx } from "clsx";
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
    actions.resetForm();
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            placeholder={"Name*"}
            type="text"
            name="name"
          ></Field>
          {/* <ErrorMessage className={css.error} name="name" component="span" /> */}
          <Field
            className={css.field}
            placeholder={"Email*"}
            type="text"
            name="email"
          ></Field>
          {/* <ErrorMessage className={css.error} name="name" component="span" /> */}
          <Field
            // className={css.field}
            name="bookingDate"
            component={FormikDatePicker}
            // fullWidth
          />

          {/* <ErrorMessage className={css.error} name="name" component="span" /> */}
          <Field
            className={clsx(css.field, css.comment)}
            placeholder={"Comment"}
            type="text"
            name="comment"
          ></Field>
          {/* <ErrorMessage className={css.error} name="number" component="span" /> */}
          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </LocalizationProvider>
  );
}
