import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { setFavorite } from "../../redux/campers/slice";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./CatalogItem.module.css";
import { CiMap } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectFavorites } from "../../redux/campers/selectors";
import Characteristics from "../Characteristics/Characteristics";
export default function CatalogItem({ data }) {
  const dispatch = useDispatch();
  const existingFavorites = useSelector(selectFavorites);
  function checkIfIsFavorite(item) {
    const itemIndex = existingFavorites.findIndex(
      (existingItem) => existingItem.id === item.id
    );
    if (itemIndex !== -1) {
      return true;
    } else {
      return false;
    }
  }
  function handleSettingFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setFavorite(data));

    toast(
      checkIfIsFavorite(data) ? (
        "Removed from favorite"
      ) : (
        <>
          <p>Added!</p>
          <Link to="/favorites">Go to favorites</Link>
        </>
      )
    );
  }
  return (
    <Link className={css.itemCard} to={`/catalog/${data.id}`}>
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
              €{data.price},00{" "}
              <button onClick={handleSettingFavorite}>
                {checkIfIsFavorite(data) ? (
                  <BsSuitHeartFill color="#E44848" />
                ) : (
                  <BsSuitHeart />
                )}
              </button>
            </p>
          </div>
          <div className={css.additionalText}>
            {/* <Link
              to={`/catalog/${data.id}?scrollTo=reviews`}
              className={css.itemRating}
              onClick={(e) => e.stopPropagation()}
            >
              <FaStar color="#FFC531" />
              {data.rating}({data.reviews.length} Reviews)
            </Link> */}
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
            TV: data.TV,
            refrigerator: data.refrigerator,
            microwave: data.microwave,
            gas: data.gas,
            water: data.water,
          }}
        ></Characteristics>
        {/* <p className={css.btn}>Show more</p> */}
      </div>
    </Link>
  );
}
