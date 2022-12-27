import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  props: null,
};
export const modalSelector = (state) => state.modal;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    __openModal: (state, action) => {
      const { type, props } = action.payload;
      state.type = type;
      state.props = props;
    },
    __closeModal: (state, action) => {
      return initialState;
    },
  },
});
export const {__openModal,__closeModal} = modalSlice.actions;

export default modalSlice.reducer;
