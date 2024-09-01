import css from "./Filters.module.css";
import FilterBlock from "../FilterBlock/FilterBlock";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./../../redux/campers/operations";
import { clearFilters } from "../../redux/filters/slice";
export default function Filters() {
  const dispatch = useDispatch();
  return (
    <div className={css.filtersBlock}>
      <h3 className={css.title}>Filters</h3>
      <ul className={css.filters}>
        <li className={css.filter}>
          <FilterBlock
            title="Vehicle equipment"
            items={[
              "Automatic",
              "Petrol",
              "AC",
              "Bathroom",
              "Kitchen",
              "TV",
              "Radio",
              "Refrigerator",
              "Microwave",
              "Gas",
              "Water",
            ]}
          ></FilterBlock>
        </li>

        <FilterBlock
          title="Vehicle type"
          items={["Van", "Fully Integrated", "Alcove"]}
        ></FilterBlock>
      </ul>
      <button onClick={() => dispatch(fetchCampers())} className={css.btn}>
        Search
      </button>
      <button
        onClick={() => {
          dispatch(clearFilters());
          dispatch(fetchCampers());
        }}
        className={css.clearBtn}
      >
        Clear filters
      </button>
    </div>
  );
}
