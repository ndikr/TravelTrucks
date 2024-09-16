import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useRef, Suspense } from "react";
import { useParams } from "react-router-dom";
import { selectCamperById } from "../../redux/campers/selectors";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import CamperInfo from "../../components/CamperInfo/CamperInfo";
import css from "./CamperPage.module.css";
import clsx from "clsx";
import BookingBlock from "../../components/BookingBlock/BookingBlock";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import { NavLink } from "react-router-dom";
export default function CamperPage() {
  const id = useParams().id;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCamperById(id));
  // }, [dispatch]);
  const data = useSelector((state) => selectCamperById(state, id));
  const [chosenTab, setChosenTab] = useState("features");
  const reviewsRef = useRef(null); // Create a ref to the element you want to scroll to
  const handleScrollToReviews = () => {
    reviewsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the element smoothly
  };

  return (
    <div className={css.camperPage}>
      <CamperInfo
        data={data}
        openReviews={() => setChosenTab("reviews")}
        handleScrollToReviews={handleScrollToReviews}
      ></CamperInfo>
      <ul className={css.switchers}>
        {/* <li>
          <NavLink
            // className={({ isActive }) => {
            //   return isActive && css.active;
            // }}
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) => {
            //   return isActive && css.active;
            // }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li> */}
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
        {chosenTab === "features" && <Features data={data}></Features>}
        {chosenTab === "reviews" && <Reviews reviews={data.reviews}></Reviews>}
        <BookingBlock></BookingBlock>
      </div>
    </div>
  );
}
