import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { changeLocation } from "../../redux/filters/slice";
import { cities } from "../../constants/constants";
import InputAdornment from "@mui/material/InputAdornment";
import { selectLocation } from "../../redux/filters/selectors";
export default function Location() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  return (
    <div className={css.locationBlock}>
      <h3 className={css.locationTitle}>Location</h3>
      <Autocomplete
        onChange={(e, value) => {
          dispatch(changeLocation(value));
        }}
        options={cities}
        getOptionLabel={(option) => option}
        value={location}
        renderInput={(params) => (
          <TextField
            slotProps={{
              textField: {
                variant: "standard",
                fullWidth: true,
                className: `${css.locationChosen}`,
              },
              // input: <CiMap />,
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
