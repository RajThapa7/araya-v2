import { createSlice } from "@reduxjs/toolkit";
import React from "react";

interface InitialState {
  modalBody: React.ReactNode;
  isModalOpen: boolean;
}

const initialState: InitialState = {
  isModalOpen: false,
  modalBody: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = !state.isModalOpen;
      state.modalBody = action.payload.content;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalBody = null;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
