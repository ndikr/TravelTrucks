import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ data }) {
  return (
    <div className={css.details}>
      <h4 className={css.title}>Vehicle details</h4>
      <ul className={css.detailsList}>
        <li className={css.detail}>
          <p>Form</p>
          <p>{data.form}</p>
        </li>
        <li className={css.detail}>
          <p>Length</p>
          <p>{data.length}</p>
        </li>
        <li className={css.detail}>
          <p>Width</p>
          <p>{data.width}</p>
        </li>
        <li className={css.detail}>
          <p>Height</p>
          <p>{data.height}</p>
        </li>
        <li className={css.detail}>
          <p>Tank</p>
          <p>{data.tank}</p>
        </li>
        <li className={css.detail}>
          <p>Consumption</p>
          <p>{data.consumption}</p>
        </li>
      </ul>
    </div>
  );
}
