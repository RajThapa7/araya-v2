import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlist/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: wishlistReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
