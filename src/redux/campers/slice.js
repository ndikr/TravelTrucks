import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers, fetchCamperById } from "./operations";

export const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    totalItems: 0,
    currentPage: 0,
    itemsPerPage: 4,
    error: false,
    loading: false,
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
});

export const campersReducer = campersSlice.reducer;
