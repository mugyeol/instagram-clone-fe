import React from "react";
import styled from "styled-components";

const FlexRowCenter = (props) => {
  // const onClickHandler = ()=>{
  //   props.onClick()
  // }

  switch (props.type) {
    case "add-header":
      return <AddHeader>{props.children}</AddHeader>;
    default:
      return (
        <StFlexRowCenter
          className={props.className}
          onClick={props.onClick}
          mg={props.mg}
          pd={props.pd}
          gap={props.gap}
          justify={props.justify}
          align={props.align}
        >
          {props.children}
        </StFlexRowCenter>
      );
  }

  // return (

  // );
};

export default FlexRowCenter;

export const StFlexRowCenter = styled.div`
  width: 100%;
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
