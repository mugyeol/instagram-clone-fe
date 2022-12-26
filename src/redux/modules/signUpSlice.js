import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import {
  isValidUsername,
  isValidId,
  isValidPassword,
  isValidNickname,
} from "../../components/signUp/funcs";

//초기 상태값 설정
const initialState = {
  loginId: { value: "", isValid: false },
  username: { value: "", isValid: false },
  nickname: { value: "", isValid: false },
  password: { value: "", isValid: false, isShown: false },
  form: { loginId: "", username: "", nickname: "", password: "" },
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    __cleanUp: (state, action) => {
      state = initialState;
    },
    __submitForm: (state, action) => {
      state.form = action.payload;
    },
    __typeLoginId: (state, action) => {
      state.loginId.value = action.payload;
      state.loginId.isValid = isValidId(action.payload);
    },
    __typeUsername: (state, action) => {
      state.username.value = action.payload;
      state.username.isValid = isValidUsername(action.payload);
    },
    __typeNickname: (state, action) => {
      state.nickname.value = action.payload;
      state.nickname.isValid = isValidNickname(action.payload)
    },
    __typePassword: (state, action) => {
      state.password.value = action.payload;
      state.password.isValid = isValidPassword(action.payload);
    },
    __showPwd: (state, action) => {
      state.password.isShown = !state.password.isShown;
    },
  },
});

export const {
  __cleanUp,
  __showPwd,
  __submitForm,
  __typeLoginId,
  __typeUsername,
  __typeNickname,
  __typePassword,
} = signUpSlice.actions;

export default signUpSlice.reducer;
