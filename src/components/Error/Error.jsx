import css from "./Error.module.css";
export default function Error() {
  return (
    <p className={css.error}>Opps..Something went wrong. Please try again ❌</p>
  );
}
