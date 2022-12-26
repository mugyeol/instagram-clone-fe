import React from "react";
import FlexColumn from "../ui/layout/FlexColumn";
import Card, { StCard } from "../ui/layout/Card";
import styled from "styled-components";

const SignIn = () => {
  return (
    <FlexColumn>
      <Card pd={"1rem"} wd={"40rem"}>
        <StTitle>Instagram</StTitle>

      </Card>
    </FlexColumn>
  );
};

export default SignIn;

const MyCard = styled(StCard)`
  width: 40rem;
  padding: 1rem;
  border: 1px solid var(--ig-third-text);





`;

const StTitle = styled.h1`
  font-size: 2.3rem;
  margin: 3rem;
  font-weight: 900;
`;
