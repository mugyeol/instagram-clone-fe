import React from "react";
import styled, { css } from "styled-components";

const Card = ({ children, wd, pd, mg, border }) => {
  return (
    <StCard wd={wd} pd={pd} mg={mg} border={border}>
      {children}
    </StCard>
  );
};

export default Card;
const StCard = styled.div`
  border: ${({ border }) => border || "none"};
  width: ${({ wd }) => wd || "52rem"};
  padding: ${({ pd }) => pd || "0"};
  margin: ${({ mg }) => mg || "0"};
`;
