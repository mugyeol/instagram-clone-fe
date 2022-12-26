import styled, { css } from "styled-components";

export const IconImg = styled.img`
  width: ${({ wd }) => wd || "2.5rem"};
  height: ${({ hg }) => hg || "2.5rem"};
  filter: ${({ secondary }) =>
    secondary ? css`var(--ig-secondary-logo)` : css`var(--ig-primary-logo)`};
`;
