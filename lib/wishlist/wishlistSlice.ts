import { createSlice } from "@reduxjs/toolkit";

import { IProductData } from "@/types";

interface InitialState {
  wishlist: IProductData[];
}

const initialState: InitialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.wishlist = action.payload.wishlist;
    },
    addWishlistItem: (state, action) => {
      const newWishlist = action.payload.wishlist;
      //   state.wishlist = [...state.wishlist, newWishlistItem];
      state.wishlist = newWishlist;
    },
    removeWishlistItem: (state, action) => {
      // const removedWishlistId = action.payload.id;
      const newWishlist = action.payload.wishlist;
      state.wishlist = newWishlist;
      // state.wishlist = state.wishlist.filter(
      //   (item) => item._id !== removedWishlistId
      // );
    },
  },
});

export default wishlistSlice.reducer;
export const { setInitialData, addWishlistItem, removeWishlistItem } =
  wishlistSlice.actions;
