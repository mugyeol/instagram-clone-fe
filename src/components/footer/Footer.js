import React from "react";
import FlexRow from "../ui/layout/FlexRow";
import styled, { css } from "styled-components";
import FlexColumn from "../ui/layout/FlexColumn";
import { flexCenter } from "../ui/layout/className";

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
    <FlexColumn gap={'2rem'} justify={flexCenter} align={flexCenter}>
      <FlexRow gap={'2rem'} justify={flexCenter} align={flexCenter}>
        {arr1.map((el) => (
          <StSpan>{el}</StSpan>
        ))}
      </FlexRow>
      <FlexRow gap={'2rem'} justify={flexCenter} align={flexCenter}>
        {arr2.map((el) => (
          <StSpan>{el}</StSpan>
        ))}
      </FlexRow>
    </FlexColumn>
  );
};

export default Footer;

const StSpan = styled.div`
  font-size: 1.2rem;
  color: ${({ isLogin }) =>
    isLogin ? css`var(--ig-light-theme-text)` : css`var(--ig-third-text)`};
    font-weight:400;
`;
