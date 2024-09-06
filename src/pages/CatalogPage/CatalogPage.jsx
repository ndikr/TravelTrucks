import CatalogItems from "../../components/CatalogItems/CatalogItems";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { selectLoading, selectError } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
export default function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  // const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  const campers = useSelector(selectCampers);
  return (
    <div className={css.catalog}>
      <SearchForm></SearchForm>
      <div className={css.catalogContent}>
        {isLoading ? (
          <Loader></Loader>
        ) : isError ? (
          <Error></Error>
        ) : (
          <CatalogItems campers={campers}></CatalogItems>
        )}
      </div>
    </div>
  );
}
