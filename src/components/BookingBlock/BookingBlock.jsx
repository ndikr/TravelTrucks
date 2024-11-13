import css from "./BookingBlock.module.css";
import BookingForm from "../BookingForm/BookingForm";
export default function BookingBlock() {
  return (
    <div className={css.bookingBlock}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.annotation}>
        Stay connected! We are always ready to help you.
      </p>
      <BookingForm></BookingForm>
    </div>
  );
}
