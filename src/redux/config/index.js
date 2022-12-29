import { configureStore } from "@reduxjs/toolkit";

import signIn from "../modules/signInSlice";
import signUp from "../modules/signUpSlice";
import modal from "../modules/modalSlice";
import insta from "../modules/postSlice";
import detail from '../modules/detailSlice'
import user from '../modules/userSlice'

const store = configureStore({
  reducer: {
    signIn,
    signUp,
    modal,
    insta,
    detail,
    user
  },
});

export default store;
