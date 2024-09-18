import DatePicker from "react-datepicker";
import css from "./FormikDatePicker.module.css";
const FormikDatePicker = ({ field, form, ...props }) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;
  <div>
    <DatePicker
      className={css.field}
      dateFormat="dd/MM/yyyy"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
    />
  </div>
);
export default FormikDatePicker;
