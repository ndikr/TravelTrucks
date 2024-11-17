import css from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import {
  selectFavorites,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div className={css.page}>
      {isError ? (
        <Error></Error>
      ) : isLoading ? (
        <Loader></Loader>
      ) : favorites.length > 0 ? (
        <ul className={css.list}>
          {favorites.map((item) => (
            <li key={item.id} className={css.item}>
              <CatalogItem data={item}></CatalogItem>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites are chosen</p>
      )}
    </div>
  );
}
