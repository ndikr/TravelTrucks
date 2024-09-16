import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCampers,
  fetchFilteredCampers,
  fetchCamperById,
} from "./operations";

export const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    totalItems: 0,
    currentPage: 0,
    itemsPerPage: 4,
    error: false,
    loading: false,
    favorites: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.totalItems = action.payload.total;
        const newItems = action.payload.items.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem.id === item.id)
        );
        state.items = [...state.items, ...newItems];
        state.currentPage += 1;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
        state.loading = false;
        state.items = [];
      })
      .addCase(fetchFilteredCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.total;
        // const newItems = action.payload.items.filter(
        //   (item) =>
        //     !state.items.some((existingItem) => existingItem.id === item.id)
        // );
        // state.items = [...state.items, ...newItems];
        // state.currentPage += 1;
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.items = [];
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        // state.items = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
  reducers: {
    setFavorite(state, action) {
      state.items = state.items;
      const existingItemIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
});
export const { setFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
