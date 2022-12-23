import React from "react";
import styled from "styled-components";

const FlexColumn = ({ children, mg,pd,gap }) => {
  return <StFlexColumn mg={mg} pd={pd} gap={gap}>{children}</StFlexColumn>;
};

export default FlexColumn;

export const StFlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${({mg})=> mg|| '0'};
  padding: ${({pd})=> pd|| '0'};
  gap: ${({gap})=> gap|| '0'};
`;
