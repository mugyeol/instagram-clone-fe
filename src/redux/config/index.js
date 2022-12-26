import { configureStore } from "@reduxjs/toolkit";

import signIn from "../modules/signInSlice";
import signUp from '../modules/signUpSlice'

const store = configureStore({
  reducer: {
    signIn,
    signUp
  },
});

export default store;
