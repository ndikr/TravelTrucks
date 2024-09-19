import css from "./SearchForm.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import { clearFilters } from "../../redux/filters/slice";
import {
  fetchCampers,
  // fetchFilteredCampers,
} from "./../../redux/campers/operations";
import { setCurrentPage, setEmptyItems } from "../../redux/campers/slice";
import {
  selectCurrentPage,
  selectItemsPerPage,
} from "../../redux/campers/selectors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SearchForm({ cities, setSearchFormVisible }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  console.log(currentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  return (
    <div className={css.searchFormBlock}>
      <Location cities={cities}></Location>
      <Filters></Filters>
      <div>
        <button
          onClick={() => {
            console.log(currentPage);

            dispatch(setCurrentPage());

            dispatch(setEmptyItems());
            console.log(currentPage);
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
            console.log(currentPage);
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
