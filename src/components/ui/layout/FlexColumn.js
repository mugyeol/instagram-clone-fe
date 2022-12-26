import React from "react";
import styled from "styled-components";

const FlexColumn = (props) => {
  return <StFlexColumn mg={props.mg} pd={props.pd} gap={props.gap} justify={props.justify} align={props.align}>{props.children}</StFlexColumn>;
};

export default FlexColumn;

export const StFlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  align-items: ${({align})=> align|| 'flex-start'};
  justify-content: ${({justify})=> justify|| 'flex-start'};

  margin: ${({mg})=> mg|| '0'};
  padding: ${({pd})=> pd|| '0'};
  gap: ${({gap})=> gap|| '0'};
  
`;
