import React from 'react'
import styled, {css}from 'styled-components'


function Span(props) {
  return (
    <StSpan fs={props.fs} color={props.color}> 
      {props.children}
    </StSpan>
  )
}

export default Span

const StSpan = styled.span`
    font-size: ${({fs})=> fs|| '1.6rem'};
    color: ${({color})=> color|| css`var(--ig-primary-text)`};

`