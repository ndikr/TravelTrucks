import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { TiThMenu } from "react-icons/ti";
// import AuthNav from "../AuthNav/AuthNav";
// import UserMenu from "../UserMenu/UserMenu";
// import { selectLoginStatus } from "../../redux/auth/selectors";
import css from "./Header.module.css";
// import { useSelector } from "react-redux";
import { useState } from "react";
export default function Header() {
  const [mobMenuOpen, setMobMenuOpen] = useState(null);
  // const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <header className={css.header}>
      <Logo></Logo>
      <Navigation mobMenuMod={mobMenuOpen}></Navigation>
      <button className={css.btn} onClick={() => setMobMenuOpen(!mobMenuOpen)}>
        <TiThMenu />
      </button>

      {/* {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>} */}
    </header>
  );
}
