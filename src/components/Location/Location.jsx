import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";
import { useDispatch } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { changeLocation } from "../../redux/filters/slice";
export default function Location() {
  const cities = [
    "Ukraine, Poltava",
    "Ukraine, Kyiv",
    "Ukraine, Kharkiv",
    "Ukraine, Odesa",
    "Ukraine, Dnipro",
    "Ukraine, Sumy",
    "Ukraine, Lviv",
  ];
  const dispatch = useDispatch();
  return (
    <div className={css.locationBlock}>
      <h3 className={css.locationTitle}>Location</h3>
      <Autocomplete
        onChange={(e, value) => {
          dispatch(changeLocation(value));
        }}
        options={cities}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            slotProps={{
              textField: {
                variant: "standard",
                fullWidth: true,
                className: `${css.locationChosen}`,
              },
            }}
            {...params}
          />
        )}
      />
      {/* <input
        className={css.locationChosen}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      >
        <CiMap />
      </input> */}
    </div>
  );
}
