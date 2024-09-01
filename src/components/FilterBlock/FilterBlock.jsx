import css from "./FilterBlock.module.css";
import Filter from "../Filter/Filter";
import toCamelCase from "../../hooks/toCamelCase";
import { changeForm, changeEquipment } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import clsx from "clsx";
export default function FilterBlock({ title, items }) {
  const dispatch = useDispatch();
  let equipment = {};
  // const [checkedItems, setCheckedItems] = useState([]);

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
          <li key={ind} className={clsx(css.option)} onClick={handleClick}>
            <Filter name={item} size={32}></Filter>
          </li>
        ))}
      </ul>
    </>
  );
}
