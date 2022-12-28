import React from "react";
import styled, { css } from "styled-components";
import FlexRowCenter from "../layout/FlexRowCenter";
import FlexColumnCenter from "../layout/FlexColumnCenter";
const Footer = ({ isLogin }) => {
  const arr1 = [
    "Meta",
    "소개",
    "블로그",
    "채용 정보",
    "API",
    "개인정보처리방침",
    "약관",
    "인기 계정",
    "위치",
    "Instagram Lite",
    "연락처 업로드 & 비사용자",
  ];
  const arr2 = ["한국어", "© 2022 Instagram from Meta"];
  return (
    <FlexColumnCenter gap={"2rem"}>
      <FlexRowCenter gap={"2rem"}>
        {arr1.map((el) => (
          <StSpan>{el}</StSpan>
        ))}
      </FlexRowCenter>
      <FlexRowCenter gap={"2rem"}>
        {arr2.map((el) => (
          <StSpan>{el}</StSpan>
        ))}
      </FlexRowCenter>
    </FlexColumnCenter>
  );
};

export default Footer;

const StSpan = styled.div`
  font-size: 1.2rem;
  color: ${({ isLogin }) =>
    isLogin ? css`var(--ig-light-theme-text)` : css`var(--ig-third-text)`};
  font-weight: 400;
`;
