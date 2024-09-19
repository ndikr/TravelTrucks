import css from "./Error.module.css";
export default function Error({ error }) {
  console;
  return (
    // <p className={css.error}>Opps..Something went wrong. Please try again ❌</p>
    <p className={css.error}>
      {error === "Request failed with status code 404"
        ? "No campers found, please change your filters"
        : "Opps..Something went wrong. Please try again ❌"}
    </p>
  );
}
