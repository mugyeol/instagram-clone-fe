import React from "react";
import styled, { css } from "styled-components";

const PrimaryButton = (props) => {
  const onClickHandler = (e) => {
    // props.onClick(e);
  };

  return <StPrimaryBtn {...props}>{props.children}</StPrimaryBtn>;
};

export default PrimaryButton;
export const StPrimaryBtn = styled.button`
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};
  border-radius: 5px;
  padding: 0.5rem 1.25rem;
  margin: ${({ mg }) => mg || "0"};
  width: ${({ wd }) => wd || "none"};
  background-color: ${({ bg }) =>
    bg || css`var(--ig-primary-button-background)`};
  color: #fafafa;
  outline: none;
  border: none;
  cursor: pointer;

  &:active:enabled {
    background: var(--ig-primary-button-hover);
    color: var(--ig-primary-text);
  }
  &:hover:enabled {
    background: var(--ig-primary-button-hover);
    color: var(--ig-primary-text);
  }
  &:active:hover:not([disabled]) {
    color: #fafafa;
    cursor: default;
  }
  &:disabled {
    background-color: var(--color-primary-invalid);
  }
  &:focus {
    outline: none;
  }
`;
