import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "./date-picker.css";

export default function FormikDatePicker({ field, form, ...props }) {
  const { setFieldValue } = form;
  const { name, value } = field;
  return (
    <DatePicker
      value={value ? dayjs(value) : null} // Convert to dayjs object if a value exists
      onChange={(date) =>
        setFieldValue(name, date ? date.format("YYYY-MM-DD") : null)
      }
      slotProps={{
        textField: {
          variant: "standard",
          // fullWidth: true,
          className: "customDatePicker",
          placeholder: "Booking date*",
        },
      }}
    />
  );
}
