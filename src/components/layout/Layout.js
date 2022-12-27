import React from "react";
import styled from "styled-components";
import FlexRowCenter from "./FlexRowCenter";
import SideBar from "../sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <FlexRowCenter align="flex-start" justify='flex-start'>
      <SideBar />
      <Wrapper>{children}</Wrapper>
    </FlexRowCenter>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem;
  height: 100vh;
  overflow-y:scroll;
  background-color: var(--ig-secondary-background);
`;
