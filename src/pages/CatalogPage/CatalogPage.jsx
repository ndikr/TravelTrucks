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
import { FaChevronCircleUp } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
      isMounted.current = true;
    }
  }, [dispatch]);
  const [searchFormVisible, setSearchFormVisible] = useState(
    window.innerWidth >= 768
  );
  const [mobileVersion, setMobileVersion] = useState(window.innerWidth < 768);
  //track screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileVersion(true);
      } else {
        setMobileVersion(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [upBtnIsVisible, setUpBtnIsVisible] = useState(false);
  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setUpBtnIsVisible(true);
    } else {
      setUpBtnIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={css.catalog}>
      {mobileVersion && (
        <button
          className={css.filterMenuBtn}
          onClick={() => setSearchFormVisible(!searchFormVisible)}
        >
          {searchFormVisible ? (
            <IoIosCloseCircleOutline size={30} />
          ) : (
            <div className={css.filterMenuIcon}>
              <CiFilter size={30} />
              <p>Filter</p>
            </div>
          )}
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
        </div>
      )}
      {upBtnIsVisible && (
        <button className={css.upBtn} onClick={scrollToTop}>
          <FaChevronCircleUp className={css.upBtnIcon} size={50} />
        </button>
      )}
    </div>
  );
}
