import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ModalContainer from "./modal/ModalContainer";
import HashTagPage from "./pages/HashTagPage";
export const PATH = {
  main: "/main",
  signIn: "/",
  signUp: "/sign-up",
  upload: "/upload",
  detail: "/detail/",
  mypage: "/mypage/",
  hashtag: "/hashtag",
};


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ModalContainer />
        {/* <AddPostModal/> */}
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/hashtag/:tag" element={<HashTagPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
