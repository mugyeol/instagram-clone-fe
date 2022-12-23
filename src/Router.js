import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UploadPostModal from "./pages/UploadPostModal";
import MyPage from "./pages/MyPage";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/upload" element={<UploadPostModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
