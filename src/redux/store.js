import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const campersConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};
const filtersConfig = {
  key: "filter",
  storage,
};
const persistedCampersReducer = persistReducer(campersConfig, campersReducer);
const persistedFiltersReducer = persistReducer(filtersConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
