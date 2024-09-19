import css from "./SearchForm.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import { clearFilters } from "../../redux/filters/slice";
import {
  fetchCampers,
  // fetchFilteredCampers,
} from "./../../redux/campers/operations";
import {
  selectCurrentPage,
  selectItemsPerPage,
} from "../../redux/campers/selectors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SearchForm({ cities, setSearchFormVisible }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  return (
    <div className={css.searchFormBlock}>
      <Location cities={cities}></Location>
      <Filters></Filters>
      <div>
        <button
          onClick={() => {
            dispatch(
              fetchCampers({ page: currentPage + 1, limit: itemsPerPage })
            );
            // dispatch(fetchCampers({ page: 1, limit: 4 }));
            setSearchFormVisible(false);
          }}
          className={css.btn}
        >
          Search
        </button>
        <button
          onClick={() => {
            dispatch(clearFilters());
            dispatch(
              fetchCampers({ page: currentPage + 1, limit: itemsPerPage })
            );
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
