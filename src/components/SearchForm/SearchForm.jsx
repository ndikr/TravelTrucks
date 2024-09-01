import css from "./SearchForm.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
export default function SearchForm({ cities }) {
  return (
    <div className={css.searchFormBlock}>
      <Location cities={cities}></Location>
      <Filters></Filters>
    </div>
  );
}
