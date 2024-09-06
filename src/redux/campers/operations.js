import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "fetchCampers",
  async (_, thunkAPI) => {
    try {
      const filters = thunkAPI.getState().filters;
      const params = {
        location: filters.location,
        form: filters.form.toLowerCase(),
        transmission: filters.equipment.automatic === true ? "automatic" : "",
        engine: filters.equipment.petrol === true ? "petrol" : "",
        AC: filters.equipment.ac ? filters.equipment.ac : "",
        bathroom: filters.equipment.bathroom ? filters.equipment.bathroom : "",
        kitchen: filters.equipment.kitchen ? filters.equipment.kitchen : "",
        TV: filters.equipment.tv ? filters.equipment.tv : "",
        radio: filters.equipment.radio ? filters.equipment.radio : "",
        refrigerator: filters.equipment.refrigerator
          ? filters.equipment.refrigerator
          : "",
        microwave: filters.equipment.microwave
          ? filters.equipment.microwave
          : "",
        gas: filters.equipment.gas ? filters.equipment.gas : "",
        water: filters.equipment.water ? filters.equipment.water : "",
      };
      console.log(params);
      const response = await axios.get(`/campers`, { params });
      return response.data.items;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
