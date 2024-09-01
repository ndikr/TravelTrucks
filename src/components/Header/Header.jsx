import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
// import AuthNav from "../AuthNav/AuthNav";
// import UserMenu from "../UserMenu/UserMenu";
// import { selectLoginStatus } from "../../redux/auth/selectors";
import css from "./Header.module.css";
// import { useSelector } from "react-redux";
export default function Header() {
  // const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <header className={css.header}>
      <Logo></Logo>
      <Navigation></Navigation>
      {/* {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>} */}
    </header>
  );
}
