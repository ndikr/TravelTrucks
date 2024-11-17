import css from "./FilterBlock.module.css";
import Filter from "../Filter/Filter";
import toCamelCase from "../../hooks/toCamelCase";
import { changeForm, changeEquipment } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import clsx from "clsx";
export default function FilterBlock({ title, items }) {
  const dispatch = useDispatch();
  let equipment = {};
  function handleClick(event) {
    switch (title) {
      case "Vehicle equipment":
        equipment = {
          ...equipment,
          [event.target.textContent.toLowerCase()]: true,
        };
        dispatch(changeEquipment(equipment));
        break;
      case "Vehicle type":
        const type = toCamelCase(event.target.textContent.toLowerCase());
        dispatch(changeForm(type));
        break;
      default:
        console.log("err");
    }
  }
  return (
    <>
      <h4 className={css.filterTitle}>{title}</h4>
      <ul className={css.options}>
        {items.map((item, ind) => (
          <label key={ind} className={clsx(css.option)} onClick={handleClick}>
            <input type="checkbox" className={css.checkbox}></input>
            <Filter name={item} size={32}></Filter>
            <span className={css.checkmark}></span>
          </label>
        ))}
      </ul>
    </>
  );
}
