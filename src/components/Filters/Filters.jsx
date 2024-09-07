import css from "./Filters.module.css";
import FilterBlock from "../FilterBlock/FilterBlock";
import { useDispatch } from "react-redux";
import { equipments, forms } from "../../constants/constants";
import Filter from "../Filter/Filter";
import { useState } from "react";
import { selectEquipment, selectForm } from "../../redux/filters/selectors";
import { useSelector } from "react-redux";
import { changeEquipment, changeForm } from "../../redux/filters/slice";
export default function Filters() {
  const dispatch = useDispatch();
  let checkedEquipment = useSelector(selectEquipment);
  let selectedForm = useSelector(selectForm);
  function handleEquipmentChange(equipment) {
    checkedEquipment = {
      ...checkedEquipment,
      [equipment.toLowerCase()]: !checkedEquipment[equipment.toLowerCase()],
    };
    dispatch(changeEquipment(checkedEquipment));
  }
  function handleFormChange(form) {
    console.log("selected:", selectedForm);
    console.log("form:", form);

    if (selectedForm === form) {
      dispatch(changeForm(""));
    } else {
      dispatch(changeForm(form));
    }
  }
  return (
    <div className={css.filtersBlock}>
      <h3 className={css.title}>Filters</h3>

      <ul className={css.filters}>
        <li className={css.filter}>
          <h4 className={css.filterTitle}>Vehicle equipment</h4>

          <ul className={css.options}>
            {equipments.map((equipment, ind) => (
              <li key={ind}>
                <label htmlFor={`checkbox-${ind}`}>
                  <input
                    id={`checkbox-${ind}`}
                    type="checkbox"
                    checked={checkedEquipment[equipment]}
                    // checked={checkedEquipment.contain(equipment)}
                    onChange={() => handleEquipmentChange(equipment)}
                    className={css.checkboxInput}
                  />
                  <span className={css.option}>
                    <Filter name={equipment} size={32}></Filter>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </li>
        <li className={css.filter}>
          <h4 className={css.filterTitle}>Vehicle type</h4>

          <ul className={css.options}>
            {forms.map((form, ind) => (
              <li key={ind}>
                <label htmlFor={`radiobutton-${ind}`}>
                  <input
                    id={`radiobutton-${ind}`}
                    type="radio"
                    name="form"
                    value={form}
                    checked={selectedForm === form}
                    onChange={() => handleFormChange(form)}
                    onClick={() => handleFormChange(form)}
                    className={css.radioInput}
                  />
                  <span className={css.option}>
                    <Filter name={form} size={32}></Filter>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
