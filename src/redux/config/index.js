import { configureStore } from "@reduxjs/toolkit";

import signIn from "../modules/signInSlice";
import signUp from "../modules/signUpSlice";
import modal from "../modules/modalSlice";
import post from "../modules/postSlice";
import detail from '../modules/detailSlice'
import user from '../modules/userSlice'
import hashTag from '../modules/hashSlice'

const store = configureStore({
  reducer: {
    signIn,
    signUp,
    modal,
    post,
    detail,
    user,
    hashTag
  },
});

export default store;
