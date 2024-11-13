import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { BsSuitHeart } from "react-icons/bs";
export default function Navigation({ mobMenuMod, setMobMenuOpen }) {
  return (
    <nav>
      <ul className={mobMenuMod ? css.mobNavigation : css.navigation}>
        <li className={css.navLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
            onClick={() => setMobMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
            onClick={() => setMobMenuOpen(false)}
          >
            Catalog
          </NavLink>
        </li>
        <li className={css.navLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/favorites"
            onClick={() => setMobMenuOpen(false)}
          >
            {mobMenuMod ? "Favorites" : <BsSuitHeart size="25px" />}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
