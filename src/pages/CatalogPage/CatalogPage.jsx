import CatalogItems from "../../components/CatalogItems/CatalogItems";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import {
  selectCampers,
  selectTotal,
  selectCurrentPage,
  selectItemsPerPage,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import handleEquipmentFilter from "../../hooks/handleEquipmentFilter";
export default function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const campers = useSelector(selectCampers);

  const totalItems = useSelector(selectTotal);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  function handleLoadMore() {
    dispatch(fetchCampers({ page: currentPage + 1, limit: itemsPerPage }));
  }
  useEffect(() => {
    if (!isMounted.current) {
      dispatch(fetchCampers({ page: currentPage + 1, limit: itemsPerPage }));
      isMounted.current = true; // Mark as mounted
    }
  }, [dispatch]);
  // if (!isLoading && campers.length === 0) {
  //   console.log("fetch", isLoading, campers.length);
  //   await dispatch(fetchCampers({ page: currentPage, limit: itemsPerPage }));
  //   console.log("fetch after", isLoading, campers.length);
  // }
  // }, [dispatch]);
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
      {(!mobileVersion || searchFormVisible) && (
        <SearchForm setSearchFormVisible={setSearchFormVisible}></SearchForm>
      )}

      {(!mobileVersion || !searchFormVisible) && (
        <div className={css.catalogContent}>
          {isError ? (
            <Error error={isError}></Error>
          ) : (
            <>
              <CatalogItems campers={campers}></CatalogItems>
              {isLoading && <Loader></Loader>}
              {!isLoading &&
                campers.length !== totalItems &&
                campers.length > 0 && (
                  <button className={css.loadMoreBtn} onClick={handleLoadMore}>
                    Load More
                  </button>
                )}
            </>
          )}
          {/* {isLoading ? (
            <Loader></Loader>
          ) : isError ? (
            <Error></Error>
          ) : (
            <>
              <CatalogItems campers={campers}></CatalogItems>
              
            </>
          )} */}
        </div>
      )}
    </div>
  );
}
