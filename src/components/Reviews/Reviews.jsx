import css from "./Reviews.module.css";
import Rating from "../Rating/Rating";
export default function Reviews({ reviews }) {
  return (
    <ul className={css.reviews}>
      {reviews.length > 0 ? (
        reviews.map((review, ind) => (
          <li className={css.review} key={ind}>
            <div className={css.author}>
              <div className={css.avatar}>{review.reviewer_name[0]}</div>
              <div>
                <h5 className={css.authorName}>{review.reviewer_name}</h5>
                <Rating rating={review.reviewer_rating}></Rating>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
