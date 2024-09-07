import CatalogItems from "../../components/CatalogItems/CatalogItems";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { selectLoading, selectError } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
export default function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const campers = useSelector(selectCampers);

  // const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  const [searchFormVisible, setSearchFormVisible] = useState(
    window.innerWidth >= 768
  );
  const [mobileVersion, setMobileVersion] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileVersion(true);
      } else {
        setMobileVersion(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={css.catalog}>
      {mobileVersion && (
        <button
          className={css.filterMenuBtn}
          onClick={() => setSearchFormVisible(!searchFormVisible)}
        >
          {searchFormVisible ? "close" : "filter"}
        </button>
      )}
      {!mobileVersion ||
        (searchFormVisible && (
          <SearchForm setSearchFormVisible={setSearchFormVisible}></SearchForm>
        ))}
      {searchFormVisible && (
        <SearchForm setSearchFormVisible={setSearchFormVisible}></SearchForm>
      )}
      {!searchFormVisible && (
        <div className={css.catalogContent}>
          {isLoading ? (
            <Loader></Loader>
          ) : isError ? (
            <Error></Error>
          ) : (
            <CatalogItems campers={campers}></CatalogItems>
          )}
        </div>
      )}
    </div>
  );
}
