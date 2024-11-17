import css from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
export default function Rating({ rating }) {
  const totalStars = 5;
  return (
    <ul className={css.rating}>
      {[...Array(totalStars)].map((_, index) => (
        <li key={index}>
          <FaStar key={index} color={index < rating ? "#FFC531" : "#F2F4F7"} />
        </li>
      ))}
    </ul>
  );
}
