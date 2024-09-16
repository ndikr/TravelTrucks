import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { BsSuitHeart } from "react-icons/bs";
export default function Navigation({ mobMenuMod, toggleMobMenu }) {
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
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/favorites"
            onClick={() => toggleMobMenu(false)}
          >
            {mobMenuMod ? "Favorites" : <BsSuitHeart size="25px" />}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
