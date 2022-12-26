import React from "react";
import styled from "styled-components";
import { signInImage } from "../asset/login";
import Footer from "../components/footer/Footer";
import SignUpForm from "../components/signUp/SignUpForm";
import { flexCenter, flexStart } from "../components/ui/layout/className";
import SignUpFooter from "../components/signUp/SignUpFooter";
import FlexColumnCenter from "../components/ui/layout/FlexColumnCenter";

const SignUpPage = () => {
  return (
    <LoginFlexColumn>
      <LoginFlexRow >
        <LoginImage src={signInImage} />
        <FlexColumnCenter mg={'4rem 0'} wd={'none'} gap={'1rem'}>
          <SignUpForm />
          <SignUpFooter isSignIn={false} />
        </FlexColumnCenter>
      </LoginFlexRow>
      <Footer isLogin={true} />
    </LoginFlexColumn>
  );
};

export default SignUpPage;

const LoginImage = styled.img`
  width: 41rem;
  height: 60rem;
  margin-top: 7rem;
`;
const LoginFlexColumn = styled.div`
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--ig-light-theme-background); ;
`;
const LoginFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  flex: 1;
`;
