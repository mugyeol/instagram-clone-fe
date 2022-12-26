import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddPostModal from "./pages/AddPostModal";
import MyPage from "./pages/MyPage";
import DetailPage from './pages/DetailPage';

export const PATH = {
  main:'/',
  signIn:'/signin',
  signUp:'/signup',
  upload:'/upload',
  detail:'/detail/',
  mypage:'/mypage/'
}


const Router = () => {
  return (
    <>
      <BrowserRouter>
      {/* <AddPostModal/> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/upload" element={<AddPostModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
