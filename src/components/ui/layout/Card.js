import React from "react";
import styled, { css } from "styled-components";

function Card (props) {
  const CARD_COMPONENTS = {
    default: StCard,
    sideBar: SideBar,
  };
  const CardWrapper =
    !props.type
      ? StCard
      : CARD_COMPONENTS[props.type];
  return (
    <CardWrapper
      className={props.className}
      wd={props.wd}
      pd={props.pd}
      mg={props.mg}
      hg={props.hg}
      border={props.border}
    >
      {props.children}
    </CardWrapper>
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
const SideBar = styled(StCard)`
  border: none;
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 20px;
  &:hover {
    background-color: var(--ig-secondary-background);
  }
`;
