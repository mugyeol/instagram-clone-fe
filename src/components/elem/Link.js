import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const StLink = (props) => <StyledLink {...props} />;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--color-primary-invalid);

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }


`;
export default StLink;