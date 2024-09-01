import { createSlice } from "@reduxjs/toolkit";

// import { fetchCampers, fetchCamperById } from "./operations";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    equipment: {
      automatic: "",
      petrol: "",
      ac: "",
      bathroom: "",
      kitchen: "",
      tv: "",
      radio: "",
      refrigerator: "",
      microwave: "",
      gas: "",
      water: "",
    },
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeForm(state, action) {
      state.form = action.payload;
    },
    changeEquipment(state, action) {
      state.equipment = action.payload;
    },
    clearFilters(state) {
      state.location = "";
      state.form = "";
      state.equipment = {
        automatic: "",
        petrol: "",
        ac: "",
        bathroom: "",
        kitchen: "",
        tv: "",
        radio: "",
        refrigerator: "",
        microwave: "",
        gas: "",
        water: "",
      };
    },
  },
});

export const { changeLocation, changeForm, changeEquipment, clearFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
