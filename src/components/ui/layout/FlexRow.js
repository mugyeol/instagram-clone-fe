import React from "react";
import styled from "styled-components";

const FlexRow = (props) => {
  
  // const onClickHandler = ()=>{
  //   props.onClick()
  // }


  return (
    <StFlexRow className={props.className} onClick={props.onClick} mg={props.mg} pd={props.pd} gap={props.gap} justify={props.justify} align={props.align}>
      {props.children}
    </StFlexRow>
  );
};

export default FlexRow;

export const StFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${({align})=> align|| 'flex-start'};
  justify-content: ${({justify})=> justify|| 'flex-start'};

  margin: ${({mg})=> mg|| '0'};
  padding: ${({pd})=> pd|| '0'};
  gap: ${({gap})=> gap|| '0'};

`;
