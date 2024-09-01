import { BsSuitHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./CatalogItem.module.css";
import { CiMap } from "react-icons/ci";
import Characteristics from "../Characteristics/Characteristics";
export default function CatalogItem({ data }) {
  return (
    <>
      <img
        className={css.itemImg}
        src={data.gallery[0].thumb}
        alt={data.name}
      />
      <div className={css.itemInfo}>
        <div className={css.itemDetails}>
          <div className={css.accentText}>
            <h4 className={css.itemTitle}>{data.name}</h4>
            <p className={css.itemPrice}>
              €{data.price} <BsSuitHeart />
            </p>
          </div>
          <div className={css.additionalText}>
            <p className={css.itemRating}>
              <FaStar color="#FFC531" />
              {data.rating}({data.reviews.length} Reviews)
            </p>
            <p className={css.itemLocation}>
              <CiMap />
              {data.location}
            </p>
          </div>
        </div>

        <p className={css.itemDescription}>{data.description} </p>
        <Characteristics
          data={{
            automatic: data.transmission === "automatic",
            AC: data.AC,
            petrol: data.engine === "petrol",
            kitchen: data.kitchen,
            radio: data.radio,
            bathroom: data.bathroom,
          }}
        ></Characteristics>
        <Link to={`/catalog/${data.id}`} className={css.btn}>
          Show more
        </Link>
      </div>
    </>
  );
}
