import css from "./Logo.module.css";
export default function Logo() {
  return (
    <h1 className={css.logo}>
      Travel<span className={css.logoAccent}>Trucks</span>
    </h1>
  );
}
