import React from "react";
import styled from "styled-components";
import { signInImage } from "../asset/login";
import Footer from "../components/footer/Footer";
import SignUpForm from "../components/signUp/SignUpForm";
import SignUpFooter from "../components/signUp/SignUpFooter";
import FlexColumnCenter from "../components/layout/FlexColumnCenter";
import FlexRowCenter from "../components/layout/FlexRowCenter";

const SignUpPage = () => {
  return (
    <FlexColumnCenter type='sign-up'>
      <FlexRowCenter type='sign-up' >
        <LoginImage src={signInImage} />
        <FlexColumnCenter mg={'4rem 0'} wd={'none'} gap={'1rem'}>
          <SignUpForm />
          <SignUpFooter isSignIn={false} />
        </FlexColumnCenter>
      </FlexRowCenter>
      <Footer isLogin={true} />
    </FlexColumnCenter>
  );
};

export default SignUpPage;

const LoginImage = styled.img`
  width: 41rem;
  height: 60rem;
`;

