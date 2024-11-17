import { createSlice } from "@reduxjs/toolkit";
export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    equipment: {
      automatic: false,
      petrol: false,
      ac: false,
      bathroom: false,
      kitchen: false,
      tv: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
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
        automatic: false,
        petrol: false,
        ac: false,
        bathroom: false,
        kitchen: false,
        tv: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      };
    },
  },
});

export const { changeLocation, changeForm, changeEquipment, clearFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
