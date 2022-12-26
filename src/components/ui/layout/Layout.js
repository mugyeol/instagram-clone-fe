import React from "react";
import styled from "styled-components";
import FlexRow, { StFlexRow } from "../../ui/layout/FlexRow";
import SideBar from "../../sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <FlexRow align="flex-start">
      <SideBar />
      <Wrapper>{children}</Wrapper>
    </FlexRow>
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
