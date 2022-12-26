import { createSlice } from "@reduxjs/toolkit";
import { isValidId, isValidPassword } from "../../components/signIn/funcs";

const initialState = {
  username: { value: "", isValid: false },
  password: { value: "", isValid: false },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    __typeUsername: (state, action) => {
      state.username.value = action.payload;
      state.username.isValid = isValidId(action.payload);
    },
    __typePassword: (state, action) => {
      state.password.value = action.payload;
      state.password.isValid = isValidPassword(action.payload);
    },
    __showPwd: (state, action) => {
      state.password.isShown = !state.password.isShown;
    },
    __cleanUp: (state, action) => {
      state.username = initialState.username;
      state.password = initialState.password;
    },
  },
});
export const { __typeUsername, __typePassword, __showPwd, __cleanUp } =
  signInSlice.actions;

export default signInSlice.reducer;
