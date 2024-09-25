import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { TiThMenu } from "react-icons/ti";
// import AuthNav from "../AuthNav/AuthNav";
// import UserMenu from "../UserMenu/UserMenu";
// import { selectLoginStatus } from "../../redux/auth/selectors";
import css from "./Header.module.css";
// import { useSelector } from "react-redux";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
export default function Header() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  console.log(mobMenuOpen);
  // const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <header className={css.header}>
      <button className={css.btn} onClick={() => setMobMenuOpen(true)}>
        <TiThMenu />
      </button>
      <Logo></Logo>
      {!mobMenuOpen && (
        <Navigation
        // mobMenuMod={mobMenuOpen}
        // toggleMobMenu={setMobMenuOpen}
        ></Navigation>
      )}

      <MobMenu
        mobMenuOpen={mobMenuOpen}
        setMobMenuOpen={setMobMenuOpen}
      ></MobMenu>
      {/* {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>} */}
    </header>
  );
}
