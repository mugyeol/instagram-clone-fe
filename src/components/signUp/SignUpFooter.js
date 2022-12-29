import React from "react";

import { appStore, googlePlay } from "../../asset/login";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { StCard } from "../layout/Card";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import FlexRowCenter from "../layout/FlexRowCenter";
import Img from "../elem/Img";

const SignUpFooter = ({ isSignIn }) => {
  const navigate = useNavigate();

  return (
    <StFragment>
      <CardConatiner isUpper={true}>
        <FlexRowCenter pd="2rem 0">
          <div
            className="third-text"
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
            onClick={() => navigate(isSignIn ? "/sign-up" : "/")}
          >
            {isSignIn ? "가입하기" : "로그인"}
          </span>
        </FlexRowCenter>
      </CardConatiner>
      <CardConatiner isUpper={false}>
        <FlexColumnCenter pd={"2rem 0"}>
          <span className="third-text" style={{ marginBottom: "1rem" }}>
            앱을 다운로드 하세요.
          </span>
          <FlexRowCenter gap="0.8rem" direction="row">
            <Img type="store-image" src={googlePlay} />
            <Img type="store-image" src={appStore} />
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
  background-color: ${({ isUpper }) => (isUpper ? "white" : "transparent")};
  border: 1px solid
    ${({ isUpper }) => !isUpper || css`var(--ig-light-theme-separator)`};
`;

const StFragment = styled(FlexColumnCenter)`
  background-color: transparent;
`;
