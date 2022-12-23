import React from "react";
import styled from "styled-components";

const FlexRow = ({ children, mg, pd, gap }) => {
  return (
    <StFlexRow mg={mg} pd={pd} gap={gap}>
      {children}
    </StFlexRow>
  );
};

export default FlexRow;

export const StFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: ${({mg})=> mg|| '0'};
  padding: ${({pd})=> pd|| '0'};
  gap: ${({gap})=> gap|| '0'};
`;
