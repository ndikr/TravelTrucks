import css from "./MobMenu.module.css";
import Navigation from "../Navigation/Navigation";
import clsx from "clsx";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function MobMenu({ mobMenuOpen, setMobMenuOpen }) {
  return (
    <div className={clsx(css.mobMenu, mobMenuOpen && css.mobMenuShow)}>
      <button className={css.closeBtn} onClick={() => setMobMenuOpen(false)}>
        <IoCloseCircleSharp size={30} />
      </button>
      <Navigation
        mobMenuMod={mobMenuOpen}
        setMobMenuOpen={setMobMenuOpen}
      ></Navigation>
    </div>
  );
}
