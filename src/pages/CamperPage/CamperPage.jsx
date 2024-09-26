import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useRef, Suspense } from "react";
import { useParams } from "react-router-dom";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectSelectedItem,
} from "../../redux/campers/selectors";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useSearchParams } from "react-router-dom";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import css from "./CamperPage.module.css";
import clsx from "clsx";
import BookingBlock from "../../components/BookingBlock/BookingBlock";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import { NavLink } from "react-router-dom";
export default function CamperPage() {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);
  const data = useSelector(selectSelectedItem);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const isDataLoaded = data && Object.keys(data).length > 0; //check if all data is loaded
  const [searchParams, setSearchParams] = useSearchParams();
  const reviewsRef = useRef(null); // Create a ref to the element you want to scroll to
  const [chosenTab, setChosenTab] = useState("features");

  const handleScrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isDataLoaded) {
      const scrollTo = searchParams.get("scrollTo");
      if (scrollTo === "reviews") {
        setChosenTab("reviews");
        handleScrollToReviews();
      }
      searchParams.delete("scrollTo");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, isDataLoaded]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return isDataLoaded ? (
    <div className={css.camperPage}>
      <CamperInfo
        data={data}
        openReviews={() => setChosenTab("reviews")}
        handleScrollToReviews={handleScrollToReviews}
      />
      <ul className={css.switchers}>
        <li
          className={clsx(css.switcher, {
            [css.chosenTab]: chosenTab === "features",
          })}
          onClick={() => setChosenTab("features")}
        >
          Features
        </li>
        <li
          className={clsx(css.switcher, {
            [css.chosenTab]: chosenTab === "reviews",
          })}
          onClick={() => setChosenTab("reviews")}
        >
          Reviews
        </li>
      </ul>
      <div ref={reviewsRef} className={css.switchedContent}>
        {chosenTab === "features" && <Features data={data} />}
        {chosenTab === "reviews" && <Reviews reviews={data.reviews} />}
        <BookingBlock />
      </div>
    </div>
  ) : (
    <Loader />
  );
}
