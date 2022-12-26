import React from "react";
import styled, { css } from "styled-components";

const SecondaryButton = (props) => {
  const onClickHandler = (e) => {
    props.onClick(e);
  };

  return (
    <StSecondaryBtn
      fontSize={props.fontSize}
      name={props.name}
      type={props.type || "button"}
      onClick={onClickHandler}
      mg={props.mg}
    >
      {props.children}
    </StSecondaryBtn>
  );
};

export default SecondaryButton;
const StSecondaryBtn = styled.button`
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  border-radius: 5px;
  padding: 0.5rem 1.25rem;
  margin: ${({ mg }) => mg || "0.5rem"};
  background-color: var(--ig-secondary-button-background);
  color: var(--ig-secondary-text);
  border: none;
  cursor: pointer;
  &:active {
    background: var(--ig-secondary-button-hover);
  }
  &:hover:enabled {
    background: var(--ig-secondary-button-hover);
  }
  &:focus {
    outline: none;
  }
`;
