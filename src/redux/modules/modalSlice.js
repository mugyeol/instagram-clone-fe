import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const modalSelector = (state) => state.modal;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    __openModal: (state, action) => {
      const { type, props } = action.payload;
      return state.concat({ type, props });
    },
    __closeModal: (state, action) => {
      return state.pop()
    },
  },
});
export const { __openModal, __closeModal } = modalSlice.actions;

export default modalSlice.reducer;
