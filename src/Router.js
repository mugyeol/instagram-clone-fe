import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DetailPage from "./pages/DetailPage";
import ListOfHashTag from "./components/tag/ListOfHashTag";
import ModalContainer from "./modal/ModalContainer";
import HashTagPage from "./pages/HashTagPage";
export const PATH = {
  main: "/",
  signIn: "/sign-in",
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
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/hashtag/:tag" element={<HashTagPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
