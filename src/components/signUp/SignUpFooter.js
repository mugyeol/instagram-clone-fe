import React from "react";
import { Wrap, Stack, Img, Card } from "../ui";

import { appStore, googlePlay } from "../../asset/login";
import { useNavigate } from "react-router-dom";
import styled, {css} from "styled-components";
import { StCard } from "../ui/layout/Card";
import FlexColumnCenter from "../ui/layout/FlexColumnCenter";
import FlexRowCenter from "../ui/layout/FlexRowCenter";
import { colors } from "../ui/color";

const SignUpFooter = ({ isLogin, isSignIn }) => {
  const navigate = useNavigate();

  return (
    <StFragment>
      <CardConatiner isUpper={true}>
        <FlexRowCenter pd="2rem 0">
          <div
            className='third-text'
            style={{ fontWeight: "600", margin: "1rem 0" }}
          >
            계정이 있으신가요?
          </div>
          <span
            style={{
              color: "var(--color-primary)",
              cursor: "pointer",
              marginLeft: "0.5rem",
            }}
            onClick={() => navigate(isSignIn ? "/sign-up" : "/sign-in")}
          >
            {isSignIn ? "가입하기" : "로그인"}
          </span>
        </FlexRowCenter>
      </CardConatiner>
      <CardConatiner isUpper={false}>
        <FlexColumnCenter pd={"2rem 0"}>
          <span
            className='third-text'
            style={{ marginBottom: "1rem" }}
          >
            앱을 다운로드 하세요.
          </span>
          <FlexRowCenter gap="0.8rem" direction="row">
            <Img
              wd="13.5rem"
              hg="4rem"
              style={{ cursor: "pointer" }}
              src={googlePlay}
            />
            <Img
              wd="13.5rem"
              hg="4rem"
              style={{ cursor: "pointer" }}
              src={appStore}
            />
          </FlexRowCenter>
        </FlexColumnCenter>
      </CardConatiner>
    </StFragment>
  );
};

export default SignUpFooter;
const CardConatiner = styled(StCard)`
  width: 36rem;
  padding: 0 4rem;
  background-color: ${({isUpper})=> isUpper ? 'white' : 'transparent'};
  border: 1px solid ${({isUpper})=> !isUpper || css`var(--ig-light-theme-separator)`};
`;

const StFragment = styled(FlexColumnCenter)`
  background-color: transparent;
`;
