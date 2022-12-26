import React from "react";
import styled from "styled-components";

const FlexRowCenter = (props) => {
  
  const onClickHandler = ()=>{
    props.onClick()
  }


  return (
    <StFlexRowCenter onClick={onClickHandler} mg={props.mg} pd={props.pd} gap={props.gap} justify={props.justify} align={props.align}>
      {props.children}
    </StFlexRowCenter>
  );
};

export default FlexRowCenter;

export const StFlexRowCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${({align})=> align|| 'center'};
  justify-content: ${({justify})=> justify|| 'center'};

  margin: ${({mg})=> mg|| '0'};
  padding: ${({pd})=> pd|| '0'};
  gap: ${({gap})=> gap|| '0'};

`;
