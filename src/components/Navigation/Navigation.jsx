import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectLoginStatus } from "../../redux/auth/selectors";
export default function Navigation({ mobMenuMod, toggleMobMenu }) {
  // const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <nav>
      <ul className={mobMenuMod ? css.mobNavigation : css.navigation}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
            onClick={() => toggleMobMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
            onClick={() => toggleMobMenu(false)}
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
