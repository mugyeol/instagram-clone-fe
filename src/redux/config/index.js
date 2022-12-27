import { configureStore } from "@reduxjs/toolkit";

import signIn from "../modules/signInSlice";
import signUp from '../modules/signUpSlice'
import modal from '../modules/modalSlice'

const store = configureStore({
  reducer: {
    signIn,
    signUp,
    modal
  },
});

export default store;
