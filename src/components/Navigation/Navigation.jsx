import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectLoginStatus } from "../../redux/auth/selectors";
export default function Navigation({ mobMenuMod }) {
  // const isLoggedIn = useSelector(selectLoginStatus);
  return mobMenuMod ? (
    <div>
      <ul className={css.mobNavigation}>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </div>
  ) : (
    <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
