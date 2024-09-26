import { equipments } from "../../constants/constants";
import Filter from "../Filter/Filter";
export default function EquipmentFilter() {
  return (
    <ul className={css.options}>
      {equipments.map((equipment, ind) => (
        <li key={ind}>
          <label htmlFor={`checkbox-${ind}`}>
            <input
              id={`checkbox-${ind}`}
              type="checkbox"
              className={css.checkboxInput}
            />
            <span className={css.option}>
              <Filter name={equipment} size={32}></Filter>
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
