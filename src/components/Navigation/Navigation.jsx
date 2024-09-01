import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectLoginStatus } from "../../redux/auth/selectors";
export default function Navigation() {
  // const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
