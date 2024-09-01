import CatalogItems from "../../components/CatalogItems/CatalogItems";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
export default function CatalogPage() {
  // const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  const campers = useSelector(selectCampers);
  return (
    <div className={css.catalog}>
      <SearchForm></SearchForm>
      <CatalogItems campers={campers}></CatalogItems>
    </div>
  );
}
