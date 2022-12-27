import React from "react";
import styled from "styled-components";

function TextButton(props) {
  const TEXT_BUTTONS = {
    pointer: CursorPointer,
    primary: Primary,
  };

  const TextButton = !props.type ? CursorPointer : TEXT_BUTTONS[props.type];

  return <TextButton>{props.children}</TextButton>;
}

export default TextButton;
const CursorPointer = styled.div`
  cursor: pointer;
`;
const Primary = styled(CursorPointer)`
  color: var(--color-primary);
  &:hover {
    color: var(--ig-primary-text);
  }
`;
