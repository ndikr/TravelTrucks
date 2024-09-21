import { createAsyncThunk } from "@reduxjs/toolkit";
import handleEquipmentFilter from "../../hooks/handleEquipmentFilter";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "fetchCampers",
  async ({ page, limit }, thunkAPI) => {
    try {
      const filters = handleEquipmentFilter(thunkAPI.getState().filters);
      const response = await axios.get(`/campers`, {
        params: {
          page,
          limit,
          ...filters,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCamperById = createAsyncThunk(
  "fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
