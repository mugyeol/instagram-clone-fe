import React, { Component } from "react";
import styled from "styled-components";

const ScrollDiv = (props) => <StDiv {...props} />;

const StDiv = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  font-size: 1.4rem;
  font-weight: 400;
  height: 49.5rem;
  gap: 2rem;
  padding: 0 0 2rem;

  .content {
    width: 85%;
    overflow: hidden;
    word-break: break-all;
    margin: auto 0;
  }
`;
export default ScrollDiv;
