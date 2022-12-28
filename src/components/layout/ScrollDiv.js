import React, { Component } from 'react';
import styled from 'styled-components';

const ScrollDiv = (props) => <StDiv {...props} />;

const StDiv = styled.div`
  max-width: 50rem;
  height: 100%;
  overflow-y: scroll;

`
export default ScrollDiv;