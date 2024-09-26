import css from "./CatalogItems.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
export default function CatalogItems({ campers }) {
  return (
    <ul className={css.catalogItemsBlock}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.item}>
          <CatalogItem data={camper}></CatalogItem>
        </li>
      ))}
    </ul>
  );
}
