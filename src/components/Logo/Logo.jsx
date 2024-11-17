import css from "./Logo.module.css";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to={"/"} className={css.logo}>
      Travel<span className={css.logoAccent}>Trucks</span>
    </Link>
  );
}
