import React from "react";
import styled from "styled-components";

const LoginLayout = ({ children }) => {
  return (
      <Wrapper>{children}</Wrapper>
  );
};

export default LoginLayout;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--ig-third-background);
`;
