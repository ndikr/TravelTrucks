import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "fetchCampers",
  async (_, { getState }) => {
    try {
      const filters = getState().filters;
      const params = {
        location: filters.location,
        form: filters.form,
        transmission: filters.equipment.automatic === true ? "automatic" : "",
        engine: filters.equipment.petrol === true ? "petrol" : "",
        AC: filters.equipment.ac,
        bathroom: filters.equipment.bathroom,
        kitchen: filters.equipment.kitchen,
        TV: filters.equipment.tv,
        radio: filters.equipment.radio,
        refrigerator: filters.equipment.refrigerator,
        microwave: filters.equipment.microwave,
        gas: filters.equipment.gas,
        water: filters.equipment.water,
      };
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
