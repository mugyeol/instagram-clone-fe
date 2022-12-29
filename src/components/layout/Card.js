import React from "react";
import styled, { css } from "styled-components";

function Card (props) {
  const CARD_COMPONENTS = {
    default: StCard,
    sideBarItem: SideBarItem,
    post:Post
  };
  const CardWrapper =
    !props.type
      ? StCard
      : CARD_COMPONENTS[props.type];
  return (
    <CardWrapper
      {...props}
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
const SideBarItem = styled(StCard)`
  border: none;
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: var(--ig-secondary-background);
  }
`;
const Post = styled(StCard)`

  background-color: var(--ig-primary-background);
  `
