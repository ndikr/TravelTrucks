import css from "./SearchForm.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import { clearFilters } from "../../redux/filters/slice";
import { fetchCampers } from "./../../redux/campers/operations";
import { setCurrentPage, setEmptyItems } from "../../redux/campers/slice";
import { selectItemsPerPage } from "../../redux/campers/selectors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SearchForm({ cities, setSearchFormVisible }) {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector(selectItemsPerPage);
  return (
    <div className={css.searchFormBlock}>
      <Location cities={cities}></Location>
      <Filters></Filters>
      <div className={css.buttons}>
        <button
          onClick={() => {
            dispatch(setCurrentPage());
            dispatch(setEmptyItems());
            dispatch(fetchCampers({ page: 1, limit: itemsPerPage }));
            setSearchFormVisible(false);
          }}
          className={css.btn}
        >
          Search
        </button>
        <button
          onClick={() => {
            dispatch(clearFilters());
            dispatch(setEmptyItems());
            dispatch(setCurrentPage());
            dispatch(fetchCampers({ page: 1, limit: itemsPerPage }));
            setSearchFormVisible(false);
          }}
          className={css.clearBtn}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
