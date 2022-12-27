import React from "react";
import styled from "styled-components";

const FlexRowCenter = (props) => {
  // const onClickHandler = ()=>{
  //   props.onClick()
  // }

  switch (props.type) {
    case "add-header":
      return <AddHeader>{props.children}</AddHeader>;
    case "sign-in":
      return <LoginFlexRow>{props.children}</LoginFlexRow>;
    case "sign-up":
      return <LoginFlexRow>{props.children}</LoginFlexRow>;
    case "full-height":
      return <FullHeight>{props.children}</FullHeight>;
    default:
      return (
        <StFlexRowCenter
          className={props.className}
          onClick={props.onClick}
          mg={props.mg}
          hg={props.hg}
          pd={props.pd}
          gap={props.gap}
          justify={props.justify}
          align={props.align}
        >
          {props.children}
        </StFlexRowCenter>
      );
  }
};

export default FlexRowCenter;

export const StFlexRowCenter = styled.div`
  width: 100%;
  height: ${({ hg }) => hg || 'none'};
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ mg }) => mg || "0"};
  padding: ${({ pd }) => pd || "0"};
  gap: ${({ gap }) => gap || "0"};
`;
const AddHeader = styled(StFlexRowCenter)`
  justify-content: space-between;
  border-bottom: 1px solid var(--ig-elevated-separator);
  padding: 1.2rem 1.2rem;
`;
const LoginFlexRow = styled(StFlexRowCenter)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex: 1;
`;
const FullHeight = styled(StFlexRowCenter)`
  height: 100%;
`;