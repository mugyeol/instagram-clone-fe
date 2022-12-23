import React from 'react'
import { styled } from 'styled-components';

const Layout = ({children}) => {
  return (
    <StDiv>
      {children}
    </StDiv>
  )
}

export default Layout

const StDiv = styled.div`

display: flex;
width: 100%;
align-items: center;
justify-content: center;


`