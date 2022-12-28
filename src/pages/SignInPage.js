import React from "react";
import styled from "styled-components";
import { signInImage } from "../asset/login";
import Footer from "../components/footer/Footer";
import SignInForm from "../components/signIn/SignInForm";
import { flexCenter, flexStart } from "../components/layout/className";
import SignUpFooter from "../components/signUp/SignUpFooter";
import FlexColumnCenter from "../components/layout/FlexColumnCenter";
import FlexRowCenter from "../components/layout/FlexRowCenter";

const SignInPage = () => {
  return (
    <FlexColumnCenter type='sign-in'>
      <FlexRowCenter type='sign-in' >
        <LoginImage src={signInImage} />
        <FlexColumnCenter mg={'1rem 0'} wd={'none'} gap={'1rem'}>
          <SignInForm />
          <SignUpFooter isSignIn={true} />
        </FlexColumnCenter>
      </FlexRowCenter>
      <Footer isLogin={true} />
    </FlexColumnCenter>
  );
};

export default SignInPage;

const LoginImage = styled.img`
  width: 41rem;
  height: 60rem;
`;

