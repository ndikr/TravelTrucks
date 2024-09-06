import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      glassColor="#c0efff"
      color="#E44848"
    />
  );
}
