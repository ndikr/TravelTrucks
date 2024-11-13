import css from "./Characteristics.module.css";
import Filter from "../Filter/Filter";

export default function Characteristics({ data }) {
  return (
    <ul className={css.characteristics}>
      {data.automatic && (
        <li className={css.characteristic}>
          <Filter name="Automatic" size={20}></Filter>
        </li>
      )}
      {data.engine && (
        <li className={css.characteristic}>
          <Filter name="Petrol" size={20}></Filter>
        </li>
      )}
      {data.AC && (
        <li className={css.characteristic}>
          <Filter name="AC" size={20}></Filter>
        </li>
      )}
      {data.bathroom && (
        <li className={css.characteristic}>
          <Filter name="Bathroom" size={20}></Filter>
        </li>
      )}
      {data.kitchen && (
        <li className={css.characteristic}>
          <Filter name="Kitchen" size={20}></Filter>
        </li>
      )}
      {data.TV && (
        <li className={css.characteristic}>
          <Filter name="TV" size={20}></Filter>
        </li>
      )}
      {data.radio && (
        <li className={css.characteristic}>
          <Filter name="Radio" size={20}></Filter>
        </li>
      )}
      {data.refrigerator && (
        <li className={css.characteristic}>
          <Filter name="Refrigerator" size={20}></Filter>
        </li>
      )}
      {data.microwave && (
        <li className={css.characteristic}>
          <Filter name="Microwave" size={20}></Filter>
        </li>
      )}
      {data.gas && (
        <li className={css.characteristic}>
          <Filter name="Gas" size={20}></Filter>
        </li>
      )}
      {data.water && (
        <li className={css.characteristic}>
          <Filter name="Water" size={20}></Filter>
        </li>
      )}
    </ul>
  );
}
