import css from "./CamperInfo.module.css";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
export default function CamperInfo({ data }) {
  return (
    <div className={css.info}>
      <div className={css.mainInfo}>
        <h2 className={css.title}>{data.name}</h2>
        <div className={css.additionalText}>
          <p className={css.rating}>
            <FaStar color="#FFC531" />
            {data.rating}({data.reviews.length} Reviews)
          </p>
          <p className={css.location}>
            <CiMap />
            {data.location}
          </p>
        </div>
        <p className={css.price}>€{data.price}</p>
      </div>
      <ul className={css.images}>
        {data.gallery.length > 0 &&
          data.gallery.map((img, ind) => (
            <li key={ind}>
              <img className={css.img} src={img.thumb}></img>
            </li>
          ))}
      </ul>
      <p className={css.description}>{data.description}</p>
    </div>
  );
}
