import css from "./CamperInfo.module.css";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import ImagesGallery from "../ImagesGallery/ImagesGallery";

export default function CamperInfo({
  data,
  openReviews,
  handleScrollToReviews,
}) {
  function handleReviewsClick() {
    openReviews();
    handleScrollToReviews();
  }

  return (
    Object.keys(data).length !== 0 && (
      <div className={css.info}>
        <div className={css.mainInfo}>
          <h2 className={css.title}>{data.name}</h2>
          <div className={css.additionalText}>
            <p className={css.rating} onClick={handleReviewsClick}>
              <FaStar color="#FFC531" />
              {data.rating}({data.reviews.length} Reviews)
            </p>
            <p className={css.location}>
              <CiMap />
              {data.location}
            </p>
          </div>
          <p className={css.price}>€{data.price},00</p>
        </div>
        <ImagesGallery images={data.gallery} name={data.name}></ImagesGallery>
        <p className={css.description}>{data.description}</p>
      </div>
    )
  );
}
