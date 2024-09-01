import css from "./CatalogItems.module.css";
import { CiMap } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import Filter from "../Filter/Filter";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect } from "react";
import { selectCampers } from "../../redux/campers/selectors";
import { useDispatch, useSelector } from "react-redux";
export default function CatalogItems({ campers }) {
  return (
    <ul className={css.catalogItemsBlock}>
      {campers.length > 0 ? (
        campers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CatalogItem data={camper}></CatalogItem>
          </li>
        ))
      ) : (
        <p>No campers found</p>
      )}
      {/* <li className={css.item}>
        <CatalogItem></CatalogItem>
      </li>
      <li className={css.item}>
        <CatalogItem></CatalogItem>
      </li>
      <li className={css.item}>
        <CatalogItem></CatalogItem>
      </li>
      <li className={css.item}>
        <CatalogItem></CatalogItem>
      </li> */}
    </ul>
  );
}
