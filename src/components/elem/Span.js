import React from 'react'
import styled, {css}from 'styled-components'


function Span(props) {
  return (
    <StSpan {...props}> 
      {props.children}
    </StSpan>
  )
}

export default Span

const StSpan = styled.span`
    font-size: ${({fs})=> fs|| '1.6rem'};
    color: ${({color})=> color|| css`var(--ig-primary-text)`};
    flex: ${({flex})=> flex || 'none'}

`