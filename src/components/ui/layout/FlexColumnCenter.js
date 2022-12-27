import React from "react";
import styled from "styled-components";

const FlexColumnCenter = (props) => {
  switch (props.type) {
    case "add-body":
      return <AddBody>{props.children}</AddBody>;
    case 'full-height':
      return <FullHeight>{props.children}</FullHeight>;
    default:
      return (
        <StFlexColumnCenter
          wd={props.wd}
          mg={props.mg}
          pd={props.pd}
          gap={props.gap}
          justify={props.justify}
          align={props.align}
          className={props.className}
        >
          {props.children}
        </StFlexColumnCenter>
      );
  }
};

export default FlexColumnCenter;

export const StFlexColumnCenter = styled.div`
  width: ${({ wd }) => wd || "100%"};
  display: flex;
  flex-direction: column;

  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};

  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
`;
const AddBody = styled(StFlexColumnCenter)`
  height: 100%;
  gap: 3rem;
  h1 {
    font-weight: 200;
  }
`;
const FullHeight = styled(StFlexColumnCenter)`
  height: 100%;
`
