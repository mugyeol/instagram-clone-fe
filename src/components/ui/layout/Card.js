import React from "react";
import styled, { css } from "styled-components";

const Card = (props) => {
  return (
    <StCard
      className={props.className}
      wd={props.wd}
      pd={props.pd}
      mg={props.mg}
      hg={props.hg}
      border={props.border}
    >
      {props.children}
    </StCard>
  );
};

export default Card;
export const StCard = styled.div`
  border: ${({ border }) => border || "none"};
  width: ${({ wd }) => wd || "48rem"};
  height: ${({ hg }) => hg || "none"};
  padding: ${({ pd }) => pd || "0"};
  margin: ${({ mg }) => mg || "0"};
  border-radius: 5px;
`;
