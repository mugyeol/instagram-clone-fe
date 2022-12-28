import React from "react";
import styled from "styled-components";

function TextButton(props) {
  const TEXT_BUTTONS = {
    pointer: CursorPointer,
    primary: Primary,
    addComment: AddComment,
  };

  const TextButton = !props.type ? CursorPointer : TEXT_BUTTONS[props.type];

  return (
    <TextButton {...props} >
      {props.children}
    </TextButton>
  );
}

export default TextButton;
const CursorPointer = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  cursor: pointer;
`;
const Primary = styled(CursorPointer)`
  color: var(--color-primary);
  &:hover {
    color: var(--ig-primary-text);
  }
`;
const AddComment = styled(CursorPointer)`
  color: var(--color-primary);

  &:hover {
    color: var(--ig-primary-text);
  }
  &:hover:not([disabled]) {
    color: var(--color-primary-invalid);
  }
  &:disabled {
    color: var(--color-primary-invalid);
    cursor: default;
  }
`;
