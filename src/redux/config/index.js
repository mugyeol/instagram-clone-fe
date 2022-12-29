import { configureStore } from "@reduxjs/toolkit";

import signIn from "../modules/signInSlice";
import signUp from "../modules/signUpSlice";
import modal from "../modules/modalSlice";
import data from "../modules/postSlice";

const store = configureStore({
  reducer: {
    signIn,
    signUp,
    modal,
    data,
  },
});

export default store;
