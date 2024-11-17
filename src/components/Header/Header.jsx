import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { TiThMenu } from "react-icons/ti";
import css from "./Header.module.css";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
export default function Header() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <button className={css.btn} onClick={() => setMobMenuOpen(true)}>
        <TiThMenu />
      </button>
      <Logo></Logo>
      {!mobMenuOpen && <Navigation></Navigation>}
      <MobMenu
        mobMenuOpen={mobMenuOpen}
        setMobMenuOpen={setMobMenuOpen}
      ></MobMenu>
    </header>
  );
}
